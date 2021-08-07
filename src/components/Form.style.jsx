import styled from 'styled-components/macro';

export const MainTitle = styled.h1`
  font-size: ${({ fontSize }) => `${fontSize + 24}px`};
`;

export const Main = styled.main`
  background-color: #004271;
  color: white;
  display: flex;
  justify-content: center;
`;
