import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  background: var(--primary-color);
  color: #fff;
  text-align: center;
  padding: 4em 1em;

  @media(max-width: 768px) {
    padding: 2em 1em;
  }
`;

const Title = styled.h2`
  margin-bottom: 1em;

  @media(max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 2em;
  font-size: 1.1rem;

  @media(max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5em;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5em;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--secondary-color);
    }

    @media(max-width: 768px) {
      font-size: 1.3rem;
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
        <a href="mailto:shivamg95@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/shivamg95/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shivamg95" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </Icons>
    </ContactSection>
  );
}
