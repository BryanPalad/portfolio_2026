export type JourneyItem = {
  period: string;
  startDate: string;
  endDate?: string;
  title: string;
  company: string;
  detail: string;
  frontEnd?: string;
  backEnd?: string;
  tools?: string;
  descriptions?: string[];
};

export const experienceJourney: JourneyItem[] = [
  {
    period: "2024 - Present",
    startDate: "2024-11-11",
    title: "Full Stack Developer",
    company: "Allied Marketing Group",
    detail:
      "Modernized legacy systems, built client-facing products, and integrated production-ready APIs and email systems.",
    frontEnd: "Next JS, React JS, TypeScript, TailwindCSS, Shadcn",
    backEnd: "Node.js, Fastify, Express, Supabase, MongoDB",
    tools:
      "Git, Bitbucket, Monday.com, Stripo, Email on Acid, Trello, WordPress, Elementor, Metabase",
    descriptions: [
      "Refactored and upgraded legacy applications to improve maintainability and performance.",
      "Developed and integrated RESTful APIs using Node.js, Fastify, Express, and Supabase.",
      "Implemented client-facing solutions using Next.js, React.js, and TypeScript to deliver high-quality user interfaces.",
      "Built responsive, high-quality user interfaces with Tailwind CSS and Shadcn.",
      "Translated designer-provided email designs into responsive, production-ready HTML templates.",
      "Tested and validated email template compatibility across clients using Email on Acid.",
      "Collaborated with cross-functional teams using Git, Bitbucket, Monday.com, Trello, and Google Workspace.",
      "Used Metabase to generate and update monthly points statement reports for clients.",
      "Refactored the company website portfolio using WordPress and Elementor, and implemented SEO best practices using Yoast SEO with ongoing Google Search Console monitoring.",
    ],
  },
  {
    period: "2024 - 2025",
    startDate: "2024-08-12",
    endDate: "2025-04-30",
    title: "Software Engineer",
    company: "Arxon Solutions LLC",
    detail:
      "Delivered scalable Next.js applications, testing workflows, and backend integrations for distributed teams.",
    frontEnd: "Next JS, TypeScript, TailwindCSS, Material UI, Turbo Repo",
    tools: "Git, GitHub, Jest, Postman, ClickUp, Confluence, Padlet",
    descriptions: [
      "Developed large-scale web applications using Next.js, TypeScript, and Tailwind CSS.",
      "Applied Agile Scrum methodologies to deliver features in iterative sprints.",
      "Wrote and maintained unit tests using Jest to improve code reliability.",
      "Managed tasks and documentation using ClickUp, Confluence, and Padlet.",
      "Collaborated with distributed teams using GitHub and Postman for API testing.",
      "Led integration of Bunny streaming platform APIs by updating existing .NET Core backend services to support frontend functionality.",
    ],
  },
  {
    period: "2022 - 2024",
    startDate: "2022-12-12",
    endDate: "2024-08-19",
    title: "Software Developer / Front End Engineer",
    company: "eMandarin Ventures Inc.",
    detail:
      "Built e-wallet and payment platform features with Vue.js, Java Spring Boot, and REST API integrations.",
    frontEnd: "HTML, CSS, JavaScript ES6, VueJS, Vuex, UniApp, Tailwind CSS",
    backEnd: "Java Spring Boot, Spring MVC, MyBatis, Redis, MySQL, Thymeleaf",
    tools:
      "Git, GitLab, npm, HBuilder, VSCode, IntelliJ IDEA, DataGrip, Postman, Termius, Figma",
    descriptions: [
      "Led development of the e-Wallet (PayLoro), specializing in front-end development with VueJS, Vuex, Axios, UniApp, and RESTful API integration.",
      "Collaborated with graphic and web designers to conceptualize e-Wallet designs in Figma and translate wireframes into user-friendly interfaces.",
      "Maintained and improved the Payment Gateway system (SaaS) using Java Spring Boot, Spring MVC, MyBatis, Redis, Thymeleaf, and MySQL.",
      "Developed RESTful APIs with Java Spring Boot and MyBatis, then integrated and tested them with Axios and Postman.",
      "Integrated payment APIs including Coins.ph, Bayad Center, NetBank, and StarPay using JWT and OAuth 2.0 for secure transactions.",
      "Developed front-end pages such as QRPH, Checkout Counter, and PayBills with VueJS, Vuex, Axios, and TailwindCSS.",
    ],
  }
];
