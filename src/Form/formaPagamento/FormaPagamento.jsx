/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './FormaPagamento.style';

const FormaPagamento = () => (
  <>
    <Styled.Label htmlFor="formaPagamento">
      Forma de pagamento:
      <Styled.SelectBox>
        <option name="formaPagamento" value="dinheiro">dinheiro</option>
        <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
        <option name="formaPagamento" value="cartão de débito">cartão de débito</option>
      </Styled.SelectBox>
    </Styled.Label>
  </>
);

export default FormaPagamento;
