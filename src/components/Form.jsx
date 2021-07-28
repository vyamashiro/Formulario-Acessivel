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
  const [fontSize, setFontSize] = useState(1);
  const defaultProps = { fontSize };

  return (
    <>
      <Navbar defaultProps={defaultProps} setFontSize={setFontSize} />
      <Styled.Main>
        <form>
          <Styled.MainTitle>Formulário Acessível</Styled.MainTitle>
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
