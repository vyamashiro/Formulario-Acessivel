/* eslint-disable react/prop-types */
import React from 'react';
import Button from './SubmitButton.style';

const SubmitButton = ({ fontSize }) => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <Button type="submit" fontSize={fontSize} onClick={submitForm}>Enviar formulário</Button>
  );
};

export default SubmitButton;
