import React from 'react';
import Navbar from './navbar/Navbar';
import GeneralData from './generalData/GeneralData';
import Preference from './preference/Preference';
import DeliveryOptions from './deliveryOptions/DeliveryOptions';
import PaymentMethods from './paymentMethods/PaymentMethods';
import CommentBox from './commentBox/CommentBox';
import SubmitButton from './submitButton/SubmitButton';
import Footer from './footer/Footer';

function Form() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Formulário Acessível</h1>
        <form>
          <GeneralData />
          <Preference />
          <DeliveryOptions />
          <PaymentMethods />
          <CommentBox />
          <SubmitButton />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Form;
