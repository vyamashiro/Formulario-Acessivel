import styled from 'styled-components/macro';

export const Header = styled.header`
  align-content: center;
  background-color: #e6e6dc;
  display: grid;
  font-size: ${({ fontSize }) => `${fontSize + 16}px`};
  height: 40px;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  text-align: center;
  width: 100%;
`;

export const NavItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-right: 20px;
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #00afc4;
  border: 1px solid #00afc4;
  box-shadow: 2px 2px 2px black;
  color: #FFFFFF;
  margin-left: 5px;
  cursor: pointer;
  padding: 5px;
  &:hover {
        filter: brightness(90%);
    }
`;
