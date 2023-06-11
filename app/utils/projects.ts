export interface ProjectType {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  demoUrl: string;
  githubUrl?: string;
  isPrivate: boolean;
  imageUrl?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Sessions",
    subtitle: "Video Conferencing Platform",
    description: [
      "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
      "Created the Register and Login pages from scratch",
    ],
    demoUrl: "https://sessions.us/",
    githubUrl: "httpsL//github.com",
    isPrivate: true,
  },
  {
    id: 2,
    title: "UncleBob",
    subtitle: "e-commerce project",
    description: [
      "Developed the components and the interface for the checkout section. Updated and redesigned the existing flow for registered users and built a new flow for guest user",
      "Created the Register and Login pages from scratch",
    ],
    demoUrl: "https://www.unclebob.ro/",
    githubUrl: "httpsL//github.com",
    isPrivate: false,
  },
];
