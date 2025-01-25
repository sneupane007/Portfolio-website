import React from "react";

const ProjectCard = ({ title, description, image, repoLink }) => {
  return (
    <div className="project-card border rounded-lg p-4 shadow-lg">
      <a
        href={repoLink ? repoLink : "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${repoLink ? "" : "pointer-events-none opacity-50"}`}
      >
        <div>
          <img
            src={image}
            alt={title}
            className=" self-center first-line:bg-gradient-to-b object-cover rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </a>
      {!repoLink && (
        <p className="text-xs text-red-500 mt-2">
          Repository link not available.
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
