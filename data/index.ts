export const navItems = [
  { name: "Work", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Software Developer with 3 years of experience building scalable, responsive, and visually engaging web applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center text-center lg:text-left",
    img: "/HeroBanner.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seeking collaboration opportunities with global clients.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring backend technologies.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tesla UI",
    des: "Mini project that helps me utilize my skills in responsive web development (Media queries, flex box and SCSS).",
    img: "/projectsImg/teslaclone.PNG",
    iconLists: ["/skills/frontend/reactjs.png", "/skills/frontend/sass.svg"],
    link: "https://teslaui-eight.vercel.app/",
    github: "",
    googleplayLink: "",
    appstoreLink: "",
  },
  {
    id: 2,
    title: "Sneaks Ecommerce",
    des: "An Ecommerce project selling different brands  of shoes with cart functionality and responsive web design.",
    img: "/projectsImg/Sneaks.PNG",
    iconLists: [
      "/skills/frontend/reactjs.png",
      "/skills/frontend/redux.png",
      "/skills/frontend/tailwind.png",
      // "/skills/backend/nodejs.png",
    ],
    link: "https://sneaks-commerce.vercel.app/",
    github: "",
    googleplayLink: "",
    appstoreLink: "",
  },
  // {
  //   id: 3,
  //   title: "Weather/News App",
  //   des: "An app that gets the actual weather status and news, built in react js, redux toolkit and used 3 API's (Open Weather API's and Bing News Api).",
  //   img: "/projectsImg/weatherapp.PNG",
  //   iconLists: [
  //     "/skills/frontend/reactjs.png",
  //     "/skills/frontend/redux.png",
  //     "/skills/frontend/mui.png",
  //   ],
  //   link: "https://miniweather-news-app.netlify.app/",
  //   github: "",
  //   googleplayLink: "",
  //   appstoreLink: "",
  // },
  // {
  //   id: 4,
  //   title: "Cryptoverse",
  //   des: "App that shows all existing crypto coins and their details (price, description, ranking), and news (CoinRanking, Bing News API).",
  //   img: "/projectsImg/Cryptoverse.PNG",
  //   iconLists: [
  //     "/skills/frontend/reactjs.png",
  //     "/skills/frontend/redux.png",
  //     "/skills/frontend/antdesign.png",
  //   ],
  //   link: "https://cryptoversemini.netlify.app/",
  //   github: "",
  //   googleplayLink: "",
  //   appstoreLink: "",
  // },
  // {
  //   id: 5,
  //   title: "Expense Tracker",
  //   des: "A simple CRUD expenses tracker using react js and redux toolkit with localstorage to store expenses history on browser.",
  //   img: "/projectsImg/expensetracker.PNG",
  //   iconLists: [
  //     "/skills/frontend/reactjs.png",
  //     "/skills/frontend/redux.png",
  //     "/skills/frontend/mui.png",
  //   ],
  //   link: "https://expensestracker-five.vercel.app/",
  //   github: "",
  //   googleplayLink: "",
  //   appstoreLink: "",
  // },
  {
    id: 6,
    title: "Online Appointment System for Fernandez Dental Clinic",
    des: "A project that helps dental clinic on their appointment schedules.",
    img: "/projectsImg/FernandezDentalClinic.PNG",
    iconLists: [
      "/skills/backend/php.png",
      "/skills/frontend/css3.png",
      "/skills/frontend/bootstrap.png",
      "/skills/database/mysql.png",
    ],
    link: "",
    github: "https://github.com/BryanPalad/FernandezDentalClinic",
    googleplayLink: "",
    appstoreLink: "",
  },
  // {
  //   id: 7,
  //   title: "PayLoro e-Wallet",
  //   des: "App that provides a more convenient transaction processing method for customers, giving businesses that employ this technology a competitive edge in the market.",
  //   img: "/projectsImg/file.jpg",
  //   iconLists: [],
  //   link: "https://www.payloro.ph/#/",
  //   github: "",
  //   googleplayLink:
  //     "https://play.google.com/store/apps/details?id=paylor.com&hl=en",
  //   appstoreLink: "https://apps.apple.com/ph/app/payloro-app/id1524219078",
  // },
  {
    id: 4,
    title: "Oudbotanicals",
    des: "Shopify-based multinational e-commerce site featuring location-based currency and language conversion, integrated payments, and dropshipping support.",
    img: "/projectsImg/oudbotanicals.png",
    iconLists: [
      "/skills/tools/shopify.webp",
    ],
    link: "https://oudbotanicals.org/en-ph",
    github: "",
    googleplayLink: "",
    appstoreLink: "",
  },
];

export const testimonials = [
  {
    src: "/testimonialsImg/mariferalcon.jpg",
    quote:
      "Bryan was a great colleague and easy to communicate with about the work or tasks given. He was easy to talk to when I faced a challenge I didn't understand. I liked working with Bryan, he had a great attitude at the office and was very passionate being a web developer. He was a perfectionist about small details and would correct you in a good way.",
    name: "Marifer Alcon",
    designation: "Software Developer of eMandarin Ventures Inc.",
  },
  {
    src: "/testimonialsImg/aceleano.jpg",
    quote:
      "Bryan is an outstanding software developer, always dependable and dedicated to delivering exceptional results. His expertise and unwavering commitment make him a valuable asset to any team.",
    name: "Ace Leaño",
    designation: "Graphic Artist UI/Web Designer of eMandarin Ventures Inc.",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "eMandarin Ventures",
  //   img: "/companiesImg/eMandarinVentures.png",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const frontEndStack = [
  {
    title: "HTML5",
    img: "/skills/frontend/html5.png",
  },
  {
    title: "CSS3",
    img: "/skills/frontend/css3.png",
  },
  {
    title: "SASS",
    img: "/skills/frontend/sass.svg",
  },
  {
    title: "Tailwind CSS",
    img: "/skills/frontend/tailwind.png",
  },
  {
    title: "Material UI",
    img: "/skills/frontend/mui.png",
  },
  {
    title: "Javascript",
    img: "/skills/frontend/js.png",
  },
  {
    title: "React Js",
    img: "/skills/frontend/reactjs.png",
  },
  {
    title: "React Redux",
    img: "/skills/frontend/redux.png",
  },
  {
    title: "Vue Js",
    img: "/skills/frontend/vuejs.png",
  },
  {
    title: "Next Js",
    img: "/skills/backend/nextjs.png",
  },
  {
    title: "Typescript",
    img: "/skills/frontend/typescript.png",
  },
];

export const backEndStack = [
  {
    title: "PHP",
    img: "/skills/backend/php.png",
  },
  {
    title: "Java",
    img: "/skills/backend/java.png",
  },
  {
    title: "Java Spring Boot",
    img: "/skills/backend/spring.png",
  },
  {
    title: "C#",
    img: "/skills/backend/c-sharp.png",
  },
];

export const databaseUsed = [
  {
    title: "MySQL",
    img: "/skills/database/mysql.png",
  },
  {
    title: "PostgreSQL",
    img: "/skills/database/postgre.png",
  },
  {
    title: "MongoDB",
    img: "/skills/database/mongodb.svg",
  },
  {
    title: "Supabase",
    img: "/skills/database/supabase.png",
  },
  {
    title: "Git",
    img: "/skills/database/git.png",
  },
  {
    title: "Github",
    img: "/skills/database/github.png",
  },
  {
    title: "Gitlab",
    img: "/skills/database/gitlab.webp",
  },
  {
    title: "Netlify",
    img: "/skills/database/netlify.png",
  },
  {
    title: "Vercel",
    img: "/skills/database/vercel.png",
  },
  {
    title: "Namecheap",
    img: "/skills/database/namecheap.webp",
  },
];

export const toolsUsed = [
  {
    title: "VSCode",
    img: "/skills/tools/vscode.png",
  },
  {
    title: "Intellij",
    img: "/skills/tools/intellij.png",
  },
  {
    title: "DataGrip",
    img: "/skills/tools/datagrip.png",
  },
  {
    title: "Postman",
    img: "/skills/tools/postman.png",
  },
  {
    title: "NPM",
    img: "/skills/tools/npm.png",
  },
  {
    title: "ChatGPT",
    img: "/skills/tools/chatgpt.png",
  },
  {
    title: "Figma",
    img: "/skills/tools/figma.png",
  },
  {
    title: "Jest",
    img: "/skills/tools/jest.png",
  },
  {
    title: "Shopify",
    img: "/skills/tools/shopify.webp",
  },
  {
    title: "Wordpress",
    img: "/skills/tools/wordpress.png",
  },
  {
    title: "Elementor",
    img: "/skills/tools/elementor.webp",
  },
];

export const techStacks = [
  {
    id: 1,
    title: "Frontend",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    stacks: [
      {
        title: "HTML5",
        img: "/skills/frontend/html5.png",
      },
      {
        title: "CSS3",
        img: "/skills/frontend/css3.png",
      },
      {
        title: "SASS",
        img: "/skills/frontend/sass.svg",
      },
      {
        title: "Javascript",
        img: "/skills/frontend/js.png",
      },
      {
        title: "React Js",
        img: "/skills/frontend/reactjs.png",
      },
      {
        title: "React Redux",
        img: "/skills/frontend/redux.png",
      },
      {
        title: "Vue Js",
        img: "/skills/frontend/vuejs.png",
      },
      {
        title: "Typescript",
        img: "/skills/frontend/typescript.png",
      },
      {
        title: "Bootstrap",
        img: "/skills/frontend/bootstrap.png",
      },
      {
        title: "Material UI",
        img: "/skills/frontend/mui.png",
      },
      {
        title: "tailwind",
        img: "/skills/frontend/tailwind.png",
      },
      {
        title: "Aceternity",
        img: "/skills/frontend/aceternity.png",
      },
    ],
  },
  {
    id: 2,
    title: "Backend",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    stacks: [
      {
        title: "Next Js",
        img: "/skills/backend/nextjs.png",
      },
      {
        title: "PHP",
        img: "/skills/backend/php.png",
      },
      // {
      //   title: "Laravel",
      //   img: "/skills/backend/laravel.png",
      // },
      {
        title: "Java",
        img: "/skills/backend/java.png",
      },
      {
        title: "Java Spring Boot",
        img: "/skills/backend/spring.png",
      },
      {
        title: "C#",
        img: "/skills/backend/c-sharp.png",
      },
    ],
  },
  {
    id: 3,
    title: "Deployment & Database",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    stacks: [
      {
        title: "MySQL",
        img: "/skills/database/mysql.png",
      },
      {
        title: "PostgreSQL",
        img: "/skills/database/postgre.png",
      },
      {
        title: "Netlify",
        img: "/skills/database/netlify.png",
      },
      {
        title: "Vercel",
        img: "/skills/database/vercel.png",
      },
      {
        title: "Git",
        img: "/skills/database/git.png",
      },
      {
        title: "Github",
        img: "/skills/database/github.png",
      },
      {
        title: "Gitlab",
        img: "/skills/database/gitlab.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    stacks: [
      {
        title: "VSCode",
        img: "/skills/tools/vscode.png",
      },
      {
        title: "Intellij",
        img: "/skills/tools/intellij.png",
      },
      {
        title: "DataGrip",
        img: "/skills/tools/datagrip.png",
      },
      {
        title: "Postman",
        img: "/skills/tools/postman.png",
      },
      {
        title: "NPM",
        img: "/skills/tools/npm.png",
      },
      {
        title: "ChatGPT",
        img: "/skills/tools/chatgpt.png",
      },
      {
        title: "Figma",
        img: "/skills/tools/figma.png",
      },
      {
        title: "Jest",
        img: "/skills/tools/jest.png",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BryanPalad",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bryan-justin-palad-4632b3234/",
  }
];
