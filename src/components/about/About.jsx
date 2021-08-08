/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import * as Styled from './About.style';

function About() {
  return (
    <>
      <h1>Sobre a Acessibilidade</h1>
      <p>A acessibilidade na web....</p>

      <table>
        <caption>Como usar os atalhos</caption>
        <thead>Como usar os atalhos</thead>
        <tbody>
          <tr>
            <td>memória: </td>
            <td>8 gb</td>
          </tr>
          <tr>
            <td>câmera</td>
            <td>5 MP para fotos</td>
          </tr>
        </tbody>
        <tfoot>Fonte: MDN</tfoot>
      </table>
      {/* // Navegador / Sistema Operacional | Windows | Linux | Mac
      // ------------------- | ------- | ----- | -----
      // Chrome              | Alt + tecla | Alt + tecla | Control + Alt + tecla
      // Firefox (versão 57+)| Alt + Shift + tecla | Alt + Shift + tecla | Control + Option + tecla ou Control + Alt + tecla
      // Safari              | Alt + tecla | N/A | Control + Alt + tecla
      // Edge                | Alt + tecla | N/A | N/A
      // Internet Explorer   | Alt + tecla | N/A | N/A
      // Opera (versão 15+)  | Alt + tecla | Alt + tecla | Control + Alt + tecla */}
    </>
  );
}

export default About;
