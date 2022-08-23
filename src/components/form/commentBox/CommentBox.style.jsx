import styled from 'styled-components/macro';

export const CommentBox = styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Legend = styled.legend`
    font-size: ${({ fontSize }) => `${fontSize + 16}px`};
    margin-bottom: 10px;
`;

export const CommentTextArea = styled.textarea`
    font-size: ${({ fontSize }) => `${fontSize + 14}px`};
    height: 100px;
    margin-right: 5px;
    padding: 10px;
    width: 745px;
`;
