import { projects, ProjectType } from "@/app/utils/projects";
import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-between">
      {projects.map((project: ProjectType, index: number) => {
        return (
          <ProjectCard
            key={index}
            demoUrl={project.demoUrl}
            description={project.description}
            githubUrl={project?.githubUrl}
            id={project.id}
            imageUrl={project?.imageUrl}
            isPrivate={project.isPrivate}
            subtitle={project.subtitle}
            title={project.title}
          />
        );
      })}
    </div>
  );
};

export default Projects;
