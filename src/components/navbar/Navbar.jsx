/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Styled from './Navbar.style';

const Navbar = () => {
  // eslint-disable-next-line no-console
  const increaseFontSize = (event) => {
    event.preventDefault();
    const abc = document.body.style.fontSize;
    console.log('abc', abc);
    const zzz = parseFloat(abc) + parseFloat('10%');
    console.log('zzz', zzz);
    return zzz;
    // const fontSize = document.getElementByTag("li").style.fontSize;
    // const getElement = document.getElementsByTagName('li');
    // console.log('getElement', getElement);
    // const style = window.getComputedStyle(getElement, null).getPropertyValue('font-size');
    // const fontSize = parseFloat(style);
    // console.log('fontSize', fontSize);
    // document.getElementById("foo").style.fontSize = x + 1;
  };
  // eslint-disable-next-line no-console
  const decreaseFontSize = (event) => {
    event.preventDefault();
    document.body.style.transform = 'scale(1.5)';
  };

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
            <Styled.Button onClick={increaseFontSize}>A+</Styled.Button>
            <Styled.Button onClick={decreaseFontSize}>A-</Styled.Button>
          </Styled.ButtonContainer>
        </ul>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
