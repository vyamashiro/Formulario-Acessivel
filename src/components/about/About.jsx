import React from 'react';
import Picture from './man-with-laptop-thinking';
import * as Styled from './Image.style';

function About() {
  return (
    <>
      <h1>Sobre a Acessibilidade</h1>
      <p>A acessibilidade na web....</p>

      // Como usar os atalhos

      // Navegador / Sistema Operacional | Windows | Linux | Mac
      // ------------------- | ------- | ----- | ----- 
      // Chrome              | Alt + tecla | Alt + tecla | Control + Alt + tecla
      // Firefox (versão 57+)| Alt + Shift + tecla | Alt + Shift + tecla | Control + Option + tecla ou Control + Alt + tecla
      // Safari              | Alt + tecla | N/A | Control + Alt + tecla
      // Edge                | Alt + tecla | N/A | N/A
      // Internet Explorer   | Alt + tecla | N/A | N/A
      // Opera (versão 15+)  | Alt + tecla | Alt + tecla | Control + Alt + tecla
    </>
  );
}

export default About;
