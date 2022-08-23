/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from 'react';
import * as Styled from './GeneralData.style';

const GeneralData = ({ fontSize }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleChangeName = (event) => { setName(event.target.value); };
  const handleChangeSurname = (event) => { setSurname(event.target.value); };

  return (
    <>
      <Styled.GeneralDataContainer>
        <Styled.Label fontSize={fontSize} htmlFor="form_name" accessKey="1">
          Nome:
          <Styled.Input
            fontSize={fontSize}
            type="text"
            value={name}
            onChange={handleChangeName}
            id="form_name"
            name="form_name"
            placeholder="Escreva o seu nome"
          />
        </Styled.Label>

        <Styled.Label fontSize={fontSize} htmlFor="form_surname">
          Sobrenome:
          <Styled.Input
            fontSize={fontSize}
            type="text"
            value={surname}
            onChange={handleChangeSurname}
            id="form_surname"
            surname="form_surname"
            placeholder="Escreva o seu sobrenome"
          />
        </Styled.Label>
      </Styled.GeneralDataContainer>
    </>
  );
};

export default GeneralData;
