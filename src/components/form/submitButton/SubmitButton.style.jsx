import styled from 'styled-components/macro';

const Button = styled.button`
    background-color: #00afc4;
    border: 1px solid #00afc4;
    box-shadow: 2px 2px 2px black;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    font-size: ${({ fontSize }) => `${fontSize + 14}px`};
    height: 40px;
    margin-bottom: 20px;
    min-width: 150px;
    transition: filter 0.2s;
    width: 200px;
    &:hover {
        filter: brightness(90%);
    }
`;

export default Button;
