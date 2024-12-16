import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 20px;
  background: #f9f9f9;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background: #007bff;
    color: white;
    border-radius: 5px;
  }
`;

const Skills = () => {
  const skills = ["React", "ASP.NET Core", "SQL", "Angular", "JavaScript", "HTML", "CSS"];

  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </SkillsSection>
  );
};

export default Skills;
