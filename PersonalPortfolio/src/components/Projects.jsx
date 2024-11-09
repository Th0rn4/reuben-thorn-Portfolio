import React from "react";
import "./Projects.css";
import project1 from "../assets/HMS.png";
import project2 from "../assets/SMFS.png";

const projectsData = [
  {
    title: "Video Uploading and Streaming",
    description:
      "Designed and developed a video uploading and streaming application, implemented using React which resulted in a full stack MERN application that was deployed and graded a 90% average at NWU.",
    imageUrl: project1, // Replace with actual path
    githubLink: "https://github.com/Th0rn4/BoS-CMPG323",
  },
  {
    title: "SM Files",
    description:
      "I developed an app to help organize my Mac files during lectures and video editing. Simply select where you want to store any file type, and the app will ensure it gets saved to the designated location without any hassle.",
    imageUrl: project2,
    githubLink: "https://github.com/Th0rn4/simple-mac-files",
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <span className="project-heading">PROJECTS</span>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-block"
            key={index}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <span className="project-title">{project.title}</span>
            <div className="project-overlay">
              <span className="project-hover-description">
                {project.description}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
