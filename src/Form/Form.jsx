/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import Navbar from './navbar/Navbar';

function Form() {
  return (
    <>
      <Navbar />
      <h1>Formulário Acessível</h1>

      <form>
        <p accessKey="1">Dados Gerais</p>

        <fieldset>
          <legend>Title</legend>
          <label htmlFor="form_name">
            <input type="text" id="form_name" name="form_name" placeholder="escreva o seu nome" />
            Nome:
          </label>

          <label htmlFor="form_surname">
            <input type="text" id="form_surname" surname="form_surname" placeholder="escreva o seu sobrenome" />
            Sobrenome:
          </label>

        </fieldset>

        <p accessKey="2">Suas preferências</p>

        <select>
          <option value="laranja">Laranja</option>
          <option value="limao">Limão</option>
          <option value="coco">Coco</option>
          <option value="manga">Manga</option>
        </select>

        <fieldset id="sexo" required>
          <legend>Sexo</legend>
          <label htmlFor="SexoFem">
            <input type="radio" id="SexoFem" name="Sexo" />
            Feminino
          </label>
          <label htmlFor="SexoMasc">
            <input type="radio" id="SexoMasc" name="Sexo" />
            Masculino
          </label>
          <label htmlFor="SexoOutro">
            <input type="radio" id="SexoOutro" name="Sexo" />
            Outro
          </label>
        </fieldset>

        <fieldset>
          <legend>Qual sua comida favorita ?</legend>
          <label htmlFor="Mexicana">
            <input type="checkbox" id="Mexicana" />
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
