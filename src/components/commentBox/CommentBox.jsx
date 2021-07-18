/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './CommentBox.style';

const CommentBox = () => (
  <Styled.CommentBox role="group" aria-labelledby="grupo-comentario">
    <Styled.Legend id="grupo-comentario">Caso tenha alguma observação escreva abaixo</Styled.Legend>
    <Styled.CommentTextArea placeholder="Escreva aqui seu comentário" accessKey="3" />
  </Styled.CommentBox>
);

export default CommentBox;
