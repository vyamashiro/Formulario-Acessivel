/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Styled from './Navbar.style';

const Navbar = () => {
  // eslint-disable-next-line no-console
  const aumentarFonte = () => { console.log('A+'); };
  // eslint-disable-next-line no-console
  const diminuirFonte = () => { console.log('A-'); };
  return (
    <Styled.Header>
      <Styled.Nav>
        <ul>
          <Styled.NavItem tabIndex="0">Menu de atalhos (ALT + 0)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Dados gerais (ALT + 1)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Suas preferências (ALT + 2)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Deixe seu comentário (ALT + 3)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Rodapé (ALT + 4)</Styled.NavItem>
          <Styled.ButtonContainer>
            <Styled.Button onClick={aumentarFonte}>A+</Styled.Button>
            <Styled.Button onClick={diminuirFonte}>A-</Styled.Button>
          </Styled.ButtonContainer>
        </ul>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
