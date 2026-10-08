// Featured projects verified from Vijay Purandare's resume

export interface FeaturedProject {
  id: string;
  slug: string;
  repoName: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: { name: string; reason: string }[];
  features: string[];
  challenges: string[];
  results: string[];
  future: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  tags: string[];
  visual: 'ide' | 'workspace' | 'cybersec' | 'ai-desktop' | 'data' | 'web';
  featured: boolean;
  order: number;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'minddesk-ai',
    slug: 'minddesk-ai',
    repoName: 'dragon-desk-ai',
    title: 'MindDesk AI (Dragon)',
    tagline: 'On-device AI desktop assistant featuring multilingual voice, screen understanding, OCR & RAG.',
    description:
      'Developed an on-device AI desktop assistant featuring multilingual voice interaction, screen understanding, and developer-focused error diagnosis. Integrated OCR, RAG, and local AI workflows to support intelligent assistance, code suggestions, and automated presentation generation with user-controlled execution.',
    problem:
      'Cloud-bound assistants incur network latency, expose private screen context to remote servers, and fail in offline or resource-constrained settings.',
    solution:
      'Engineered an on-device Electron desktop client powered by ONNX Runtime and DirectML hardware acceleration with local quantized LLMs, local OCR screen parsing, and RAG knowledge indexing.',
    architecture:
      'Electron desktop frontend communicates with local ONNX inference engines via DirectML GPU/NPU acceleration. Background screen OCR runs through Tesseract/Vision embeddings into a local SQLite vector store for retrieval-augmented generation.',
    technologies: [
      { name: 'React & TypeScript', reason: 'Modern type-safe reactive UI for assistant floating overlays.' },
      { name: 'Electron', reason: 'Cross-platform desktop integration with OS window and screen capture hooks.' },
      { name: 'ONNX & DirectML', reason: 'Hardware-accelerated on-device neural execution with zero cloud egress.' },
      { name: 'RAG & OCR', reason: 'Local context retrieval from active developer desktop windows.' },
    ],
    features: [
      'Multilingual voice interaction with local speech-to-text',
      'Real-time desktop screen understanding and OCR text capture',
      'Developer-focused stack trace and error diagnosis',
      'Retrieval-Augmented Generation (RAG) over local project notes',
      'Automated presentation generation with user-controlled execution',
      'Zero cloud data transmission for complete privacy',
    ],
    challenges: [
      'Optimizing DirectML memory allocation to avoid GPU memory starvation during concurrent screen captures.',
      'Maintaining low-latency voice streaming (<150ms) using quantized local audio models.',
    ],
    results: [
      'Successfully deployed on-device assistant running smoothly on Windows with local hardware acceleration.',
      'Featured in Qualcomm Snapdragon AI Lab competition.',
    ],
    future: [
      'Cross-platform macOS and Linux DirectML/CoreML bindings.',
      'Agentic multi-window task execution with confirmation safety guardrails.',
    ],
    githubUrl: 'https://github.com/vijju9019/dragon-desk-ai',
    category: 'AI / On-Device',
    tags: ['React', 'TypeScript', 'Electron', 'ONNX', 'DirectML', 'RAG'],
    visual: 'ai-desktop',
    featured: true,
    order: 1,
  },
  {
    id: 'cloudbase-ide',
    slug: 'cloudbase-ide',
    repoName: 'CloudBase-IDE',
    title: 'CloudBase IDE',
    tagline: 'Local-first, secure cloud development environment with Docker container isolation.',
    description:
      'A secure local-first development environment designed to combine the flexibility of cloud IDEs with the privacy and performance of a local development environment. Features container-isolated workspaces, real-time file management, AI coding assistance, and full desktop integration.',
    problem:
      'Developers need instant environment provisioning without sacrificing source code privacy or being dependent on continuous cloud internet connectivity.',
    solution:
      'CloudBase IDE spawns reproducible, container-isolated Docker developer environments on the local machine with Monaco editor, terminal streaming, and Supabase state synchronization.',
    architecture:
      'Electron client hosts a React web frontend connected to a local Express/Node.js orchestration daemon. The daemon spawns isolated Docker containers with bi-directional WebSocket pty terminal streaming.',
    technologies: [
      { name: 'React & TypeScript', reason: 'Type-safe component hierarchy for editor tabs and file explorer.' },
      { name: 'Docker', reason: 'Hermetic container isolation for reproducible project runtimes.' },
      { name: 'Electron & Node.js', reason: 'Local system orchestration and terminal pty process management.' },
      { name: 'Supabase', reason: 'Workspace metadata, preferences, and session persistence.' },
    ],
    features: [
      'Container-isolated development workspaces',
      'Monaco-powered browser and desktop code editor',
      'Low-latency WebSocket terminal streaming',
      'Virtual file system management with live file watcher',
      'Persistent workspace state across reboots',
    ],
    challenges: [
      'Handling bi-directional terminal backpressure under heavy compilation log streaming.',
    ],
    results: [
      'Zero remote telemetry — 100% of source code remains inside local container boundary.',
    ],
    future: [
      'SSH remote server attachment and team pair-programming CRDT sync.',
    ],
    githubUrl: 'https://github.com/vijju9019/CloudBase-IDE',
    category: 'Developer Tools',
    tags: ['React', 'TypeScript', 'Electron', 'Docker', 'Node.js', 'Supabase'],
    visual: 'ide',
    featured: true,
    order: 2,
  },
  {
    id: 'ominiai-scraper',
    slug: 'ominiai-scraper',
    repoName: 'OminiAI-Web-Scraper',
    title: 'OminiAI – AI-Powered Web Scraper',
    tagline: 'Intelligent Chrome extension that identifies repeating DOM structures & extracts structured data.',
    description:
      'Built an intelligent browser extension that identifies repeating webpage structures and extracts structured information such as titles, prices, dates, and images. Implemented dynamic pagination, infinite-scroll handling, data previews, and export functionality supporting CSV, XLSX, and JSON formats.',
    problem:
      'Extracting tabular data from dynamic web applications requires writing fragile site-specific scrapers that break whenever HTML structures update.',
    solution:
      'OminiAI utilizes structural pattern matching and heuristic algorithms inside a Chrome Manifest V3 extension to automatically detect repeating listing patterns, handle pagination, and export clean datasets.',
    architecture:
      'Chrome Extension Manifest V3 background service workers and content scripts. Content script parses DOM tree clusters, identifies repeating semantic nodes, and handles virtual scroll triggers. React popup provides live data previews and CSV/JSON/XLSX export.',
    technologies: [
      { name: 'React & TypeScript', reason: 'Modular extension popup and options interface.' },
      { name: 'Chrome APIs (Manifest V3)', reason: 'Background service worker orchestration and DOM content scripts.' },
      { name: 'Pattern Recognition', reason: 'Automated clustering of repeating DOM subtree nodes.' },
      { name: 'XLSX & CSV Generation', reason: 'In-browser multi-format data export engine.' },
    ],
    features: [
      'Automated detection of repeating listings, tables, and cards',
      'Infinite-scroll and multi-page pagination traversal',
      'Structured extraction of titles, prices, ratings, dates, and images',
      'Live in-browser tabular data preview',
      'Instant export to CSV, XLSX, and JSON formats',
    ],
    challenges: [
      'Adhering to strict Chrome Manifest V3 ephemeral service worker lifecycles during long scraping sessions.',
      'Correctly extracting content rendered through Shadow DOM and client-side virtualized lists.',
    ],
    results: [
      'Successfully extracted 1,000+ records in under 30 seconds across major dynamic e-commerce and listing portals.',
    ],
    future: [
      'Local LLM schema transformation to automatically normalize extracted columns into standard SQL schemas.',
    ],
    githubUrl: 'https://github.com/vijju9019',
    category: 'AI / Web Extension',
    tags: ['React', 'TypeScript', 'Chrome APIs', 'Manifest V3', 'Web Scraping'],
    visual: 'web',
    featured: true,
    order: 3,
  },
  {
    id: 'gworkspace',
    slug: 'gworkspace-enterprise',
    repoName: 'GWorkshop',
    title: 'GWorkspace Enterprise',
    tagline: 'Cloud-powered virtual workspace platform with interactive desktop experience & draggable windows.',
    description:
      'Developed a cloud-powered workspace platform that brings desktop-like functionality into a unified application. Built interactive workspaces with draggable windows, file management, and persistent application state. Integrated frontend and backend services to support workspace management and cloud-based functionality.',
    problem:
      'Managing multiple distributed cloud projects requires switching between disjointed browser tabs, terminals, and cloud dashboards.',
    solution:
      'Unified cloud desktop with draggable, resizable window components, persistent workspace state, integrated file explorer, and Supabase cloud authentication.',
    architecture:
      'React frontend renders a virtual OS window manager. Electron shell wraps native OS APIs. Node.js backend synchronizes workspace files and credentials with Supabase PostgreSQL.',
    technologies: [
      { name: 'React & Vite', reason: 'Fast UI rendering of draggable window frames and taskbars.' },
      { name: 'TypeScript', reason: 'Type safety across window state machine and file representations.' },
      { name: 'Electron', reason: 'Native desktop shell and OS filesystem interoperability.' },
      { name: 'Supabase', reason: 'Cloud persistence and real-time multi-device workspace sync.' },
    ],
    features: [
      'Draggable and resizable multi-window desktop interface',
      'Virtual file system with file previewers',
      'Isolated workspace states with cloud persistence',
      'Integrated app launcher and taskbar manager',
    ],
    challenges: [
      'Optimizing window drag-and-drop performance to maintain 60 FPS without layout thrashing.',
    ],
    results: [
      'Smooth desktop experience running directly in the browser and as a packaged desktop client.',
    ],
    future: [
      'Multi-user live cursor collaboration and shared window streaming.',
    ],
    githubUrl: 'https://github.com/vijju9019/GWorkshop',
    category: 'Cloud Platform',
    tags: ['React', 'TypeScript', 'Vite', 'Electron', 'Node.js', 'Supabase'],
    visual: 'workspace',
    featured: true,
    order: 4,
  },
  {
    id: 'google-workspace-mgmt',
    slug: 'google-workspace-management',
    repoName: 'google-workspace-mgmt',
    title: 'Google Workspace Management System',
    tagline: 'Admin platform for user provisioning, group management, and OAuth 2.0 access control.',
    description:
      'Built an administration platform for managing Google Workspace operations. Integrated Google Admin SDK APIs to support user provisioning, group management, and access control. Implemented OAuth 2.0 authentication and backend services to handle administrative workflows and secure API interactions.',
    problem:
      'Enterprise Google Workspace administration often requires navigating complex consoles without custom batch provisioning or auditing workflows.',
    solution:
      'Streamlined admin portal with OAuth 2.0 SSO, Google Admin SDK integrations, automated role assignment, and MongoDB audit logging.',
    architecture:
      'React.js interface communicates with a Node.js/Express backend. Backend securely holds OAuth 2.0 service account credentials and interfaces with Google Admin SDK Directory APIs.',
    technologies: [
      { name: 'React.js', reason: 'Admin dashboard with responsive user tables and role editors.' },
      { name: 'Node.js & Express', reason: 'Secure API middleware handling Google Admin SDK calls.' },
      { name: 'MongoDB', reason: 'Audit logging of administrative actions and local user directory cache.' },
      { name: 'Google Admin SDK', reason: 'Official directory APIs for users, groups, and domain policies.' },
    ],
    features: [
      'Automated Google Workspace user provisioning and deprovisioning',
      'Group membership management and bulk permission updates',
      'OAuth 2.0 administrative authentication with granular scopes',
      'Audit log tracking with MongoDB persistence',
    ],
    challenges: [
      'Handling Google API quota rate-limiting during batch operations via exponential backoff.',
    ],
    results: [
      'Reduced user onboarding overhead with one-click administrative provisioning.',
    ],
    future: [
      'Automated scheduled access reviews and Slack notifications for admin events.',
    ],
    githubUrl: 'https://github.com/vijju9019',
    category: 'Cloud Infrastructure',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Google Workspace API', 'OAuth 2.0'],
    visual: 'web',
    featured: true,
    order: 5,
  },
  {
    id: 'cloud-infra-monitor',
    slug: 'cloud-infrastructure-monitoring',
    repoName: 'cloud-infra-monitoring',
    title: 'Cloud Infrastructure Monitoring Platform',
    tagline: 'Monitoring platform for cloud health metrics, Docker container telemetry, and automated alerts.',
    description:
      'Developed a monitoring platform to track cloud infrastructure and application health. Worked on containerizing services with Docker and integrating monitoring capabilities for collecting system metrics, analyzing logs, and displaying information through interactive dashboards. Explored automated alerts to help identify potential infrastructure issues.',
    problem:
      'Distributed container workloads require unified visibility into CPU, memory, log streams, and container health without expensive third-party SaaS fees.',
    solution:
      'Dockerized monitoring agent and server running on AWS with interactive React dashboards, time-series metric collection, and alerting thresholds.',
    architecture:
      'Python daemon collects host and container cgroup metrics. Metrics are ingested into time-series store and visualized on a React.js dashboard deployed on AWS.',
    technologies: [
      { name: 'AWS & Docker', reason: 'Cloud hosting environment and container runtime.' },
      { name: 'Python', reason: 'Metric collection daemons and log parsing scripts.' },
      { name: 'React.js', reason: 'Interactive metric graphs and system health status panels.' },
    ],
    features: [
      'Container CPU, memory, and network I/O telemetry',
      'Centralized application log streaming and searching',
      'Automated threshold alerts for container degradation',
      'Interactive health dashboards with real-time refresh',
    ],
    challenges: [
      'Collecting high-frequency metrics with minimal CPU overhead on monitored host instances.',
    ],
    results: [
      'Delivered full observability across containerized services with instant alert triggers.',
    ],
    future: [
      'Prometheus and Grafana exporter integrations for Kubernetes clusters.',
    ],
    githubUrl: 'https://github.com/vijju9019',
    category: 'DevOps / Cloud',
    tags: ['AWS', 'Docker', 'Python', 'React.js', 'Monitoring'],
    visual: 'data',
    featured: true,
    order: 6,
  },
];

export function getFeaturedProjects(): FeaturedProject[] {
  return featuredProjects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}
