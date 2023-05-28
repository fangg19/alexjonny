export interface JobType {
  id: number;
  jobTitle: string;
  content: {
    title: string;
    description: string[];
  }[];
  company: string;
  period: string;
}

export const jobs: JobType[] = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    content: [
      {
        title: "UncleBob e-commerce project - www.unclebob.ro",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },

      {
        title: "UncleBob e-commerce project - www.unclebob.ro",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },
    ],
    company: "Sessions",

    period: "sept 2022 - present",
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    content: [
      {
        title: "UncleBob e-commerce project - www.unclebob.ro",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },

      {
        title: "UncleBob e-commerce project - www.unclebob.ro",
        description: [
          "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
          "Created the Register and Login pages from scratch",
        ],
      },
    ],
    company: "BOB",
    period: "sept 2021 - aug 2022",
  },
];
