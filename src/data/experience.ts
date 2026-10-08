export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: 'internship' | 'full-time' | 'contract';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'samsung-aiml-intern',
    role: 'AI/ML Intern',
    company: 'Samsung',
    type: 'internship',
    period: '6 Months',
    location: 'Bangalore, India',
    description:
      'Worked as an AI/ML Intern focusing on model development, data engineering pipelines, and exploring AI-driven solutions.',
    responsibilities: [
      'Applied AI/ML concepts in model development and experimentation.',
      'Supported data preparation, feature engineering, model training, and evaluation workflows.',
      'Explored AI-driven solutions and collaborated on cross-functional technical activities.',
      'Evaluated model accuracy, loss metrics, and inference optimization techniques.',
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning', 'NLP'],
    current: false,
  },
  {
    id: 'agile-i-security-intern',
    role: 'Cyber Security Intern',
    company: 'Agile I Tech Company',
    type: 'internship',
    period: '6 Months',
    location: 'Bangalore, India',
    description:
      'Engineered Python security automation scripts, conducted vulnerability assessments, and collaborated in Agile sprint cycles.',
    responsibilities: [
      'Built Python automation scripts for security analysis, log monitoring, and reporting.',
      'Collaborated with cross-functional engineering teams using Agile methodologies.',
      'Worked extensively with Linux environments, networking protocols, debugging, troubleshooting, and system monitoring.',
      'Performed vulnerability analysis, security testing, and root-cause investigations.',
    ],
    technologies: ['Python', 'Linux', 'Networking', 'Security Automation', 'Agile', 'Vulnerability Analysis'],
    current: false,
  },
];
