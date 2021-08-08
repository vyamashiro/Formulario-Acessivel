import React, { useState } from 'react';
import NavbarAcessibility from './navbarAcessibility/NavbarAcessibility';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
// import Image from './image/Image';
// import About from './about/About';
import GeneralData from './form/generalData/GeneralData';
import Preference from './form/preference/Preference';
import DeliveryOptions from './form/deliveryOptions/DeliveryOptions';
import PaymentMethods from './form/paymentMethods/PaymentMethods';
import CommentBox from './form/commentBox/CommentBox';
import SubmitButton from './form/submitButton/SubmitButton';
import * as Styled from './Form.style';

function Form() {
  const [fontSize, setFontSize] = useState(0);

  return (
    <>
      <NavbarAcessibility setFontSize={setFontSize} fontSize={fontSize} />
      <Navbar fontSize={fontSize} />
      <Styled.Main>
        {/* <About /> */}
        {/* <Image /> */}
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
      <Footer fontSize={fontSize} />
    </>
  );
}

export default Form;
