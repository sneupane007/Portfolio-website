import React from "react";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="project-card border rounded-lg p-4 shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
