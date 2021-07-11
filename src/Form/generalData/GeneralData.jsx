/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './GeneralData.style';

const GeneralData = () => (
  <>
    <Styled.GeneralDataContainer>
      <Styled.Legend>Dados gerais</Styled.Legend>
      <Styled.Label htmlFor="form_name" accessKey="1">
        Nome:
        <Styled.Input type="text" id="form_name" name="form_name" placeholder="escreva o seu nome" />
      </Styled.Label>

      <Styled.Label htmlFor="form_surname">
        Sobrenome:
        <Styled.Input type="text" id="form_surname" surname="form_surname" placeholder="escreva o seu sobrenome" />
      </Styled.Label>
    </Styled.GeneralDataContainer>
  </>
);

export default GeneralData;
