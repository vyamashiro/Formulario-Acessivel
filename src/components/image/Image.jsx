import React from 'react';
import Picture from './man-with-laptop-thinking.jpg';
import * as Styled from './Image.style';

function Image() {
  console.log('ok');

  return (
    <main>
      <article>
        <Styled.TitleH1>Acessibilidade de imagens</Styled.TitleH1>
        <figure>
          <Styled.Image
            src={Picture}
            alt="foto de um homem pensativo sentado no chão com as pernas cruzadas e um notebook em seu colo."
          />
          <Styled.Figcaption>
            créditos:
            <Styled.Link
              target="_blank"
              rel="noreferrer noopener"
              href="https://br.freepik.com/fotos/negocio"
            >
              negócio foto criado por luis_molinero - br.freepik.com
            </Styled.Link>
          </Styled.Figcaption>
        </figure>
        <Styled.TitleH2>Atributo alt</Styled.TitleH2>
        <Styled.Paragraph>Imagens precisam ter um atributo alt dentro da tag img para que possam ser lidas por leitores de tela.</Styled.Paragraph>
        <Styled.TitleH2>Como escrever o atributo alt</Styled.TitleH2>
        <Styled.Paragraph>Para descrição do atributo alt é importante seguir algumas boas práticas que são:</Styled.Paragraph>
        <Styled.UL>
          <li>Utilize frases curtas e evite adjetivos;</li>
          <li>Classifique o tipo da imagem (fotografia, tirinha, ilustração e etc);</li>
          <li>Descreva a imagem seguindo esta ordem: da esquerda para a direita e, posteriormente, de cima para baixo;</li>
          <li>Informe cores, tonalidades;</li>
          <li>Descreva os elementos em uma sequência lógica.</li>
        </Styled.UL>
        <Styled.Paragraph>Baseado no artigo do site da site...</Styled.Paragraph>
      </article>
    </main>
  );
}

export default Image;
