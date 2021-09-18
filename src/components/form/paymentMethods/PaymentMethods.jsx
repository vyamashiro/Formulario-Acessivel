/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './PaymentMethods.style';

const FormaPagamento = ({ fontSize }) => (
  <div role="group" aria-labelledby="grupo-forma-pagamento">
    <Styled.Label fontSize={fontSize} htmlFor="formaPagamento" id="grupo-forma-pagamento">
      Forma de pagamento:
      <Styled.SelectBox fontSize={fontSize}>
        <option name="formaPagamento" value="dinheiro">dinheiro</option>
        <option name="formaPagamento" value="pix">pix</option>
        <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
        <option name="formaPagamento" value="cartão de débito">cartão de débito
</option>
      </Styled.SelectBox>
    </Styled.Label>
  </div>
);

export default FormaPagamento;
