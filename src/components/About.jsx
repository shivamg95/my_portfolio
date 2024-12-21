import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  max-width: var(--max-width);
  margin: 4em auto;
  padding: 0 1em;

  @media(max-width: 768px) {
    margin: 2em auto;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1em;

  @media(max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  text-align: center;

  @media(max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <Title>About Me</Title>
      <Paragraph>
        I am a module lead front-end developer specializing in React and other front end technologies. Over the past several years, I’ve worked
        with global MNCs delivering high-quality, scalable, responsive web applications that converts. I am passionate about creating 
        efficient, performant and elegant user interfaces, and driving front-end architecture 
        decisions. I am now open to taking on freelance contracts to apply my skills to diverse projects.
      </Paragraph>
    </AboutSection>
  );
}
