const experienceINMilliseconds = Date.now() - new Date("2021-05-10").getTime();
export const experienceINYears = (
  experienceINMilliseconds /
  (1000 * 60 * 60 * 24 * 365)
).toFixed(1);

export const about = {
  name: "Aishwary Tiwari",
  position: "Fullstack Engineer",
  bio: `I’m the guy who’s been immersed in code for over ${experienceINYears} years, diving into the exciting world of MERN and MEAN stacks. From the fast-paced startup scene to the structured environment of MNCs, I’ve been there, leading teams and delivering robust tech solutions that keep clients satisfied. When I’m not coding, you’ll find me conquering new worlds in video games, cruising on my bike, or savoring the perfect cup of coffee. Just another day in the life, living it up one line of code at a time!`,
  socials: {
    linkedIn: "https://www.linkedin.com/in/aishwary95/",
    mail: "aishbetu@gmail.com",
    github: "https://github.com/aishbetu",
  },
  details: {
    firstname: "Aishwary",
    lastname: "Tiwari",
    email: "aishbetu@gmail.com",
    nationality: "Indian",
    degree: "Master's",
    address: "Noida, Uttar Pradesh",
    interests: "Astronomy, Blogs reading, Travelling",
    experience: `${experienceINYears} Years`,
  },
  skills: {
    frontend: [
      "HTML",
      "CSS",
      "Scss",
      "Bootstrap",
      "Tailwind",
      "Javascript",
      "ES6",
      "Typescript",
      "React Js",
      "Next Js",
      "Redux",
      "Angular",
      "Material UI",
      "Ant Design",
      "Framer Motion",
    ],
    backend: [
      "Node Js",
      "Express Js",
      "Strapi",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Microservices",
      "Redis Caching",
      "RabbitMQ",
      "Python",
      "Unit Testing",
    ],
    tools: ["GIT", "Postman", "Jira", "Adobe Photoshop", "Adobe XD", "Figma"],
    soft: [
      "Team Management",
      "Time management",
      "Client/Stakeholders Interactions",
      "Leadership",
      "Communication",
      "Critical/Analytical Thinking",
      "Conflict Resolution",
    ],
  },
};

export const education = [
  {
    title: "MSc - Information Technology",
    location: "Sharda University, Gr. Noida",
    date: "2018 - 2020",
    description: "",
  },
  {
    title: "BSc - Mathematics",
    location: "Jiwaji University, Gwalior",
    date: "2013 - 2016",
    description: "",
  },
];

export const work = [
  {
    title: "Software Engineer - Trigyn Technologies",
    location: "Mumbai, Maharashtra (Remote)",
    date: "Nov 2021 - Present",
    description: `
*    Develop and maintain full-stack solutions for government digital infrastructure projects under Digital India Corporation, delivering scalable applications serving 1.5M+ users across national-level platforms.
*    Architected system optimization initiatives including migration to service-oriented architecture, AI-powered facial recognition integration (AWS Rekognition) reducing distribution discrepancies by 99%, and automated payment systems (PFMS), achieving 40% improvement in response times and 65% reduction in manual processing.
*    Implemented enterprise integrations with Aadhaar-based SSO (Digilocker), unified authentication (Keycloak), message queuing (RabbitMQ), and caching layers (Redis) while establishing security measures including RBAC, encryption, and government compliance standards.
*    Collaborate with government stakeholders for requirement gathering and solution delivery, mentor associate developer, recognized with Employee of the Quarter award for technical contributions.

         `,
  },
  {
    title: "Software Trainee - DazeWorks Inc",
    location: "Kocchi, kerala (Remote)",
    date: "May 2021 - Nov 2021",
    description: `
*    Developed and automated a Timesheet Tracking module within the internal HRMS tool, enabling employees to log and managers to approve monthly timesheets, incorporated dynamic handling for holidays and weekends to ensure accurate time calculations.
*    Automated report generation, replacing manual Excel-based tracking and cutting process time by 40%, improving operational efficiency across HR and reporting teams.

         `,
  },
];

export const projects = [
  {
    projectName: "Visvesvaraya PhD Scheme for Electronics & IT",
    projectDesc:
      "Ministry of Electronics & Information Technology (MeitY), Government of India has conceived a scheme to enhance the number of PhDs in the Electronic Design and Manufacturing (ESDM) and IT/IT enabled Services (ITES) sector. Cabinet Committee on Economic Affairs (CCEA) has approved the scheme over a period of nine years.",
    projectThumbnail: "/projects-ss/pl4.png",
    duration: "2 Year",
    techstack: "Typescript, Angular, Angular material, Ionic, Strapi, GIT",
    workDone: "Fullstack",
    hostedUrl: "http://phd.digitalindiacorporation.in",
    association: "Digital India Corp. | Trigyn Technologies",
    images: [
      "/projects-ss/ps1.png",
      "/projects-ss/ps2.png",
      "/projects-ss/ps3.png",
      "/projects-ss/ps4.png",
      "/projects-ss/ps5.png",
      "/projects-ss/ps6.png",
      "/projects-ss/ps7.png",
      "/projects-ss/ps8.png",
    ],
  },
  {
    projectName: "Poshan tracker - Supportive Supervision",
    projectDesc: `The Ministry of Women and Child Development (MWCD), in collaboration with the Digital India Corporation (DIC), has partnered with Trigyn Technologies to develop the Supportive Supervision app under the Poshan Tracker initiative. This app enhances real-time monitoring and supervision of nutrition-related programs. By equipping supervisors with data-driven tools, it ensures compliance, provides timely feedback, and improves the effectiveness of interventions, focusing on maternal and child health.`,
    projectThumbnail: "/projects-ss/pl5.png",
    duration: "Ongoing",
    techstack:
      "Next.js, Typescript, React.js, Node.js, Express.js, Redis, RabbitMQ, MongoDB",
    workDone: "Fullstack",
    hostedUrl: "https://www.poshantracker.in/sslandingpage",
    association: "Digital India Corp. | Trigyn Technologies",
    images: [
      "/projects-ss/ss1.png",
      "/projects-ss/ss2.png",
      "/projects-ss/ss3.png",
      "/projects-ss/ss4.png",
      "/projects-ss/ss5.png",
      "/projects-ss/ss6.png",
      "/projects-ss/ss7.png",
      "/projects-ss/ss8.png",
    ],
  },
];
