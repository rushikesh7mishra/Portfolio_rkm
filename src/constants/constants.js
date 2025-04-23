import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  drawSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
  python,
  expo,
  bcs,
  tsf,
  ip,
  glu,
  snm,
  ai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Web, App & AI Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "Python",
    icon: python,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
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
    name: "JWT",
    icon: jwt,
  },

   {
     name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "DrawSync",
    description:
      "A real-time collaborative whiteboard web application built with NextJs, Express, and Socket.io.",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: drawSync,
    source_code_link: "https://github.com/rushikesh7mishra/DrawSync.git",
    live_link: "https://draw-sync-a9pu-rushikesh-mishras-projects.vercel.app/",
  },
  {
    name: "AI Voice Assistant",
    description:
      "An intelligent, modern, and fully responsive voice assistant built using the MERN stack.",
    features: [
      "Voice input via Web Speech API (SpeechRecognition) to capture user queries.",
    "Speech synthesis to speak AI-generated responses aloud using Web Speech API.",
    "Timeout handling – shows 'No input received' if no voice is detected within 10 seconds.",
    ],
    tags: [
      {
        name: "react+vite",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
    
    ],
    image: ai,
    source_code_link: "https://github.com/rushikesh7mishra/Ai-Voice-Assistant.git",
    live_link: "https://ai-voice-assistant-rushikesh-mishras-projects.vercel.app/",
  },
  //{
    //name: "Study Notion",
    //description: "Developed an educational technology website with CMS.",
    //features: [
      //"Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      //"Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      //"Integrated MongoDB database to store user information, course data, and progress tracking.",
      //"Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      //"Razorpay payment integration.",
      //"PWA (Progressive Web App) support.",
    //],
    //tags: [
      //{
        //name: "react",
        //color: "blue-text-gradient",
      //},
      //{
       // name: "restapi",
       // color: "green-text-gradient",
      //},
      //{
        //name: "ExpressJs",
        //color: "pink-text-gradient",
      //},
      //{
        //name: "mongodb",
        //color: "orange-text-gradient",
      //},
      //{
        //name: "tailwind",
        //color: "blue-text-gradient",
      //},
      //{
       // name: "nodejs",
        //color: "green-text-gradient",
      //},
    //],
    //image: jobit,
    //source_code_link: "https://github.com/himanshu8443/Study-Notion-master",
    //live_link: "https://studynotion-master.vercel.app/",
  //},
  {
    name: "Simple Note App",
    description:
      "Simple Notes is a minimalist and user-friendly note-taking application designed to help users quickly jot down and manage their thoughts, ideas, and reminders.",
    features: [
      "Easily add new notes with a simple click,Option to cancel if changes are not needed.",
      "View all notes in a clear, organized list,Each note is displayed with its title and content for quick reference.",
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: snm,
    source_code_link: "https://github.com/rushikesh7mishra/simple_note_app.git",
    live_link:
      "https://simple-note-app-kkzr-rushikesh-mishras-projects.vercel.app/",
  },
  //{
   // name: "Social Sphere",
   // description:
    //  "A full-stack social media application with user authentication, infinite scroll, and image and video uploads.",
   // features: [
    //  "User authentication using JWT and OAuth providers.",
   //   "Infinite scroll for posts.",
   //   "Image and video uploads.",
   //   "Like, comment, and share posts.",
   //   "Follow and unfollow users.",
   //   "Dark mode support.",
    //],
    //tags: [
    //  {
     //   name: "react",
      ////  color: "blue-text-gradient",
      //},
     // {
      //  name: "nodejs",
       // color: "green-text-gradient",
      //},
      //{
        //name: "Supabase",
        //color: "pink-text-gradient",
      //}0/,
      //{
        //name: "tailwind",
      //  color: "orange-text-gradient",
      //},
      //{
        //name: "redux",
        //color: "blue-text-gradient",
      //},
    //],
    //image: socialSphere,
   // source_code_link: "https://github.com/himanshu8443/SocialSphere",
   // live_link: "https://socialspherex.vercel.app/",
  //},
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Baranwal Consultancy and Services",
    icon: bcs,
    iconBg: "#383E56",
    date: "Jul 2024 -Present",
    points: [
      "Developed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with UI/UX designers, product managers, and QA teams to deliver high-performance, user-focused applications, reducing feature delivery time by 30%",
      "Designed and implemented RESTful APIs, enhancing communication between backend and frontend systems, resulting in a 40% improvement in data processing speed. ",
      "Utilized Git and GitHub for version control, streamlining collaboration among a team of 5+ developers and reducing code conflicts by 20%. ",
    ],
  },
  {
    title: "Web and Mobile App Developer intern",
    company_name: "The Sparks Foundation",
    icon: tsf,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Spearheaded the development of web applications using Python and Django, boosting responsiveness and improving site speed by 30%.",
      "Crafted and deployed mobile applications using React Native and Expo, deploying to both iOS and Android platforms, reaching over 5,000 users. Collaborated with UI/UX and backend teams, reducing development time by 20%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Optimized database performance by managing migrations and fine-tuning queries, enhancing data retrieval by 40%.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "InternPe",
    icon: ip,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Built backend APIs with Python and Django REST Framework for seamless frontend integration.",
      "Managed database operations using MySQL for efficient data storage and retrieval.",
      "Designed responsive and user-friendly interfaces with CSS, ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Glucian",
    icon: glu,
    iconBg: "#E6DEDD",
    date: "May 2022 - Sep 2022",
    points: [
      "Developed dynamic and responsive web interfaces using HTML5, CSS, and JavaScript.",
      "Enhanced user experience by implementing interactive features and animations with vanilla JavaScript.",
      "Ensured cross-browser compatibility and mobile-first design principles.",
      "Collaborated with designers to translate UI/UX wireframes into functional web pages.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  experiences,
  //  testimonials,
  projects,
};
