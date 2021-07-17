/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './PaymentMethods.style';

const FormaPagamento = () => (
  <div role="group" aria-labelledby="grupo-forma-pagamento">
    <Styled.Label htmlFor="formaPagamento" id="grupo-forma-pagamento">
      Forma de pagamento:
      <Styled.SelectBox>
        <option name="formaPagamento" value="dinheiro">dinheiro</option>
        <option name="formaPagamento" value="pix">PIX</option>
        <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
        <option name="formaPagamento" value="cartão de débito">cartão de débito</option>
      </Styled.SelectBox>
    </Styled.Label>
  </div>
);

export default FormaPagamento;
