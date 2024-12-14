import React from "react";
import styled from "styled-components";

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
    &:hover {
      color: #0077b6;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>YourName</Logo>
      <Nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </Nav>
    </HeaderContainer>
  );
}
