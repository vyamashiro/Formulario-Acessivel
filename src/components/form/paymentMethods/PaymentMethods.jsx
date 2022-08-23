import React from 'react';
import * as Styled from './PaymentMethods.style';

const FormaPagamento = ({ fontSize }) => (
  <div role="group" aria-labelledby="grupo-forma-pagamento">
    <Styled.Label fontSize={fontSize} htmlFor="formaPagamento" id="grupo-forma-pagamento">Forma de pagamento:</Styled.Label>
    <Styled.SelectBox fontSize={fontSize}>
      <option name="formaPagamento" value="dinheiro">dinheiro</option>
      <option name="formaPagamento" value="pix">pix</option>
      <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
      <option name="formaPagamento" value="cartão de débito">
        cartão de débito
      </option>
    </Styled.SelectBox>
  </div>
);

export default FormaPagamento;
