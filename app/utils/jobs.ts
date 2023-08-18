export interface JobType {
  id: number;
  jobTitle: string;
  content: {
    title: string;
    description: string[];
    url?: string;
  }[];
  company: string;
  period: string;
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

    period: "sept 2022 - present",
    techStack: ["React", "Next.js", "TypeScript", "GraphQL", "SCSS"],
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
    period: "sept 2021 - aug 2022",
    techStack: ["React", "Next.js", "REST API", 'Redux', "Redux Toolkit", "SCSS",],
  },
];
