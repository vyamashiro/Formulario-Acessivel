import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from './Navbar.style';

const Navbar = ({ fontSize }) => (
  <Nav fontSize={fontSize}>
    <ul>
      {/* <NavItem tabIndex="0"><Link to="/about">Acessibilidade</Link></NavItem> */}
      <NavItem tabIndex="0"><Link to="/">Formulário</Link></NavItem>
      <NavItem tabIndex="0"><Link to="/image">Image</Link></NavItem>
      {/* <NavItem tabIndex="0">Vídeo</NavItem> */}
    </ul>
  </Nav>
);

export default Navbar;
