import React from 'react';
import Picture from './man-with-laptop-thinking.jpg';
import * as Styled from './Image.style';

function Image() {
  return (
    <figure>
      <Styled.Image src={Picture} alt="foto de um homem pensativo sentado no chão com as pernas cruzadas e um notebook em seu colo." />
      <Styled.Figcaption>
        Créditos:
        <Styled.Link target="_blank" href="https://br.freepik.com/fotos/negocio"> Negócio foto criado por luis_molinero - br.freepik.com</Styled.Link>
      </Styled.Figcaption>
    </figure>
  );
}

export default Image;
