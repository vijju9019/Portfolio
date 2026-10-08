// GitHub API Service
// Uses public endpoints only - no tokens needed or exposed.

const GITHUB_API = 'https://api.github.com';
const CACHE: Record<string, { data: unknown; timestamp: number }> = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function isCached(key: string): boolean {
  return !!CACHE[key] && Date.now() - CACHE[key].timestamp < CACHE_TTL;
}

function getCache<T>(key: string): T {
  return CACHE[key].data as T;
}

function setCache(key: string, data: unknown): void {
  CACHE[key] = { data, timestamp: Date.now() };
}

async function request<T>(url: string): Promise<T> {
  const cacheKey = url;
  if (isCached(cacheKey)) return getCache<T>(cacheKey);

  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!res.ok) {
    if (res.status === 403) throw new Error('GitHub API rate limit reached. Please try again in a few minutes.');
    if (res.status === 404) throw new Error('Resource not found on GitHub.');
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data: T = await res.json();
  setCache(cacheKey, data);
  return data;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  private: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
  open_issues_count: number;
  size: number;
  visibility: string;
}

export interface GitHubLanguages {
  [language: string]: number;
}

export interface GitHubReadme {
  content: string;
  encoding: string;
}

export async function fetchUserProfile(username: string): Promise<GitHubUser> {
  return request<GitHubUser>(`${GITHUB_API}/users/${username}`);
}

export async function fetchRepositories(username: string): Promise<GitHubRepo[]> {
  const allRepos: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `${GITHUB_API}/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`;
    const repos = await request<GitHubRepo[]>(url);
    allRepos.push(...repos);
    if (repos.length < perPage) break;
    page++;
  }

  // Filter: non-fork, non-archived, non-private, exclude profile readme
  return allRepos.filter(
    (r) => !r.fork && !r.archived && !r.private && r.name !== username
  );
}

export async function fetchRepositoryDetails(owner: string, repo: string): Promise<GitHubRepo> {
  return request<GitHubRepo>(`${GITHUB_API}/repos/${owner}/${repo}`);
}

export async function fetchRepositoryReadme(owner: string, repo: string): Promise<string> {
  try {
    const data = await request<GitHubReadme>(`${GITHUB_API}/repos/${owner}/${repo}/readme`);
    // Decode base64 content
    return atob(data.content.replace(/\n/g, ''));
  } catch {
    return '';
  }
}

export async function fetchLanguages(owner: string, repo: string): Promise<GitHubLanguages> {
  try {
    return await request<GitHubLanguages>(`${GITHUB_API}/repos/${owner}/${repo}/languages`);
  } catch {
    return {};
  }
}

export function sortRepositories(repos: GitHubRepo[]): GitHubRepo[] {
  // Priority scoring
  const score = (r: GitHubRepo): number => {
    let s = 0;
    if (r.description) s += 30;
    if (r.homepage) s += 20;
    if (r.topics && r.topics.length > 0) s += r.topics.length * 5;
    s += r.stargazers_count * 10;
    s += r.forks_count * 8;
    // Recency bonus (last push within 3 months = +15)
    const daysSincePush = (Date.now() - new Date(r.pushed_at).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSincePush < 90) s += 15;
    if (daysSincePush < 30) s += 10;
    return s;
  };

  return [...repos].sort((a, b) => score(b) - score(a));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? 's' : ''} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(days / 365)} year${Math.floor(days / 365) > 1 ? 's' : ''} ago`;
}
