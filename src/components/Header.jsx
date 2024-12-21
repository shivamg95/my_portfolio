import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: #ffffff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0.75em 1em;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5em;

  a {
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--primary-color);
    }
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media(max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo>YourName</Logo>
        <Nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </Hamburger>
      </HeaderContainer>
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
