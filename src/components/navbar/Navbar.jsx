import React from 'react';
import * as Styled from './Navbar.style';

const Navbar = ({ fontSize }) => (
  <Styled.Nav fontSize={fontSize}>
    <ul>
      <Styled.NavItem tabIndex="0">Acessibilidade</Styled.NavItem>
      <Styled.NavItem tabIndex="0">Formulário</Styled.NavItem>
      <Styled.NavItem tabIndex="0">Image</Styled.NavItem>
      <Styled.NavItem tabIndex="0">Vídeo</Styled.NavItem>
    </ul>
  </Styled.Nav>
);

export default Navbar;
