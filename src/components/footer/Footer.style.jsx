import styled from 'styled-components/macro';

export const FooterContainer = styled.footer`
    align-items: flex-end;
    background-color: #e6e6dc;
    bottom: 0;
    display: flex;
    font-size: ${({ fontSize }) => `${fontSize + 16}px`};
    height: 90px;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 0 10px 0;
    text-align: center;
    width: 100%;

    a {
        color: black;
    }
`;

export const Address = styled.address`
    font-size: ${({ fontSize }) => `${fontSize + 12}px`};
`;
