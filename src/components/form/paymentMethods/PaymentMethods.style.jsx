import styled from 'styled-components/macro';

export const Label = styled.label`
  font-size: ${({ fontSize }) => `${fontSize + 16}px`};
  margin-bottom: 20px;
`;

export const SelectBox = styled.select`
  font-size: ${({ fontSize }) => `${fontSize + 14}px`};
  margin-left: 10px;
  margin-top: 20px;
  height: 25px;
  width: 150px;
`;
