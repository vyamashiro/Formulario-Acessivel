import styled from 'styled-components/macro';

export const GeneralDataContainer = styled.div`
    font-size: ${({ fontSize }) => `${fontSize + 16}px`};
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Legend = styled.legend`
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-size: ${({ fontSize }) => `${fontSize + 16}px`};
    margin-right: 100px;
`;

export const Input = styled.input`
    font-size: ${({ fontSize }) => `${fontSize + 14}px`};
    margin-left: 5px;
    height: 25px;
    text-indent: 5px;
    width: 250px;
    :focus {
        border: 2px solid red;
    }
`;
