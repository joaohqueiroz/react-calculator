import styled from 'styled-components';

export const Btn = styled.button`
    font: 1.4rem;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`;   