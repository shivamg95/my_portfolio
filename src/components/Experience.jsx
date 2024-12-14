import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  max-width: 800px;
  margin: 4em auto;
  padding: 0 1em;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Company = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.25em;
`;

const Role = styled.span`
  font-weight: 500;
  display: block;
  margin-bottom: 0.5em;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: 1rem;
`;

export default function Experience() {
  const experiences = [
    {
      company: "Global Tech Solutions",
      role: "Module Lead, Front-End",
      duration: "Jan 2020 - Present",
      description:
        "Leading a team of React developers to build scalable, performance-oriented web applications for Fortune 500 clients. Involved in architecture decisions, code reviews, and mentoring junior developers.",
    },
    {
      company: "XYZ Innovations",
      role: "Senior Front-End Engineer",
      duration: "Jul 2017 - Dec 2019",
      description:
        "Developed responsive, feature-rich SPA applications using React, Redux, and GraphQL. Implemented best practices in code quality, accessibility, and cross-browser compatibility.",
    },
    {
      company: "ABC Tech",
      role: "Front-End Developer",
      duration: "Jan 2015 - Jun 2017",
      description:
        "Built modular UI components and integrated RESTful APIs. Optimized web performance and collaborated with UX designers to deliver intuitive user experiences.",
    },
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
