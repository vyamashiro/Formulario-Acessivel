/* eslint-disable linebreak-style */
import React from 'react';
import GeneralData from './form/generalData/GeneralData';
import Preference from './form/preference/Preference';
import DeliveryOptions from './form/deliveryOptions/DeliveryOptions';
import PaymentMethods from './form/paymentMethods/PaymentMethods';
import CommentBox from './form/commentBox/CommentBox';
import SubmitButton from './form/submitButton/SubmitButton';
import * as Styled from './Form.styles';

function Form({ fontSize }) {
  return (
    <>
      <Styled.Main>
        <form>
          <Styled.MainTitle fontSize={fontSize}>Formulário Acessível</Styled.MainTitle>
          <GeneralData fontSize={fontSize} />
          <Preference fontSize={fontSize} />
          <DeliveryOptions fontSize={fontSize} />
          <PaymentMethods fontSize={fontSize} />
          <CommentBox fontSize={fontSize} />
          <SubmitButton fontSize={fontSize} />
        </form>
      </Styled.Main>
    </>
  );
}

export default Form;
