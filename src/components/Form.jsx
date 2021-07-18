import React from 'react';
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
  return (
    <>
      <Navbar />
      <Styled.Main>
        <Styled.MainTitle>Formulário Acessível</Styled.MainTitle>
        <form>
          <GeneralData />
          <Preference />
          <DeliveryOptions />
          <PaymentMethods />
          <CommentBox />
          <SubmitButton />
        </form>
      </Styled.Main>
      <Footer />
    </>
  );
}

export default Form;
