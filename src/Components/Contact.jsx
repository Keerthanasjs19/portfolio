import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 10px;
  background:rgb(36, 155, 214);
  color: white;
  text-align: center;

  a {
    color: #f4f4f4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact</h2>
      <p>Email: keerthanasjs123@gmail.com</p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/keerthana-sjs-2a56b0244/" target="_blank" rel="noopener noreferrer">
         Keerthanasjs
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/Keerthanasjs19" target="_blank" rel="noopener noreferrer">
          Keerthanasjs19
        </a>
      </p>
    </ContactSection>
  );
};

export default Contact;
