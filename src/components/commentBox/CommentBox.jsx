/* eslint-disable jsx-a11y/no-access-key */
import React, { useState } from 'react';
import * as Styled from './CommentBox.style';

const CommentBox = () => {
  const [state, setState] = useState('');

  const handleChange = (event) => { setState(event.target.value); };

  return (
    <Styled.CommentBox role="group" aria-labelledby="grupo-comentario">
      <Styled.Legend id="grupo-comentario">Caso tenha alguma observação escreva abaixo</Styled.Legend>
      <Styled.CommentTextArea value={state} onChange={handleChange} placeholder="Escreva aqui seu comentário" accessKey="3" />
    </Styled.CommentBox>
  );
};

export default CommentBox;
