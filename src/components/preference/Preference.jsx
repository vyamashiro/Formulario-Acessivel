/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './Preference.style';

const Preferencia = ({ fontSize }) => (
  <>
    <Styled.ContainerPreferencia role="group" aria-labelledby="grupo-preferencia">
      <Styled.Legend fontSize={fontSize} id="grupo-preferencia">Qual dos tipos de comida abaixo você gosta ?</Styled.Legend>
      <Styled.Label fontSize={fontSize} htmlFor="Mexicana">
        <Styled.InputCheckbox type="checkbox" id="Mexicana" accessKey="2" />
        Mexicana
      </Styled.Label>
      <Styled.Label fontSize={fontSize} htmlFor="Japonesa">
        <Styled.InputCheckbox type="checkbox" id="Japonesa" />
        Japonesa
      </Styled.Label>
      <Styled.Label fontSize={fontSize} htmlFor="Italiana">
        <Styled.InputCheckbox type="checkbox" id="Italiana" />
        Italiana
      </Styled.Label>
      <Styled.Label fontSize={fontSize} htmlFor="Brasileira">
        <Styled.InputCheckbox type="checkbox" id="Brasileira" />
        Brasileira
      </Styled.Label>
      <Styled.Label fontSize={fontSize} htmlFor="Outra">
        <Styled.InputCheckbox type="checkbox" id="Outra" />
        Outra
      </Styled.Label>
    </Styled.ContainerPreferencia>
  </>
);

export default Preferencia;
