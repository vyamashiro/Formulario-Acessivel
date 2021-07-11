/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import Navbar from './navbar/Navbar';
import SubmitButton from './submitButton/SubmitButton';
import Footer from './footer/Footer';

function Form() {
  return (
    <>
      <Navbar />
      <main>

        <h1>Formulário Acessível</h1>

        <form>
          <fieldset>
            <legend>Dados gerais</legend>
            <label htmlFor="form_name" accessKey="1">
              Nome:
              <input type="text" id="form_name" name="form_name" placeholder="escreva o seu nome" />
            </label>

            <label htmlFor="form_surname">
              Sobrenome:
              <input type="text" id="form_surname" surname="form_surname" placeholder="escreva o seu sobrenome" />
            </label>

          </fieldset>

          <p>Suas preferências</p>

          <fieldset>
            <legend>Qual dos tipos de comida abaixo você gosta ?</legend>
            <label htmlFor="Mexicana">
              <input type="checkbox" id="Mexicana" accessKey="2" />
              Mexicana
            </label>
            <br />
            <label htmlFor="Japonesa">
              <input type="checkbox" id="Japonesa" />
              Japonesa
            </label>
            <br />
            <label htmlFor="Italiana">
              <input type="checkbox" id="Italiana" />
              Italiana
            </label>
            <br />
            <label htmlFor="Brasileira">
              <input type="checkbox" id="Brasileira" />
              Brasileira
            </label>
            <br />
          </fieldset>

          <fieldset id="opcaoEntrega">
            <legend>Opção de entrega</legend>
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
          </fieldset>

          <fieldset>
            <legend>Forma de pagamento</legend>
            <label htmlFor="formaPagamento">
              Forma de pagamento:
              <select>
                <option name="formaPagamento" value="dinheiro">dinheiro</option>
                <option name="formaPagamento" value="cartão de crédito">cartão de crédito</option>
                <option name="formaPagamento" value="cartão de débito">cartão de débito</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Deixe seu comentário</legend>
            <textarea placeholder="Comente" accessKey="3" />
          </fieldset>

          <SubmitButton />

        </form>
      </main>
      <Footer />
    </>
  );
}

export default Form;
