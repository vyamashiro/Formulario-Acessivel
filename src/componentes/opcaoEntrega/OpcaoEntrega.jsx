import React from 'react';
import * as Styled from './OpcaoEntrega.style';

const OpcaoEntrega = () => (
  <Styled.ContainerOpcaoEntrega role="group" aria-labelledby="grupo-opcao-entrega">
    <Styled.Legend htmlFor="opcaoEntrega" id="grupo-opcao-entrega">
      Opção de entrega:
      <Styled.Label htmlFor="opçãoDomicilio">
        <Styled.InputRadio type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
        Domicílio
      </Styled.Label>
      <Styled.Label htmlFor="opçãoLocal">
        <Styled.InputRadio type="radio" id="opçãoLocal" name="opcaoEntrega" value="Retirada no Local" />
        Retirada no Local
      </Styled.Label>
    </Styled.Legend>
  </Styled.ContainerOpcaoEntrega>
);

export default OpcaoEntrega;
