import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 100px 20px;
  background:white ;
  color:rgb(237, 243, 238);

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #66fcf1;
    margin-bottom: 40px;
  }

  .experience-item {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #c5c6c7;
    border-radius: 5px;
    background: #1f2833;

    h3 {
      color: #66fcf1;
      font-size: 1.5rem;
    }

    p {
      margin: 5px 0;
      color: #c5c6c7;
    }

    span {
      font-size: 0.9rem;
      color: #45a29e;
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "SHELLINFO TECHNOLOGIES.",
      role: "NET DEVELOPER",
      duration: "AUG 2023 - AUG 2024",
      description: "Developed responsive web applications and APIs .",
    },
    {
      id: 2,
      company: "NEO TECHNOLOGIES",
      role: "Software intern",
      duration: "Oct 2024 - present",
      description: "Built interactive UI components and optimized web performance.",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div className="experience-item" key={exp.id}>
          <h3>{exp.company}</h3>
          <p><strong>Role:</strong> {exp.role}</p>
          <span>{exp.duration}</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </ExperienceSection>
  );
};

export default Experience;
