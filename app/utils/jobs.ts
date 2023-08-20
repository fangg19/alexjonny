export interface JobType {
  id: number;
  jobTitle: string;
  content: {
    title: string;
    description: string[];
    url?: string;
  }[];
  company: string;
  companyDescription: string;
  period: string;
  startDate: Date;
  endDate: Date;
  stillWorking: boolean;
  techStack: string[];
}

export const jobs: JobType[] = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    content: [
      {
        title: "Sessions - Video Conferencing Platform",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
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
    companyDescription:
      "Sessions is a video conferencing platform that allows users to create and host video conferences, webinars and workshops.",
    period: "sept 2022 - present",
    startDate: new Date("2022-10-05"),
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
    jobTitle: "Frontend Developer",
    content: [
      {
        title: "UncleBob e-market",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
        url: "https://www.unclebob.ro/",
      },

      {
        title: "UncleBob e-commerce project - www.unclebob.ro",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },
    ],
    company: "UncleBob",
    companyDescription:
      "UncleBob is a Romanian start-up that sells a wide range of products, from electronics to home appliances and furniture.",
    period: "sept 2021 - aug 2022",
    startDate: new Date("2021-09-18"),
    endDate: new Date("2022-08-18"),
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
];
