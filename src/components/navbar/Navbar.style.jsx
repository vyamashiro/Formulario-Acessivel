import styled from 'styled-components/macro';

export const Header = styled.header`
  align-content: center;
  background-color: #e6e6dc;
  display: grid;
  font-size: 16px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  text-align: center;
  width: 100%;
`;

export const NavItem = styled.li`
  display: inline-block;
  /* font-size: 16px; */
  list-style: none;
  margin-right: 20px;
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #e6e6dc;
  border-radius: 50%;
  padding: 5px;
`;
