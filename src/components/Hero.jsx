import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile.jpg';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 4em 1em;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: #fff;

  @media(max-width: 768px) {
    padding: 3em 1em;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1em;
  object-fit: cover;

  @media(max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5em;

  @media(max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h2`
  font-weight: 400;
  margin-bottom: 1.5em;

  @media(max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTA = styled.a`
  background: #fff;
  color: var(--primary-color);
  padding: 0.75em 1.5em;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #e5e5e5;
  }

  @media(max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6em 1.2em;
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
