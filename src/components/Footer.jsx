import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #fff;
  text-align: center;
  padding: 1em 0;
  border-top: 1px solid #ddd;

  @media(max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Shivam Gupta. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
}
