import styled from 'styled-components';

/* 
* Layout
* MH = Main Header
* AS = Aside
* CT = Content
*/

export const Container = styled.div`
    height:100vh;

    background-color:${ props => props.theme.colors.secondary };

    display:grid;
    grid-template-columns:250px auto;
    grid-template-rows:70px auto;

    grid-template-areas:
    'AS MH'
    'AS CT';

    min-width:315px;

    @media(max-width:800px){
        grid-template-columns:100%;
        grid-template-rows:70px auto;

        grid-template-areas:
        'MH'
        'CT';
    }
`;