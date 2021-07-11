/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import Navbar from './navbar/Navbar';
import SubmitButton from './submitButton/SubmitButton';
import GeneralData from './generalData/GeneralData';
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

          <div>
            <p>Suas preferências</p>

            <legend>Qual dos tipos de comida abaixo você gosta ?</legend>
            <label htmlFor="Mexicana">
              <input type="checkbox" id="Mexicana" accessKey="2" />
              Mexicana
            </label>
            <label htmlFor="Japonesa">
              <input type="checkbox" id="Japonesa" />
              Japonesa
            </label>
            <label htmlFor="Italiana">
              <input type="checkbox" id="Italiana" />
              Italiana
            </label>
            <label htmlFor="Brasileira">
              <input type="checkbox" id="Brasileira" />
              Brasileira
            </label>
          </div>

          <div>
            <label htmlFor="opcaoEntrega">
              Opção de entrega:
              <label htmlFor="opçãoLocal">
                <input type="radio" id="opçãoLocal" name="opcaoEntrega" value="Local" />
                Local
              </label>
              <label htmlFor="opçãoDomicilio">
                <input type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
                Domicílio
              </label>
            </label>
          </div>

          <div>
            <label htmlFor="formaPagamento">
              Forma de pagamento:
              <select>
                <option name="formaPagamento" value="dinheiro">dinheiro</option>
                <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
                <option name="formaPagamento" value="cartão de débito">cartão de débito</option>
              </select>
            </label>

          </div>

          <CommentBox />
          <SubmitButton />

        </form>
      </main>
      <Footer />
    </>
  );
}

export default Form;
