import React from 'react';
import * as Styled from './Footer.style';

const Footer = ({ fontSize }) => (
  <Styled.FooterContainer fontSize={fontSize}>
    <div>
      <Styled.Address fontSize={fontSize}>
        codado por:
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/vyamashiro">Victor Katsuo Yamashiro</a>
      </Styled.Address>
    </div>
  </Styled.FooterContainer>
);

export default Footer;
