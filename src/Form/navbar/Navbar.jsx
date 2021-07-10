/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, NavItem } from './Navbar.style';

const Navbar = () => (
  <header>
    <Nav>
      <ul>
        <NavItem><a href="#" tabIndex="0">Dados gerais (ALT + 1)</a></NavItem>
        <NavItem><a href="#" tabIndex="0">Suas preferências (ALT + 2)</a></NavItem>
        <NavItem><a href="#" tabIndex="0">Deixe seu comentário (ALT + 3)</a></NavItem>
      </ul>
    </Nav>
  </header>
);

export default Navbar;
