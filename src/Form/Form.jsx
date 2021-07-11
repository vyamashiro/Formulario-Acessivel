/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import Navbar from './navbar/Navbar';
import SubmitButton from './submitButton/SubmitButton';
import GeneralData from './generalData/GeneralData';
import Preferencia from './preferencia/Preferencia';
import OpcaoEntrega from './opcaoEntrega/OpcaoEntrega';
import FormaPagamento from './formaPagamento/FormaPagamento';
import CommentBox from './commentBox/CommentBox';
import Footer from './footer/Footer';

function Form() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Formulário Acessível</h1>
        <form>
          <GeneralData />
          <Preferencia />
          <OpcaoEntrega />
          <FormaPagamento />
          <CommentBox />
          <SubmitButton />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Form;
