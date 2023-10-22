export interface JobType {
  id: number;
  jobTitle: string;
  jobDetails: {
    title: string;
    description: { primaryText: string; secondaryText: string[] }[];
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
    jobDetails: [
      {
        title: "Sessions",
        description: [
          {
            primaryText:
              "Worked on the webinars module, including the various features it provides.",
            secondaryText: [],
          },
          {
            primaryText:
              "Developed the UI and the necessary logic, including some back-end, queries or mutations as needed, for new features like:",
            secondaryText: [
              "Custom domain name (CNAME)",
              "Default favicon replacing",
              "Create/use settings templates for various scenarios",
              "Personal e-mail syncing and using for the default e-mails",
              "Create/present offers during a webinar for audience",
            ],
          },
        ],
        url: "https://sessions.us/",
      },
      {
        title: "Event/Webinar landing page",
        description: [
          {
            primaryText:
              "Developed a dynamic landing page for webinars module.",
            secondaryText: [],
          },
        ],
        url: "",
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
    jobDetails: [
      {
        title: "UncleBob e-market",
        description: [
          {
            primaryText:
              "Crafted the elements and user interface for the checkout segment, enhancing and revamping the established process for registered users while introducing a new ordering flow for guest users.",
            secondaryText: [],
          },
          {
            primaryText:
              "Substituted Redux with Redux Toolkit within the project.",
            secondaryText: [],
          },
          {
            primaryText:
              "Introduced a system for applying discount vouchers to orders.",
            secondaryText: [],
          },
          {
            primaryText:
              "Created components and logic to facilitate scheduled deliveries either at the door or within vending machine lockers.",
            secondaryText: [],
          },
          {
            primaryText:
              "Added and enhanced Google Enhanced E-commerce functionalities.",
            secondaryText: [],
          },
          {
            primaryText:
              "Focused on enhancing page performance and speed, resulting in a Google Lighthouse score increase of more than 30 points.",
            secondaryText: [],
          },
        ],
        url: "https://www.unclebob.ro/",
      },

      {
        title: "UncleBob Warehouse - Internal Management Dashboard",
        description: [
          {
            primaryText: "Continuously managing the legacy Warehouse project.",
            secondaryText: [],
          },
          {
            primaryText:
              "Created a brand-new Warehouse project from the ground up.",
            secondaryText: [],
          },
          {
            primaryText:
              "Designed and implemented an advanced filtering system to refine backend data retrieval processes.",
            secondaryText: [],
          },
        ],
      },

      {
        title: "UncleBob IoT vending machines",
        description: [
          {
            primaryText:
              "Developed various states for the UI based on the user’s actions and the machine’s responses.",
            secondaryText: [],
          },
          {
            primaryText:
              "Enhanced the user interface for an upgraded visual experience.",
            secondaryText: [],
          },
          {
            primaryText:
              "Implemented alterations and additions to user interface elements to enhance overall user experience.",
            secondaryText: [],
          },
        ],
      },

      {
        title: "Others",
        description: [
          {
            primaryText:
              "Developed a landing page entirely from the ground up for an international conference using Next.js.",
            secondaryText: [],
          },
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
    jobDetails: [
      {
        title: "Executori Judecatoresti Bogaciu & Sorescu",

        description: [
          {
            primaryText: "Work still in progress.",
            secondaryText: [],
          },
        ],

        url: "https://www.executoribucuresti.ro/",
      },

      {
        title: "Executor Judecatoresc Ochian Doru Catalin",
        description: [
          {
            primaryText:
              "Developed the website entirely from the ground up using Next.js and Tailwind.",
            secondaryText: [],
          },
          {
            primaryText:
              "Implemented a custom-made, fully functional and responsive design.",
            secondaryText: [],
          },
          {
            primaryText: `Added headless CMS functionalities for the "Auctions" and "Documents" section.`,
            secondaryText: [],
          },
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
