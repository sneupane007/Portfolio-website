import React from "react";
import ProjectCard from "./components/ProjectCard";
import projectData from "./data/projectData";

const App = () => {
  return (
    <div className="app-container bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
