/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import NavbarAcessibility from './components/navbarAcessibility/NavbarAcessibility';
import Navbar from './components/navbar/Navbar';
import Form from './components/Form';
import Footer from './components/footer/Footer';

function App() {
  const [fontSize, setFontSize] = useState(0);

  return (
    <>
      <NavbarAcessibility setFontSize={setFontSize} fontSize={fontSize} />
      <Navbar fontSize={fontSize} />
      <Form fontSize={fontSize} />
      <Footer />
    </>
  );
}

export default App;
