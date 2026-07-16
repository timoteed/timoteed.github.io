export const profile = {
  name: 'Timothy Dixon',
  role: 'DevOps & Build Engineering Consultant',
  tagline:
    'Senior consultant specializing in configuration management, CI/CD automation, and build engineering — helping enterprise teams ship software faster, safer, and at lower cost.',
  email: 'timdixon23@icloud.com',
  phone: '(423) 202-1680',
  location: 'Johnson City, TN',
}

export const stats = [
  { value: '8+', label: 'Years at CGI' },
  { value: '14+', label: 'Years professional experience' },
  { value: '3', label: 'Industries served' },
  { value: '100%', label: 'Commitment to delivery' },
]

export const skillGroups = [
  {
    title: 'DevOps & Delivery',
    command: 'ls ~/devops',
    items: ['DevOps', 'Continuous Integration', 'Continuous Deployment', 'Jenkins', 'Automation'],
  },
  {
    title: 'Engineering Practices',
    command: 'ls ~/practices',
    items: ['Configuration Management', 'Build Engineering', 'Version Control', 'Agile Methodologies'],
  },
  {
    title: 'Languages & Tooling',
    command: 'ls ~/toolkit',
    items: ['Python', 'Shell Scripting', 'Git', 'Informatica', 'Teradata'],
  },
]

export interface ExperienceItem {
  company: string
  location: string
  role: string
  period: string
  current?: boolean
  highlights: { title: string; description: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'CGI Federal',
    location: 'Johnson City, TN',
    role: 'Senior Consultant',
    period: 'Feb 2018 — Present',
    current: true,
    highlights: [
      {
        title: 'Configuration Management / Build Engineering',
        description:
          'Create and maintain company software builds and the build system, leading major system upgrades and overhauls across the organization.',
      },
      {
        title: 'Innovation & Proofs of Concept',
        description:
          'Develop proofs of concept for new tools and methodologies the company plans to implement, shaping the technical roadmap.',
      },
    ],
  },
  {
    company: 'CGI Group Inc.',
    location: 'Lafayette, LA',
    role: 'Consultant',
    period: 'Jan 2016 — Feb 2018',
    highlights: [
      {
        title: 'Healthcare DevOps',
        description:
          'Developed and delivered a database version control and automation process using existing client technologies, saving the client significantly in time and operating costs.',
      },
      {
        title: 'Healthcare Big Data',
        description:
          'Created workflows and queries with Informatica and Teradata to ensure proper movement and handling of data between company systems; contributed to the client\u2019s continuous integration and deployment initiatives.',
      },
    ],
  },
  {
    company: "Pal's Sudden Service",
    location: 'Johnson City, TN',
    role: 'Assistant Manager',
    period: '2010 — 2016',
    highlights: [
      {
        title: 'Operations Leadership',
        description:
          'Supervised a staff of 8+ employees and reported directly to the store operator.',
      },
      {
        title: 'Root Cause Analysis',
        description:
          'Applied root cause analysis to resolve issues in alignment with key business drivers.',
      },
    ],
  },
]

export const education = {
  school: 'East Tennessee State University',
  location: 'Johnson City, TN',
  degree: 'B.S. Computing',
  graduated: 'December 2015',
  concentration: 'Information Systems',
  emphasis: 'Accounting',
  honors: 'Sigma Alpha Pi — National Society of Leadership & Success',
}
