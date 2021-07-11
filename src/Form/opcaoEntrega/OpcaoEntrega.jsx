/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './OpcaoEntrega.style';

const OpcaoEntrega = () => (
  <div>
    <Styled.Label htmlFor="opcaoEntrega">
      Opção de entrega:
      <Styled.Label htmlFor="opçãoDomicilio">
        <Styled.InputRadio type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
        Domicílio
      </Styled.Label>
      <Styled.Label htmlFor="opçãoLocal">
        <Styled.InputRadio type="radio" id="opçãoLocal" name="opcaoEntrega" value="Retirada no Local" />
        Retirada no Local
      </Styled.Label>
    </Styled.Label>
  </div>
);

export default OpcaoEntrega;
