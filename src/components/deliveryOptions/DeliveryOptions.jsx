/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './DeliveryOptions.style';

const OpcaoEntrega = ({ fontSize }) => (
  <Styled.ContainerOpcaoEntrega role="group" aria-labelledby="grupo-opcao-entrega">
    <Styled.Legend fontSize={fontSize} htmlFor="opcaoEntrega" id="grupo-opcao-entrega">
      Opção de entrega:
      <Styled.Label fontSize={fontSize} htmlFor="opçãoDomicilio">
        <Styled.InputRadio type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
        Domicílio
      </Styled.Label>
      <Styled.Label fontSize={fontSize} htmlFor="opçãoLocal">
        <Styled.InputRadio type="radio" id="opçãoLocal" name="opcaoEntrega" value="Retirada no Local" />
        Retirada no Local
      </Styled.Label>
    </Styled.Legend>
  </Styled.ContainerOpcaoEntrega>
);

export default OpcaoEntrega;
