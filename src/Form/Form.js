/* eslint-disable jsx-a11y/no-access-key */

function Form() {
  return (
    <>
      <h1>Formulário</h1>
      <h2 tabindex="3" accessKey="1">Formulário modelo para estudos de acessibilidade</h2>
  
        <form>

          <fieldset>
            <legend>Title</legend>
            <label for="form_name" tabindex="1">Nome:</label>
            <input type="text" id="form_name" name="form_name" placeholder="escreva o seu nome" />

            <label for="form_surname" tabindex="2">Sobrenome:</label>
            <input type="text" id="form_surname" surname="form_surname" placeholder="escreva o seu sobrenome" />

            <textarea></textarea>
          </fieldset>
          
      <h2>Atalho 2</h2>

          <fieldset>
            <legend>Comente</legend>
            <textarea placeholder="Comente" rows="7" cols="150" accessKey="2"></textarea>
          </fieldset>

          <select>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option selected value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>

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


        </form>
  

    </>
  );
}

export default Form;
