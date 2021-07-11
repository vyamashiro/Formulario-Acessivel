import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Form />
  </React.StrictMode>,
  document.getElementById('root'),
);
