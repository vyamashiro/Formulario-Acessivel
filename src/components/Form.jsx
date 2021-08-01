/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import GeneralData from './generalData/GeneralData';
import Preference from './preference/Preference';
import DeliveryOptions from './deliveryOptions/DeliveryOptions';
import PaymentMethods from './paymentMethods/PaymentMethods';
import CommentBox from './commentBox/CommentBox';
import SubmitButton from './submitButton/SubmitButton';
import Footer from './footer/Footer';
import * as Styled from './Form.style';

function Form() {
  const [fontSize, setFontSize] = useState(0);

  return (
    <>
      <Navbar setFontSize={setFontSize} fontSize={fontSize} />
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
      <Footer />
    </>
  );
}

export default Form;
