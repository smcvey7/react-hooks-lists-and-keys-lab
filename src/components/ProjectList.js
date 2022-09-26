import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projs = projects.map(project=><ProjectItem key = {project.name} name={project.name} about= {project.about} technologies={project.technologies} ></ProjectItem>)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projs}
      </div>
    </div>
  );
}

export default ProjectList;
