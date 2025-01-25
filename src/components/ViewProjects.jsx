import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./data/projectData";

const ViewProjects = () => {
  return (
    <>
      <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </>
  );
};

export default ViewProjects;
