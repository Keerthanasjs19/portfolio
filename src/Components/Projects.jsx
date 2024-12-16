// import React from "react";
// import styled from "styled-components";

// const ProjectsSection = styled.section`
//   padding: 20px;

//   h2 {
//     text-align: center;
//     color: #333;
//   }

//   .project {
//     margin: 20px 0;
//     padding: 10px;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     background: #fff;
//   }

//   a {
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Projects = () => {
//   const projectList = [
//     {
//       title: "Air Ticket Booking App",
//       description: "A React-based app for booking air tickets with search and booking functionalities.",
//       link: "https://github.com/yourusername/air-ticket-app"
//     },
//     {
//       title: "Hospital Management System",
//       description: "A complete web app for managing patients, appointments, and doctors.",
//       link: "https://github.com/yourusername/hospital-management"
//     }
//   ];

//   return (
//     <ProjectsSection id="projects">
//       <h2>Projects</h2>
//       {projectList.map((project, index) => (
//         <div key={index} className="project">
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//         </div>
//       ))}
//     </ProjectsSection>
//   );
// };

// export default Projects;
import React, { useState } from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 70px;

  h2 {
    text-align: center;
    color: #333;
    background:rgba(48, 49, 120, 0.36);
  }

  .project {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 4px 15px rgba(199, 61, 61, 0.2);
    }
  }

  .view-button {
    color: #007bff;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(155, 230, 234, 0.46);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background-color:rgb(5, 50, 53);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "SMART PARKING AND TRAFFIC SYSTEM",
      description:
        "A IOT project which automate the management of the parkingsystem in IOT.Traffic system is optimized the timing interval",
      details: "Technologies: IOT",
    },
    {
        id: 2,
        title: "IOT BASED GARBAGE TYPE DETECTION AND SEGREGATION",
        description:
          "separate the waste based on metallic, nonmetallic, dry, wet waste. Using some sensors to detect that waste and separate them.",
        details: "Technologies: IOT",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      {projectList.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            className="view-button"
            onClick={() => openProject(project)}
          >
            View Project
          </button>
        </div>
      ))}

      
      {selectedProject && (
        <ModalOverlay>
          <ModalContent>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <button onClick={closeProject}>Back</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default Projects;
