/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './NavbarAcessibility.style';

const NavbarAcessibility = ({ fontSize, setFontSize }) => {
  const increaseFontSize = (event) => {
    event.preventDefault();
    setFontSize(fontSize + 1);
  };
  const decreaseFontSize = (event) => {
    event.preventDefault();
    setFontSize(fontSize - 1);
  };

  return (
    <Styled.Header fontSize={fontSize}>
      <Styled.Nav>
        <ul>
          <Styled.NavItem tabIndex="0" accessKey="0">Menu de atalhos (ALT + 0)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Dados gerais (ALT + 1)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Suas preferências (ALT + 2)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Deixe seu comentário (ALT + 3)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Rodapé (ALT + 4)</Styled.NavItem>
          <Styled.ButtonContainer>
            <Styled.Button onClick={increaseFontSize}>Aumentar Fonte</Styled.Button>
            <Styled.Button onClick={decreaseFontSize}>Diminuir Fonte</Styled.Button>
          </Styled.ButtonContainer>
        </ul>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default NavbarAcessibility;
