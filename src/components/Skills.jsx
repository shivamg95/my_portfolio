import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaJs,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const SkillsSection = styled.section`
  background: #ffffff;
  padding: 4em 1em;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2em;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 2.5rem;
    margin-bottom: 0.5em;
    color: #0077b6;
  }

  span {
    font-weight: 500;
  }
`;

export default function Skills() {
  const skills = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3" },
    { icon: <FaGitAlt />, label: "Git" },
  ];

  return (
    <SkillsSection id="skills">
      <Title>Core Skills</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {skill.icon}
            <span>{skill.label}</span>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}