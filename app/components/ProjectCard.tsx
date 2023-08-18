import React from "react";
import Button from "./Button";

type ProjectCardProps = {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  demoUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  isPrivate: boolean;
};

const ProjectCard = (props: ProjectCardProps) => {
  const {
    id,
    title,
    description,
    demoUrl,
    githubUrl,
    imageUrl,
    isPrivate,
    subtitle,
  } = props;

  return (
    <div className="flex flex-col lg:w-1/2 w-full my-4">
      <div className="flex flex-row gap-2 lg:text-2xl font-bold">
        <span className="underline">00{id}</span>
        <h1>{title} </h1>
      </div>

      <h3 className="mt-2 lg:text-xl font-semibold">{subtitle}</h3>

      <p className="mt-6">{description}</p>

      <div className="flex flex-row items-center justify-between mt-6">
        <Button type="secondary" url={demoUrl}>
          https://
        </Button>

        <Button type="primary" url={!isPrivate ? githubUrl : undefined} isPrivate={isPrivate}>
          {!isPrivate ? "./src" : "isPrivate"}
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
