/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import Navbar from './navbar/Navbar';

function Form() {
  return (
    <>
      <Navbar />
      <h1>Formulário Acessível</h1>

      <form>
        <p>Dados Gerais</p>

        <fieldset>
          <legend>Title</legend>
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

        <fieldset id="opcaoEntrega" required>
          <legend>Opção de entrega</legend>
          <label htmlFor="opçãoLocal">
            <input type="radio" id="opçãoLocal" name="opcaoEntrega" value="Local" />
            Local
          </label>
          <label htmlFor="opçãoDomicilio">
            <input type="radio" id="opçãoDomicilio" name="opcaoEntrega" value="Domicilio" />
            Domicílio
          </label>
        </fieldset>

        <fieldset>
          <legend>Forma de pagamento</legend>
          <select>
            <option value="dinheiro">dinheiro</option>
            <option value="cartão de crédito">cartão de crédito</option>
            <option value="cartão de débito">cartão de débito</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Deixe seu comentário</legend>
          <textarea placeholder="Comente" rows="5" cols="150" accessKey="3" />
        </fieldset>

        <button type="submit">Enviar formulário</button>

      </form>
    </>
  );
}

export default Form;
