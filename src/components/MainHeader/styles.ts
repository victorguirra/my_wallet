import styled from 'styled-components';

export const Container = styled.header`
    grid-area:MH;
    
    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.secondary };
`;