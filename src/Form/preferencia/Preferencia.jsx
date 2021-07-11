/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './Preferencia.style';

const Preferencia = () => (
  <div>
    <p>Suas preferências</p>

    <legend>Qual dos tipos de comida abaixo você gosta ?</legend>
    <Styled.Label htmlFor="Mexicana">
      <Styled.InputCheckbox type="checkbox" id="Mexicana" accessKey="2" />
      Mexicana
    </Styled.Label>
    <Styled.Label htmlFor="Japonesa">
      <Styled.InputCheckbox type="checkbox" id="Japonesa" />
      Japonesa
    </Styled.Label>
    <Styled.Label htmlFor="Italiana">
      <Styled.InputCheckbox type="checkbox" id="Italiana" />
      Italiana
    </Styled.Label>
    <Styled.Label htmlFor="Brasileira">
      <Styled.InputCheckbox type="checkbox" id="Brasileira" />
      Brasileira
    </Styled.Label>
    <Styled.Label htmlFor="Outra">
      <Styled.InputCheckbox type="checkbox" id="Outra" />
      Outra
    </Styled.Label>
  </div>
);

export default Preferencia;
