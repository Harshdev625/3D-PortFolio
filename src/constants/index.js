import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  ByteBridge,
  C,
  Cplusplus,
  github,
  express,
  postman,
  StarkMart,
  StarkTalk,
  NewsSphere,
  Google,
  HackerRank,
  CodeForces,
  CodeChef,
  Leetcode,
  ClipLink,
  StarkTasks,
  SmartOutputAnalyzer,
  SDEverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Algorithm Enthusiast",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "DSA Enthusiast",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cplusplus,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "FullStack Developer Intern",
    company_name: "ByteBridge Solution LLP",
    icon: ByteBridge,
    iconBg: "#383E56",
    date: "September 2023 - Febray 2024",
    points: [
      "Developed a comprehensive College Management System featuring advanced chat functionalities, user profile management, and a digital library, improving student-teacher engagement by 40% and increasing user satisfaction by 30%.",
      "Deployed Google Sheets API for instant attendance tracking and grade synchronization, resulting in a 50% reduction in administrative errors and improving data accessibility for over 250 users.",
      "Designed parent portals for monitoring student progress and implemented a robust email notification system, enhancing parental involvement by 50% and streamlining institutional communication by reducing response times by 35%.",
    ],
  },
];

const achievements = [
  {
    name: "Google KickStart",
    image: Google,
    platformLink: "",
    description: ["Global Rank: 1773 in Round H 2022"],
  },
  {
    name: "Codeforces",
    image: CodeForces,
    platformLink: "https://codeforces.com/profile/harshdev625",
    description: [
      "Highest Rating: 1428 (Specialist)",
      "Total Problems Solved: 400+",
    ],
  },
  {
    name: "CodeChef",
    image: CodeChef,
    platformLink: "https://www.codechef.com/users/mr_stark_3000",
    description: [
      "Highest Rating: 1804 (4 Star)",
      "Total Problems Solved: 100+",
    ],
  },
  {
    name: "LeetCode",
    image: Leetcode,
    platformLink: "https://leetcode.com/Harshdev625/",
    description: [
      "Ranked in the top 5% globally",
      "Highest Rating: 1913 (Knight badge)",
      "Total Problems Solved: 1000+",
    ],
  },
  {
    name: "HackerRank",
    image: HackerRank,
    platformLink: "https://www.hackerrank.com/Harshdev625",
    description: [
      "Achieved 6-star Problem Solver status",
      "Total Problems Solved: 120+",
    ],
  },
];

const projects = [
  {
    name: "SDEverse",
    description:
      "A full-stack platform for consolidating DSA and algorithm content, with JWT authentication, contributor/admin roles, markdown and LaTeX proposal support, and social integrations with platforms like LeetCode, Codeforces, GitHub, and LinkedIn.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: SDEverse,
    source_code_link: "https://github.com/Harshdev625/SDEverse",
    live_demo_link: "https://sde-verse.vercel.app/",
  },
  {
    name: "StarkTalk",
    description:
      "A real-time communication platform supporting multimedia sharing (images, audio, video, files), designed for seamless media integration and built with ReactJS, Redux, Material UI, NodeJS, ExpressJS, and MongoDB.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: StarkTalk,
    source_code_link: "https://github.com/Harshdev625/StarkTalk",
    live_demo_link: "https://stark-talk.vercel.app/",
  },
  {
    name: "StarkMart",
    description:
      "An e-commerce platform with secure payment processing via Stripe, built using ReactJS, NodeJS, MongoDB, and ExpressJS.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: StarkMart,
    source_code_link: "https://github.com/Harshdev625/StarkMart",
    live_demo_link: "https://starkmart.vercel.app/",
  },
  {
    name: "Smart Output Analyzer",
    description:
      "A full-stack MERN application designed to process and analyze raw command-line outputs like ping, netstat, and ifconfig. It visualizes data, extracts meaningful insights, and supports exporting results for DevOps and network analysis.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: SmartOutputAnalyzer,
    source_code_link: "https://github.com/Harshdev625/Smart-Output-Analyzer",
    live_demo_link: "https://smart-output-analyzer.vercel.app/",
  },
  {
    name: "ClipLink",
    description:
      "A Micro-SaaS URL shortener and analytics platform with real-time click tracking and dashboards. Built using React, Redux Toolkit, TailwindCSS for frontend and Node.js, Express, MongoDB for backend.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: ClipLink,
    source_code_link: "https://github.com/Harshdev625/ClipLink-Frontend",
    live_demo_link: "https://clip-link-frontend.vercel.app/",
  },
  {
    name: "StarkTasks",
    description:
      "A task management web application with user authentication, role-based access, and a modern UI. Developed using React, Redux Toolkit, Node.js, Express, and MongoDB.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: StarkTasks,
    source_code_link: "https://github.com/Harshdev625/StarkTasks",
    live_demo_link: "https://starktasks.vercel.app/",
  },
  {
    name: "NewsSphere",
    description:
      "A web app that aggregates global news using NewsAPI, offering real-time access to current events, with advanced filtering and infinite scrolling for a seamless user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: NewsSphere,
    source_code_link: "https://github.com/Harshdev625/NewsSphere",
  },
];

export { services, technologies, experiences, achievements, projects };
