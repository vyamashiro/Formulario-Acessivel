/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './Navbar.style';

// eslint-disable-next-line react/prop-types
const Navbar = ({ fontSize, setFontSize }) => {
  // const [state, setState] = useState();

  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-unused-vars
  const increaseFontSize = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    setFontSize(fontSize + 1);

    // eslint-disable-next-line no-console
    console.log('fontSize', fontSize);
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

export default Navbar;
