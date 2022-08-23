import React from 'react';
import Button from './SubmitButton.style';

const SubmitButton = ({ fontSize }) => {
  const submitForm = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert('enviado');
  };

  return (
    <Button type="submit" fontSize={fontSize} onClick={submitForm}>Enviar formulário</Button>
  );
};

export default SubmitButton;
