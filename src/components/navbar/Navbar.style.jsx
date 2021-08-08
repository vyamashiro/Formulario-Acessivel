import styled from 'styled-components/macro';

export const Nav = styled.nav`
  font-size: ${({ fontSize }) => `${fontSize + 16}px`};
  margin: 10px 0 10px 0;
  text-align: center;
  width: 100%;
`;

export const NavItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 20px;
`;
