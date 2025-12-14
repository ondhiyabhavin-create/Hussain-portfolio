/* eslint-disable import/extensions */

// Personal Information
export const PersonalInfo = {
  name: 'Mohammed Ashfaq Hussain',
  firstName: 'Hussain',
  role: 'Senior Oracle & SQL Server Database Consultant',
  tagline: 'Designing, securing, and optimizing mission-critical database systems at scale',
  taglines: [
    'Designing, securing, and optimizing mission-critical database systems at scale',
    'Growing Your Business Is Our Calling',
    'Transforming database infrastructure for enterprise excellence',
    'Delivering zero-downtime solutions for mission-critical systems',
  ],
  bio: 'A dedicated database consultant passionate about designing, securing, and optimizing mission-critical database systems. I love working on projects that make a bigger impact in enterprise environments. You will also find me exploring new technologies and continuously learning to stay at the forefront of database technology.',
  personalDetails: {
    birthday: 'Not specified',
    age: 'Not specified',
    website: '',
    email: 'nswaknwj@gmail.com',
    degree: 'Not specified',
    phone: '+966556024406',
    city: 'Riyadh',
    freelance: 'Available',
    nationality: 'Saudi Arabia',
    languages: ['English', 'Arabic', 'Urdu'],
    interests: ['Database Architecture', 'Cloud Technologies', 'DevOps Automation', 'Performance Optimization'],
    availability: 'Available for consulting projects and long-term engagements',
  },
  skillsWithPercentages: [
    { name: 'Oracle Database', percentage: 95 },
    { name: 'SQL Server', percentage: 90 },
    { name: 'RAC & Data Guard', percentage: 85 },
    { name: 'GoldenGate', percentage: 80 },
    { name: 'WebLogic', percentage: 75 },
    { name: 'OCI', percentage: 70 },
  ],
  email: 'nswaknwj@gmail.com',
  phone: '+966556024406',
  linkedin: 'https://linkedin.com/in/mohammed-ashfaq-hussain-b0391534',
  location: 'Riyadh, Saudi Arabia',
  yearsOfExperience: '14+',
};

// Skills
export const Skills = {
  oracle: ['Oracle Database (9i–21c)', 'RAC', 'ASM', 'Data Guard', 'GoldenGate'],
  sqlServer: ['SQL Server (2012–2022)', 'Azure SQL', 'High Availability'],
  middleware: ['WebLogic', 'Oracle Apps DBA'],
  cloud: ['OCI', 'Azure SQL', 'Cloud Migration'],
  devops: ['Jenkins', 'GitLab CI', 'Ansible', 'Terraform'],
  security: ['TDE', 'Vault', 'GDPR', 'ISO', 'SOX', 'HIPAA'],
};

// Experience
export const Experience = [
  {
    id: 1,
    company: 'Saudi Civil Defence & Aviation',
    role: 'Senior Oracle Database Consultant',
    period: '2011 - Present',
    responsibilities: [
      'Managing VLDB systems up to 250TB with high availability and security compliance',
      'Designing and implementing Oracle RAC, Data Guard, and GoldenGate solutions',
      'Leading database migrations, upgrades, and performance optimization projects',
      'Ensuring compliance with GDPR, ISO, SOX, and HIPAA security standards',
      'Automating database operations using DevOps tools (Jenkins, GitLab CI, Ansible, Terraform)',
    ],
    achievements: [
      'Successfully implemented zero data loss Data Guard DR with FSFO',
      'Completed Oracle 12c to 19c RAC upgrade with minimal downtime',
      'Achieved 40% query performance improvement through optimization',
    ],
  },
  {
    id: 2,
    company: 'Ministry of Tourism',
    role: 'Oracle DBA',
    period: '2010 - 2011',
    responsibilities: [
      'Maintained and optimized Oracle database systems',
      'Implemented backup and recovery strategies',
      'Monitored database performance and resolved issues',
    ],
  },
  {
    id: 3,
    company: 'Ministry of Communication',
    role: 'Oracle DBA',
    period: '2009 - 2010',
    responsibilities: [
      'Managed Oracle database infrastructure',
      'Performed database administration tasks',
      'Supported application teams with database requirements',
    ],
  },
];
