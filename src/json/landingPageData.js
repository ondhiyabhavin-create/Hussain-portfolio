/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// TeamMembers Imports
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.jpg";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.jpg";
import Backend1 from "../assets/images/TeamMembers/Backend1.jpg";
import Backend2 from "../assets/images/TeamMembers/Backend2.jpg";
import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.jpg";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.jpg";
import UIUX2 from "../assets/images/TeamMembers/UIUX2.jpg";

// Portfolio Img Imports
import OracleDataGuard from "../assets/images/Portfolio/oracle-data-guard-2.webp";
import OracleRAC from "../assets/images/Portfolio/final-45.jpeg";
import SQLQuery from "../assets/images/Portfolio/sql-query.png";

// Advantages and Testimonials removed - not used in personal portfolio

// Personal Services
export const Services = [
  {
    id: "service1",
    title: "Databases",
    imageUrl: Web,
    animation: "left",
    description: "Comprehensive database administration,Implementation and management across Oracle, SQL Server, MongoDB, PostgreSQL, EBS Suite, and Exadata platforms",
    detailedDescription: "Expert database administration services covering a wide range of enterprise database platforms. I provide end-to-end solutions for Oracle Database (including RAC, ASM, Data Guard), SQL Server, MongoDB, PostgreSQL, Oracle E-Business Suite, and Oracle Exadata. My services include database installation, configuration, performance tuning, high availability setup, disaster recovery planning, and 24/7 support. With extensive experience in mission-critical environments, I ensure optimal performance, security compliance, and zero-downtime operations across all database platforms.",
    features: [
      "Oracle Database (RAC, ASM, Data Guard, RMAN)",
      "SQL Server Administration & High Availability",
      "MongoDB Setup & Optimization",
      "PostgreSQL Configuration & Tuning",
      "Oracle E-Business Suite Management",
      "Oracle Exadata Administration",
      "Performance Tuning & Optimization",
      "Backup & Recovery Strategies",
      "Disaster Recovery Planning",
      "Database Migration & Upgrades",
    ],
    technologies: ["Oracle Databases", "SQL Server", "MongoDB", "PostgreSQL", "Oracle EBS Suite", "Oracle Exadata", "RAC", "ASM", "Data Guard", "RMAN"],
  },
  {
    id: "service2",
    title: "GoldenGate Replication",
    imageUrl: Mobile,
    animation: "up",
    description: "Real-time data replication and synchronization using Oracle GoldenGate",
    detailedDescription: "Expert Oracle GoldenGate implementation for real-time data replication and synchronization across heterogeneous database environments. I design and implement high-performance replication solutions that ensure data consistency, minimize latency, and support zero-downtime migrations. My services include GoldenGate architecture design, performance optimization, and troubleshooting complex replication scenarios.",
    features: [
      "Real-time Data Replication",
      "Heterogeneous Database Support",
      "Zero-Downtime Migrations",
      "Conflict Detection & Resolution",
      "Performance Optimization",
      "Monitoring & Troubleshooting",
    ],
    technologies: ["Oracle GoldenGate", "Oracle Database", "SQL Server", "MySQL"],
  },
  {
    id: "service3",
    title: "Cloud Migration & DevOps",
    imageUrl: UIUX,
    animation: "right",
    description: "OCI/Azure migration, WebLogic administration, and DevOps automation",
    detailedDescription: "End-to-end cloud migration services and DevOps automation for database infrastructure. I help organizations migrate their database workloads to Oracle Cloud Infrastructure (OCI) and Azure, ensuring minimal downtime and optimal performance. Additionally, I implement DevOps practices using Jenkins, GitLab CI, Ansible, Kubernetes and Docker to automate database operations and improve deployment efficiency.",
    features: [
      "OCI & Azure Cloud Migration",
      "WebLogic Administration",
      "Infrastructure as Code (Docker and Kubernetes)",
      "CI/CD Pipeline Setup",
      "Automated Deployment",
      "Cloud Cost Optimization",
    ],
    technologies: ["OCI", "Azure SQL", "WebLogic", "Jenkins", "GitLab CI", "Ansible", "Docker", "Kubernetes"],
  },
];

// Personal Projects
export const Portfolios = [
  {
    id: "project1",
    title: "Oracle Data Guard DR Implementation",
    imageUrl: OracleDataGuard,
    type: "Disaster Recovery / High Availability",
    responsibility: ["Oracle Data Guard", "FSFO", "Zero Data Loss"],
    credit: "",
    problem: "Implemented comprehensive disaster recovery solution for mission-critical systems",
    outcome: "Achieved zero data loss with Fast-Start Failover (FSFO) enabled for automatic failover",
  },
  {
    id: "project2",
    title: "Implementation Oracle RAC ASM",
    imageUrl: OracleRAC,
    type: "Database Upgrade / RAC",
    responsibility: ["Oracle RAC", "ASM", "Upgrade Strategy"],
    credit: "",
    problem: "Upgraded Oracle RAC cluster from 12c to 19c while maintaining high availability",
    outcome: "Completed upgrade with minimal downtime and zero data loss",
  },
  {
    id: "project3",
    title: "Performance Tuning & Optimization",
    imageUrl: SQLQuery,
    type: "Performance Optimization",
    responsibility: ["SQL Tuning", "Index Optimization", "Query Analysis"],
    credit: "",
    problem: "Optimized database performance for critical business queries",
    outcome: "Achieved 40% query performance improvement through comprehensive tuning",
  },
];

// Advantages and Testimonials exports removed - not used in personal portfolio

export const TeamMembers = [
  {
    name: "Bhavin Ondhiya",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "Prachi Kathiria",
    position: "CEO",
    imageUrl: HRD,
  },
  {
    name: "Granger Watterson",
    position: "Finance",
    imageUrl: Finance,
  },
  {
    name: "Tom Jimmy",
    position: "Project Manager",
    imageUrl: ProjectManager,
  },
  {
    name: "Jim Hendrix",
    position: "Front-end Developer",
    imageUrl: Frontend1,
  },
  {
    name: "Calvin Max",
    position: "Front-end Developer",
    imageUrl: Frontend2,
  },
  {
    name: "Hawkins Jim",
    position: "Back-end Developer",
    imageUrl: Backend1,
  },
  {
    name: "Don Bizaro",
    position: "Back-end Developer",
    imageUrl: Backend2,
  },
  {
    name: "Bill Markinson",
    position: "Mobile Developer",
    imageUrl: Mobile1,
  },
  {
    name: "Igor Kavarov",
    position: "Mobile Developer",
    imageUrl: Mobile2,
  },
  {
    name: "Freddie Curl",
    position: "UI/UX Designer",
    imageUrl: UIUX2,
  },
  {
    name: "Monica Lovegood",
    position: "UI/UX Designer",
    imageUrl: UIUX1,
  },
];
