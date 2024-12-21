import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 20;
`;

const MenuContainer = styled.div`
  background: #fff;
  position: absolute;
  top: 0; right: 0;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);

  a {
    margin-bottom: 1em;
    font-weight: 500;
    font-size: 1.1rem;
    &:hover {
      color: var(--primary-color);
    }
  }

  @media(max-width: 480px) {
    width: 80%;
  }
`;

const CloseBtn = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-bottom: 1em;
  cursor: pointer;
`;

export default function MobileMenu({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <MenuContainer onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
        <a href="#about" onClick={onClose}>About</a>
        <a href="#skills" onClick={onClose}>Skills</a>
        <a href="#experience" onClick={onClose}>Experience</a>
        <a href="#contact" onClick={onClose}>Contact</a>
      </MenuContainer>
    </Overlay>
  );
}
