import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 20px;
  background:rgba(71, 61, 61, 0.17);
  text-align: center;

  h2 {
    color: #333;
  }

  p {
    margin-top: 10px;
    color: #555;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Keerthanasjs, a passionate software developer specializing in
        building full-stack web applications. I have experience in React, ASP.NET Core, SQL, and
        creating seamless user experiences.
        
      </p>
    </AboutSection>
  );
};

export default About;
