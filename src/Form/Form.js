/* eslint-disable jsx-a11y/no-access-key */
import Navbar from './navbar/Navbar'

function Form() {
  return (
    <>
      <Navbar />
        <h1>Formulário Acessível</h1>
  


        <form>
        <p tabindex="3" accessKey="1">Dados Gerais</p>

          <fieldset>
            <legend>Title</legend>
            <label for="form_name" tabindex="1">Nome:</label>
            <input type="text" id="form_name" name="form_name" placeholder="escreva o seu nome" />

            <label for="form_surname" tabindex="2">Sobrenome:</label>
            <input type="text" id="form_surname" surname="form_surname" placeholder="escreva o seu sobrenome" />

          </fieldset>
      
      <p tabindex="5" accessKey="2">Suas preferências</p>

        <select>
          <option value="laranja">Laranja</option>
          <option value="limao">Limão</option>
          <option value="coco">Coco</option>
          <option value="manga">Manga</option>
        </select>

        <fieldset id="sexo" required>
          <legend>Sexo</legend>
          <input type="radio" id="SexoFem" name="Sexo" />
          <label for="SexoFem">Feminino</label>
          <input type="radio" id="SexoMasc" name="Sexo" />
          <label for="SexoMasc">Masculino</label>
          <input type="radio" id="SexoOutro" name="Sexo" />
          <label for="SexoOutro">Outro</label>
        </fieldset>

        <fieldset>
          <legend>Qual sua comida favorita ?</legend>
          <input type="checkbox" id="Mexicana" />
          <label for="Mexicana">Mexicana</label>
          <br />
          <input type="checkbox" id="Japonesa" />
          <label for="Japonesa">Japonesa</label>
          <br />
          <input type="checkbox" id="Italiana" />
          <label for="Italiana">Italiana</label>
          <br />
          <input type="checkbox" id="Brasileira" />
          <label for="Brasileira">Brasileira</label>
          
        </fieldset>

        <fieldset>
          <legend>Deixe seu comentário</legend>
          <textarea placeholder="Comente" rows="5" cols="150" accessKey="3"></textarea>
        </fieldset>

          <button>Enviar formulário</button>

        </form>
    </>
  );
}

export default Form;
