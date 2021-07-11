/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Styled from './Navbar.style';

const Navbar = () => (
  <Styled.Header>
    <Styled.Nav>
      <ul>
        <Styled.NavItem tabIndex="0">Dados gerais (ALT + 1)</Styled.NavItem>
        <Styled.NavItem tabIndex="0">Suas preferências (ALT + 2)</Styled.NavItem>
        <Styled.NavItem tabIndex="0">Deixe seu comentário (ALT + 3)</Styled.NavItem>
      </ul>
    </Styled.Nav>
  </Styled.Header>
);

export default Navbar;
