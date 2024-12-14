import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  background: #0077b6;
  color: #fff;
  text-align: center;
  padding: 4em 1em;
`;

const Title = styled.h2`
  margin-bottom: 1em;
`;

const ContactInfo = styled.p`
  margin-bottom: 2em;
  font-size: 1.1rem;
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5em;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 1.5rem;
    &:hover {
      color: #00b4d8;
    }
  }
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Get in Touch</Title>
      <ContactInfo>
        I am currently available for freelance React development work. Interested in working together?
        Let’s connect!
      </ContactInfo>
      <Icons>
        <a href="mailto:yourname@example.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </Icons>
    </ContactSection>
  );
}
