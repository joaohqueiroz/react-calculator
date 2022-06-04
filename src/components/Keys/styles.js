import styled from 'styled-components';

export const Wrapper = styled.div `
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 48px 48px 48px 48px 48px;
`;