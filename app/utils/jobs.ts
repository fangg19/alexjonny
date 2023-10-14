export interface JobType {
  id: number;
  jobTitle: string;
  content: {
    title: string;
    description: string[];
    url?: string;
  }[];
  company: string;
  companyDescription: string[];
  period: string;
  startDate: Date;
  endDate: Date;
  stillWorking: boolean;
  techStack: string[];
}

export const jobs: JobType[] = [
  {
    id: 1,
    jobTitle: "",
    content: [
      {
        title: "Sessions - Video Conferencing Platform",
        description: [
          "Created the Register and Login pages from scratch",
          "Integrated AI features for various sections and tools of the app like: AI generated Session Agenda, Polls or Summary Generator based on the session’s transcript.",
        ],
        url: "https://sessions.us/",
      },

      {
        title: "Sessions - Webinars & Workshops module",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },
    ],
    company: "Sessions",
    companyDescription: [
      "Currently I work at Sessions.",
      "A fast growing startup with over 22.000 active users and growing daily, Sessions strives to be a better choice for videoconferencing by having the required set of tools in one place.",
      "I have a role in developing the web app, maintaining the codebase and implementing new features.",
    ],
    period: "sept 2022 - present",
    startDate: new Date("2022-09-10"),
    endDate: new Date(),
    stillWorking: true,
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Prisma",
      "SCSS",
    ],
  },
  {
    id: 2,
    jobTitle: "",
    content: [
      {
        title: "UncleBob e-market",
        description: [
          "Crafted the elements and user interface for the checkout segment, enhancing and revamping the established process for registered users while introducing a new ordering flow for guest users.",
          "Substituted Redux with Redux Toolkit within the project.",
          "Introduced a system for applying discount vouchers to orders.",
          "Created components and logic to facilitate scheduled deliveries either at the door or within vending machine lockers.",
          "Added and enhanced Google Enhanced E-commerce functionalities.",
          "Focused on enhancing page performance and speed, resulting in a Google Lighthouse score increase of more than 30 points.",
        ],
        url: "https://www.unclebob.ro/",
      },

      {
        title: "UncleBob Warehouse - Internal Management Dashboard",
        description: [
          "Continuously managing the legacy Warehouse project.",
          "Created a brand-new Warehouse project from the ground up.",
          "Designed and implemented an advanced filtering system to refine backend data retrieval processes.",
        ],
      },

      {
        title: "UncleBob IoT vending machines",
        description: [
          "Developed various states for the UI based on the user’s actions and the machine’s responses.",
          "Enhanced the user interface for an upgraded visual experience.",
          "Implemented alterations and additions to user interface elements to enhance overall user experience.",
        ],
      },

      {
        title: "Others",
        description: [
          "Developed a landing page entirely from the ground up for an international conference using Next.js.",
        ],
        url: "https://bobnet.tech/",
      },
    ],
    company: "UncleBob",
    companyDescription: [
      "For almost a year I worked at UncleBob. The place where it all started.",
      "Unclebob is a romanian start-up which aims to be more than an online market, offering the everyday essentials and can conveniently be a one-stop destination for the general shopping needs.",
      "Additionally, unclebob.ro, besides other cool things they do, innovatively integrates self-service vending machines with a bunch of light and weight sensors to provide a faster and easier shopping experience.",
    ],
    period: "sept 2021 - aug 2022",
    startDate: new Date("2021-10-16"),
    endDate: new Date("2022-09-10"),
    stillWorking: false,
    techStack: [
      "React",
      "Next.js",
      "REST API",
      "Redux",
      "Redux Toolkit",
      "SCSS",
    ],
  },
  {
    id: 3,
    jobTitle: "",
    content: [
      {
        title: "Executori Judecatoresti Bogaciu & Sorescu",

        description: ["Work still in progress"],

        url: "https://www.executoribucuresti.ro/",
      },

      {
        title: "Executor Judecatoresc Ochian Doru Catalin",
        description: [
          "Developed the website entirely from the ground up using Next.js and Tailwind.",
          "Implemented a custom-made, fully functional and responsive design.",
          'Added headless CMS functionalities for the "Auctions" and "Documents" section.',
        ],
        url: "https://www.executarebucuresti.ro/",
      },
    ],
    company: "home",
    companyDescription: [
      "other things I've done in the past / I'm doing now at home :)",
    ],
    period: "sept 2021 - aug 2022",
    startDate: new Date("2020-07-13"),
    endDate: new Date(),
    stillWorking: true,
    techStack: [
      "Next.js",
      "REST API",
      "SCSS",
      "Tailwind",
      "Contentful headless CMS",
      "everything else I could get my hands on and looks interesting",
    ],
  },
];
