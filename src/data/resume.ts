// Official verified resume data for Vijay Purandare

export interface ResumeData {
  name: string;
  location: string;
  pincode: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    grade?: string;
    coursework?: string[];
  }[];
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
  softSkills: string[];
  workExperience: {
    role: string;
    company: string;
    duration: string;
    bullets: string[];
  }[];
  projects: {
    title: string;
    technologies: string[];
    description: string;
  }[];
  achievements: string[];
  certifications: {
    name: string;
    issuer: string;
  }[];
}

export const resumeData: ResumeData = {
  name: 'Vijay Purandare',
  location: 'Bangalore, Karnataka, India',
  pincode: '560068',
  phone: '+91 9019778187',
  email: 'purandarevijay123@gmail.com',
  linkedin: 'https://linkedin.com/in/vijay-purandare',
  github: 'https://github.com/vijju9019',
  summary:
    'Aspiring AI Engineer and Computer Science undergraduate with strong foundations in Software Engineering, Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Experienced in designing, building, testing, and deploying scalable Web Applications using React.js, Node.js, Express.js, MongoDB, MySQL, Python, JavaScript, HTML, and CSS. Skilled in Front End Web Development, Web Design, Web Architecture, REST API development, cloud computing, Docker, Git, Agile methodologies, and Software Development Life Cycle (SDLC). Strong problem solving skills, organizational skills, attention to detail, excellent verbal communication, and team collaboration abilities.',
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Cambridge Institute of Technology',
      period: 'September 2025 – May 2028',
      grade: 'CGPA: 8.2 / 10.0',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Web Development',
        'Machine Learning',
        'Software Engineering',
      ],
    },
    {
      degree: 'Diploma in Engineering',
      institution: 'S.G.E.S Polytechnic, Tarihal',
      period: 'May 2022',
      grade: '84%',
    },
    {
      degree: '10th Standard',
      institution: 'New English High School, Hubli',
      period: 'May 2021',
      grade: '92%',
    },
  ],
  technicalSkills: [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'AngularJS', 'HTML', 'CSS', 'Responsive Web Design', 'Front End Web Development'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Authentication', 'Authorization'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Linux', 'CI/CD', 'N8N'],
    },
    {
      category: 'AI/ML',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning Models', 'NLP', 'Deep Learning', 'Model Evaluation'],
    },
    {
      category: 'Software Engineering',
      skills: [
        'Data Structures',
        'Algorithms',
        'OOP',
        'Design Patterns',
        'SDLC',
        'Agile Methodology',
        'Web Architecture',
        'Debugging',
        'Testing',
        'System Design',
        'Performance Optimization',
      ],
    },
  ],
  softSkills: [
    'Problem Solving Skills',
    'Attention to Detail',
    'Excellent Verbal Communication',
    'Organizational Skills',
    'Team Collaboration',
    'Leadership',
    'Time Management',
    'Accountability',
    'Growth Mindset',
    'Reliability',
  ],
  workExperience: [
    {
      role: 'AI/ML Intern',
      company: 'Samsung',
      duration: '6 Months',
      bullets: [
        'Applied AI/ML concepts in model development and experimentation.',
        'Supported data preparation, model training, and evaluation workflows.',
        'Explored AI-driven solutions and collaborated on technical activities.',
      ],
    },
    {
      role: 'Cyber Security Intern',
      company: 'Agile I Tech Company',
      duration: '6 Months',
      bullets: [
        'Built Python automation scripts for security analysis and reporting.',
        'Collaborated with cross-functional teams using Agile methodologies.',
        'Worked with Linux, networking, debugging, troubleshooting, and monitoring.',
        'Performed testing, vulnerability analysis, and root-cause investigations.',
      ],
    },
  ],
  projects: [
    {
      title: 'MindDesk AI (Dragon)',
      technologies: ['React', 'TypeScript', 'Electron', 'ONNX', 'DirectML'],
      description:
        'Developed an on-device AI desktop assistant featuring multilingual voice interaction, screen understanding, and developer-focused error diagnosis. Integrated OCR, RAG, and local AI workflows to support intelligent assistance, code suggestions, and automated presentation generation with user-controlled execution.',
    },
    {
      title: 'OminiAI – AI-Powered Web Scraper',
      technologies: ['React', 'TypeScript', 'Chrome APIs', 'Manifest V3'],
      description:
        'Built an intelligent browser extension that identifies repeating webpage structures and extracts structured information such as titles, prices, dates, and images. Implemented dynamic pagination, infinite-scroll handling, data previews, and export functionality supporting CSV, XLSX, and JSON formats.',
    },
    {
      title: 'GWorkspace Enterprise',
      technologies: ['React', 'TypeScript', 'Vite', 'Electron', 'Node.js', 'Supabase'],
      description:
        'Developed a cloud-powered workspace platform that brings desktop-like functionality into a unified application. Built interactive workspaces with draggable windows, file management, and persistent application state. Integrated frontend and backend services to support workspace management and cloud-based functionality.',
    },
    {
      title: 'Google Workspace Management System',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Workspace API'],
      description:
        'Built an administration platform for managing Google Workspace operations. Integrated Google Admin SDK APIs to support user provisioning, group management, and access control. Implemented OAuth 2.0 authentication and backend services to handle administrative workflows and secure API interactions.',
    },
    {
      title: 'Cloud Infrastructure Monitoring Platform',
      technologies: ['AWS', 'Docker', 'Python', 'React.js'],
      description:
        'Developed a monitoring platform to track cloud infrastructure and application health. Worked on containerizing services with Docker and integrating monitoring capabilities for collecting system metrics, analyzing logs, and displaying information through interactive dashboards. Explored automated alerts to help identify potential infrastructure issues.',
    },
  ],
  achievements: [
    'Top Team – Amazon Hackathon 6.0 2025',
    'Finalist – Smart India Hackathon Grand Finale 2025',
    'Winner – GDG ZyNex Hackathon 2025',
    'Top 10 Finalist – ProtoVision Ignite 2024',
    'Participant – Snapdragon AI Lab',
    'Solved 100+ DSA problems on LeetCode, GeeksforGeeks, HackerRank, and CodeChef',
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner Certification',
      issuer: 'Amazon Web Services',
    },
    {
      name: 'Machine Learning Certification',
      issuer: 'Infosys Springboard',
    },
    {
      name: 'Software Engineering Coursework',
      issuer: 'Cambridge Institute of Technology',
    },
  ],
};
