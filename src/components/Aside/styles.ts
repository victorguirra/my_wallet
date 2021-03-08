import styled from 'styled-components';

export const Container = styled.aside`
    grid-area:AS;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.secondary };
`;