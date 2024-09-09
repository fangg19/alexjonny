export interface JobType {
  id: number;
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
    company: "home",
    companyDescription: [
      "other things I've done in the past / I'm doing now at home",
    ],
    period: "sept 2021 - aug 2022",
    startDate: new Date("2020-07-13"),
    endDate: new Date(),
    stillWorking: true,
    techStack: [
      "TypeScript",
      "Next.js",
      "tRPC",
      "Prisma",
      "Node.js",
      "Express",
      "GraphQL",
      "REST",
      "Tailwind",
      "every other tool or library I could get my hands on and looks interesting",
    ],
  },
  {
    id: 2,
    company: "Sessions",
    companyDescription: [
      "I've spent two years working at Sessions, a complex and yet an user-friendly videoconferencing platform.",
      "A fast growing startup with over 60.000 users, Sessions strives to be a better choice for videoconferencing by having the required set of tools in one place.",
      "I had a role in developing the web app, maintaining the codebase and implementing new features.",
    ],
    period: "sept 2022 - present",
    startDate: new Date("2022-09-10"),
    endDate: new Date("2024-08-15"),
    stillWorking: false,
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
    id: 3,
    company: "UncleBob",
    companyDescription: [
      "For almost a year I worked at UncleBob. The place where it all started.",
      "I enjoyed my first year as a developer, learning a lot of new things and working on various projects.",
      "I met some great people that made my life easier and made the whole experience more enjoyable.",
      "Unclebob is a romanian start-up which aims to be more than an online market, offering the everyday essentials and can conveniently be a one-stop destination for the general shopping needs.",
      "Additionally, unclebob.ro, besides other cool things they do, integrates self-service -vending machines- acting as a personal concierge with a bunch of light and weight sensors that simply know what you took from the shelf, to provide a faster and easier shopping experience.",
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
];
