/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import Picture from './man-with-laptop-thinking.jpg';
import NavbarAcessibility from '../navbarAcessibility/NavbarAcessibility';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import * as Styled from './Image.style';

function Image() {
  const [fontSize, setFontSize] = useState(0);

  return (
    <>
      <NavbarAcessibility setFontSize={setFontSize} fontSize={fontSize} />
      <Navbar fontSize={fontSize} />
      <main>
        <article>
          <Styled.TitleH1>Acessibilidade de imagens</Styled.TitleH1>
          <figure>
            <Styled.Image
              src={Picture}
              alt="foto de um homem pensativo sentado no chão com as pernas cruzadas e um notebook em seu colo."
            />
            <Styled.Figcaption>
              <Styled.Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://br.freepik.com/fotos/negocio"
              >
                Crédito: luis_molinero - br.freepik.com
              </Styled.Link>
            </Styled.Figcaption>
          </figure>
          <Styled.TitleH2>Atributo alt</Styled.TitleH2>
          <Styled.Paragraph>
            Imagens precisam ter um atributo alt dentro da tag img para que possam ser lidas por leitores de tela.
          </Styled.Paragraph>
          <Styled.TitleH2>Como escrever o atributo alt</Styled.TitleH2>
          <Styled.Paragraph>
            Para descrição do atributo alt é importante seguir algumas boas práticas que são:
          </Styled.Paragraph>
          <Styled.Ul>
            <Styled.Li>Utilize frases curtas e evite adjetivos;</Styled.Li>
            <Styled.Li>Classifique o tipo da imagem (fotografia, tirinha, ilustração e etc);</Styled.Li>
            <Styled.Li>
              Descreva a imagem seguindo esta ordem: da esquerda para a direita e, posteriormente, de cima para baixo;
            </Styled.Li>
            <Styled.Li>Informe cores, tonalidades;</Styled.Li>
            <Styled.Li>Descreva os elementos em uma sequência lógica.</Styled.Li>
          </Styled.Ul>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Image;
