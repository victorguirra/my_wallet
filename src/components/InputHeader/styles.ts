import styled from 'styled-components';

export const Container = styled.div`
    height:40px;
    
    border:2px solid ${ props => props.theme.colors.warning };
    border-radius:10px;

    padding:0 10px;

    display:flex;
    align-items:center;

    input{
        height:100%;

        color:${ props => props.theme.colors.white };
        background-color:transparent;
    }

    button{
        height:100%;
        background-color:transparent;
        
        display:flex;
        align-items:center;
        justify-content:center;
    }
`;
