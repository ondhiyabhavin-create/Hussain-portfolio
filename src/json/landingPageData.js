/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/bhavin.jpg";
import HRD from "../assets/images/TeamMembers/Prachi.jpeg";
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

// Personal Services
export const Services = [
  {
    title: "Oracle DBA & RAC",
    imageUrl: Web,
    animation: "left",
    description: "Oracle database administration, RAC implementation, and disaster recovery solutions",
  },
  {
    title: "GoldenGate Replication",
    imageUrl: Mobile,
    animation: "up",
    description: "Real-time data replication and synchronization using Oracle GoldenGate",
  },
  {
    title: "Cloud Migration & DevOps",
    imageUrl: UIUX,
    animation: "right",
    description: "OCI/Azure migration, WebLogic administration, and DevOps automation",
  },
];

// Personal Projects
export const Portfolios = [
  {
    id: "project1",
    title: "Oracle Data Guard DR Implementation",
    imageUrl: Recruiting,
    type: "Disaster Recovery / High Availability",
    responsibility: ["Oracle Data Guard", "FSFO", "Zero Data Loss"],
    credit: "",
    problem: "Implemented comprehensive disaster recovery solution for mission-critical systems",
    outcome: "Achieved zero data loss with Fast-Start Failover (FSFO) enabled for automatic failover",
  },
  {
    id: "project2",
    title: "Oracle 12c to 19c RAC Upgrade",
    imageUrl: Stream,
    type: "Database Upgrade / RAC",
    responsibility: ["Oracle RAC", "ASM", "Upgrade Strategy"],
    credit: "",
    problem: "Upgraded Oracle RAC cluster from 12c to 19c while maintaining high availability",
    outcome: "Completed upgrade with minimal downtime and zero data loss",
  },
  {
    id: "project3",
    title: "Performance Tuning & Optimization",
    imageUrl: Freelance,
    type: "Performance Optimization",
    responsibility: ["SQL Tuning", "Index Optimization", "Query Analysis"],
    credit: "",
    problem: "Optimized database performance for critical business queries",
    outcome: "Achieved 40% query performance improvement through comprehensive tuning",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Streamivus, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Streamivus.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Streamivus is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

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
