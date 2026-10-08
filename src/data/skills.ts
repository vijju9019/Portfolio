export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  description: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', description: 'Primary language for ML, automation, and backend systems.' },
      { name: 'Java', description: 'Android development and data structures & algorithms.' },
      { name: 'C++', description: 'High-performance computing and systems programming.' },
      { name: 'JavaScript', description: 'Core web scripting and asynchronous event handling.' },
      { name: 'TypeScript', description: 'Type-safe scalable frontend and Node.js backend architecture.' },
      { name: 'SQL', description: 'Relational database schema modeling and complex queries.' },
      { name: 'HTML & CSS', description: 'Semantic markup, modern layout, and responsive web design.' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', description: 'Component-based UI development with hooks, context, and state machines.' },
      { name: 'AngularJS', description: 'Enterprise front-end frameworks and structural web architectures.' },
      { name: 'Vite', description: 'Next-generation build tool with lightning-fast HMR.' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS styling for rapid, modern responsive design.' },
      { name: 'Framer Motion', description: 'Production-ready physics-based fluid web animations.' },
      { name: 'Electron', description: 'Cross-platform desktop application packaging and native OS APIs.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { name: 'Node.js', description: 'Event-driven, asynchronous server-side runtime.' },
      { name: 'Express.js', description: 'Fast, minimalist RESTful web APIs and middleware routing.' },
      { name: 'FastAPI', description: 'High-performance Python API framework with Pydantic validation.' },
      { name: 'REST APIs', description: 'Stateless API architecture, OpenAPI specifications, and endpoints.' },
      { name: 'OAuth 2.0 & Auth', description: 'Authentication, authorization, JWT tokens, and Google Admin SDKs.' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', description: 'Document-oriented NoSQL database for flexible document schemas.' },
      { name: 'MySQL', description: 'Relational database design, ACID compliance, and indexing.' },
      { name: 'Database Design', description: 'Normalized entity relationships and query optimization.' },
      { name: 'Supabase', description: 'PostgreSQL-backed real-time backend and row-level security.' },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', description: 'Deep learning neural networks and model evaluation.' },
      { name: 'Scikit-learn', description: 'Classical ML models, classification, regression, and pipelines.' },
      { name: 'Pandas & NumPy', description: 'Numerical computing, matrix mathematics, and data preprocessing.' },
      { name: 'NLP & LLMs', description: 'Natural Language Processing, tokenization, embeddings, and prompt workflows.' },
      { name: 'ONNX & DirectML', description: 'Hardware-accelerated on-device local model inference.' },
      { name: 'RAG & OCR', description: 'Retrieval-Augmented Generation with local vector search and text capture.' },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', description: 'Amazon Web Services cloud infrastructure and cloud monitoring.' },
      { name: 'Docker', description: 'Containerization, microservice isolation, and reproducible deployments.' },
      { name: 'Git & GitHub', description: 'Distributed version control, pull requests, and collaborative CI/CD.' },
      { name: 'Linux', description: 'Bash scripting, server administration, networking, and system diagnostics.' },
      { name: 'CI/CD & N8N', description: 'Automated test & deploy pipelines and workflow automation.' },
    ],
  },
  {
    id: 'software-eng',
    label: 'Software Engineering',
    skills: [
      { name: 'Data Structures & Algorithms', description: 'Array, tree, graph, and DP problem solving (100+ solved).' },
      { name: 'OOP & Design Patterns', description: 'Clean architecture, SOLID principles, and design patterns.' },
      { name: 'System Design', description: 'Scalable web architecture, caching, and state management.' },
      { name: 'Agile & SDLC', description: 'Sprint cycles, debugging, testing, and performance optimization.' },
    ],
  },
];

export const mlRoadmap = [
  { id: 1, label: 'Python Fundamentals', status: 'done', description: 'Core Python, OOP, and standard library.' },
  { id: 2, label: 'NumPy & Arrays', status: 'done', description: 'N-dimensional arrays, broadcasting, vectorized ops.' },
  { id: 3, label: 'Pandas', status: 'done', description: 'DataFrames, data loading, transformation, and aggregation.' },
  { id: 4, label: 'Matplotlib / Seaborn', status: 'done', description: 'Statistical visualization and EDA.' },
  { id: 5, label: 'Scikit-learn Basics', status: 'done', description: 'Classification, regression, clustering fundamentals.' },
  { id: 6, label: 'Machine Learning', status: 'done', description: 'Supervised and unsupervised learning algorithms.' },
  { id: 7, label: 'Model Evaluation', status: 'done', description: 'Precision, recall, AUC-ROC, confusion matrix.' },
  { id: 8, label: 'Feature Engineering', status: 'done', description: 'Feature selection, encoding, scaling, imputation.' },
  { id: 9, label: 'Cross Validation', status: 'done', description: 'K-fold, stratified split, leakage prevention.' },
  { id: 10, label: 'Hyperparameter Tuning', status: 'learning', description: 'Grid search, random search, Bayesian optimization.' },
  { id: 11, label: 'Ensemble Learning', status: 'learning', description: 'Bagging, boosting, stacking, XGBoost.' },
  { id: 12, label: 'ML Projects', status: 'learning', description: 'End-to-end production ML pipelines.' },
  { id: 13, label: 'Deployment', status: 'upcoming', description: 'FastAPI, Docker, cloud deployment, REST APIs.' },
  { id: 14, label: 'MLOps', status: 'upcoming', description: 'MLflow, model versioning, monitoring, drift detection.' },
  { id: 15, label: 'Deep Learning', status: 'upcoming', description: 'Neural networks, backpropagation, CNNs, RNNs.' },
  { id: 16, label: 'Computer Vision / NLP', status: 'upcoming', description: 'Image classification, object detection, transformers.' },
  { id: 17, label: 'Generative AI', status: 'upcoming', description: 'LLMs, fine-tuning, RAG, AI agents, prompt engineering.' },
];
