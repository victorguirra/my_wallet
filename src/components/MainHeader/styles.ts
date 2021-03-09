import styled from 'styled-components';

export const Container = styled.header`
    grid-area:MH;
    
    padding:0 10px;
    background-color:${ props => props.theme.colors.secondary };

    border-bottom: 1px solid ${ props => props.theme.colors.gray };

    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Profile = styled.div`
    color:${ props => props.theme.colors.white };
`;