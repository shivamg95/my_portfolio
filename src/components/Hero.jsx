import React from "react";
import styled from "styled-components";
import profilePic from "../assets/profile.jpg";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 4em 1em;
  background: linear-gradient(to right, #0077b6, #00b4d8);
  color: #fff;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1em;
  object-fit: cover;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5em;
`;

const SubHeading = styled.h2`
  font-weight: 400;
  margin-bottom: 1.5em;
`;

const CTA = styled.a`
  background: #fff;
  color: #0077b6;
  padding: 0.75em 1.5em;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    background: #e5e5e5;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <ProfileImage src={profilePic} alt="Your Name" />
      <Heading>Hello, I’m Your Name</Heading>
      <SubHeading>React Developer | 7+ Years Experience</SubHeading>
      <CTA href="#contact">Get in Touch</CTA>
    </HeroSection>
  );
}
