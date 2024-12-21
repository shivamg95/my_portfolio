import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  max-width: var(--max-width);
  margin: 4em auto;
  padding: 0 1em;

  @media(max-width: 768px) {
    margin: 2em auto;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;

  @media(max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5em;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const ExperienceItem = styled.div`
  background: #fff;
  padding: 1.5em;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);

  @media(max-width: 768px) {
    padding: 1em;
  }
`;

const Company = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.25em;

  @media(max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Role = styled.span`
  font-weight: 500;
  display: block;
  margin-bottom: 0.5em;

  @media(max-width: 768px) {
    font-size: 1rem;
  }
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 1em;

  @media(max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media(max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default function Experience() {
  const experiences = [
    {
      company: '3Pillar Global',
      role: 'Module Lead, Front-End',
      duration: 'May 2022 - Present',
      description: 'Leading a team of React developers to build scalable, performance-oriented web applications for Fortune 500 clients. Involved in architecture decisions, code reviews, and mentoring junior developers.'
    },
    {
      company: 'Rebel Foods (Faasos)',
      role: 'Senior Front-End Engineer',
      duration: '',
      description: 'Developed responsive, feature-rich SPA applications using React, Redux, and GraphQL. Implemented best practices in code quality, accessibility, and cross-browser compatibility.'
    },
    {
      company: 'Global Logic (Hitachi Group)',
      role: 'Front-End Developer',
      duration: 'July 2018 - Jun 2021',
      description: 'Built modular UI components and integrated RESTful APIs. Optimized web performance and collaborated with UX designers to deliver intuitive user experiences.'
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Title>Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <Company>{exp.company}</Company>
            <Role>{exp.role}</Role>
            <Duration>{exp.duration}</Duration>
            <Description>{exp.description}</Description>
          </ExperienceItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}
