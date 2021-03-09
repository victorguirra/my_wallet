import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    
    margin-bottom:25px;

    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const TitleContainer = styled.div`
    > h2{
        color:${ props => props.theme.colors.white };

        &::after{
            content:'';
            display:block;
            width:55px;
            border-bottom:10px solid ${ props => props.theme.colors.warning };
        }
    }
`;

export const Controllers = styled.div``;