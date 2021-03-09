import styled from 'styled-components';

export const Container = styled.div`
    height:calc(100vh - 70px);
    overflow-y:scroll; 

    grid-area:CT;

    padding:25px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.primary };   

    ::-webkit-scrollbar{
        width:10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color:${ props => props.theme.colors.secondary };
        border-radius:10px;
    }

    ::-webkit-scrollbar-track{
        background-color:${ props => props.theme.colors.tertiary };
    }
`;