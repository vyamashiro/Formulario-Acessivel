/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './DeliveryOptions.style';

const OpcaoEntrega = ({ fontSize }) => (
  <Styled.ContainerOpcaoEntrega role="group" aria-labelledby="grupo-opcao-entrega">
    <Styled.Legend fontSize={fontSize} htmlFor="opcaoEntrega" id="grupo-opcao-entrega">Opção de entrega:</Styled.Legend>
    <Styled.Label fontSize={fontSize} htmlFor="opçãoDomicilio">Domicílio</Styled.Label>
    <Styled.InputRadio type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
    <Styled.Label fontSize={fontSize} htmlFor="opçãoLocal">Retirada no Local</Styled.Label>
    <Styled.InputRadio type="radio" id="opçãoLocal" name="opcaoEntrega" value="Retirada no Local" />
  </Styled.ContainerOpcaoEntrega>
);

export default OpcaoEntrega;
