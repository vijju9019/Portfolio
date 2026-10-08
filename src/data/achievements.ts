export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  type: 'winner' | 'finalist' | 'participant' | 'recognition';
  icon: 'trophy' | 'medal' | 'star' | 'award';
}

export const achievements: Achievement[] = [
  {
    id: 'amazon-hackathon-2025',
    title: 'Amazon Hackathon 6.0',
    subtitle: 'Top Team Award',
    description:
      'Recognized as a Top Team in Amazon Hackathon 6.0 (2025), architecting a cloud-native, scalable infrastructure and software solution.',
    year: '2025',
    type: 'winner',
    icon: 'trophy',
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025',
    subtitle: 'Finalist — National Grand Finale',
    description:
      'Selected as a National Grand Finale Finalist in Smart India Hackathon 2025, solving real-world government & industry problem statements.',
    year: '2025',
    type: 'finalist',
    icon: 'award',
  },
  {
    id: 'gdg-zynex-2025',
    title: 'GDG ZyNex Hackathon 2025',
    subtitle: 'Winner — 1st Place',
    description:
      'Secured 1st Place / Winner at the Google Developer Group (GDG) ZyNex Hackathon 2025, building a high-impact AI application sprint.',
    year: '2025',
    type: 'winner',
    icon: 'trophy',
  },
  {
    id: 'protovision-2024',
    title: 'ProtoVision Ignite 2024',
    subtitle: 'Top 10 Finalist',
    description:
      'Ranked among the Top 10 Finalists in ProtoVision Ignite 2024 for product engineering and rapid prototype validation.',
    year: '2024',
    type: 'finalist',
    icon: 'medal',
  },
  {
    id: 'snapdragon-ai-lab',
    title: 'Snapdragon AI Lab',
    subtitle: 'Qualcomm & HP Finalist Participant',
    description:
      'Competed in the Qualcomm Snapdragon AI Lab competition, building on-device NPU accelerated AI intelligence with MindDesk AI.',
    year: '2025',
    type: 'recognition',
    icon: 'star',
  },
  {
    id: 'dsa-problem-solving',
    title: '100+ DSA Problems Solved',
    subtitle: 'LeetCode, GfG, HackerRank & CodeChef',
    description:
      'Solved over 100 Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, HackerRank, and CodeChef demonstrating algorithmic depth.',
    year: '2025',
    type: 'recognition',
    icon: 'star',
  },
];

export const certifications = [
  {
    title: 'AWS Cloud Practitioner Certification',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
  {
    title: 'Machine Learning Certification',
    issuer: 'Infosys Springboard',
    year: '2024',
  },
  {
    title: 'Software Engineering Coursework',
    issuer: 'Cambridge Institute of Technology',
    year: '2025',
  },
];
