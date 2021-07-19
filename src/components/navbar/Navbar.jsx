/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './Navbar.style';

// eslint-disable-next-line react/prop-types
const Navbar = ({ fontSize, setFontSize }) => {
  // const [state, setState] = useState();

  // eslint-disable-next-line no-console
  const increaseFontSize = () => {
    // event.preventDefault();
    setFontSize(fontSize + 1);
    console.log('fontSize', fontSize);
  };
  // eslint-disable-next-line no-console
  const decreaseFontSize = (event) => {
    event.preventDefault();
    // const decreaseFontSize = (setState, state) => {
    //   setState((oldState) => oldState > 0 ? state - .1 : 0)
    // }
    // document.body.style.transform = 'scale(1.5)';
  };

  return (
    <Styled.Header>
      <Styled.Nav>
        <ul>
          <Styled.NavItem tabIndex="0" accessKey="0">Menu de atalhos (ALT + 0)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Dados gerais (ALT + 1)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Suas preferências (ALT + 2)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Deixe seu comentário (ALT + 3)</Styled.NavItem>
          <Styled.NavItem tabIndex="0">Rodapé (ALT + 4)</Styled.NavItem>
          <Styled.ButtonContainer>
            <Styled.Button onClick={() => { increaseFontSize(fontSize, setFontSize); }}>
              A+
            </Styled.Button>
            <Styled.Button onClick={decreaseFontSize}>A-</Styled.Button>
          </Styled.ButtonContainer>
        </ul>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Navbar;
