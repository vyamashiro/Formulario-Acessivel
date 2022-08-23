import styled from 'styled-components/macro';

export const ContainerPreferencia = styled.div`
  margin-top: 20px;
  `;

export const Legend = styled.legend`
  font-size: ${({ fontSize }) => `${fontSize + 16}px`};
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: ${({ fontSize }) => `${fontSize + 16}px`};
  margin-right: 20px;
`;

export const InputCheckbox = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;
