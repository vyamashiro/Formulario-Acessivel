/* eslint-disable jsx-a11y/no-access-key */
import React from 'react';
import * as Styled from './CommentBox.style';

const CommentBox = () => (
  <>
    <Styled.CommentBox>
      <legend>Deixe seu comentário</legend>
      <Styled.CommentTextArea placeholder="Comente" accessKey="3" />
    </Styled.CommentBox>
  </>
);

export default CommentBox;
