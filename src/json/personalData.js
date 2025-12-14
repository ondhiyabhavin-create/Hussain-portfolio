/* eslint-disable import/extensions */

// Personal Information
export const PersonalInfo = {
  name: 'Mohammed Ashfaq Hussain',
  firstName: 'Mohammed',
  role: 'Senior Oracle & SQL Server Database Consultant',
  tagline: 'Designing, securing, and optimizing mission-critical database systems at scale',
  bio: 'Senior Oracle and SQL Server Database Consultant with 14+ years of experience in government and enterprise environments. Expert in Oracle RAC, Data Guard, GoldenGate, WebLogic, OCI, and DevOps automation, managing VLDB systems up to 250TB with high availability and security compliance.',
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
