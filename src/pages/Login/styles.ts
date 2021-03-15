import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    
    background-color:${ props => props.theme.colors.primary };

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Logo = styled.div`
    display:flex;
    align-items:center;

    margin-bottom:30px;

    
    > p{
        color:${ props => props.theme.colors.white };
        margin-left:12px;
        font-size:22px;

        span{
            font-weight:bold;
        }
    }
`;

export const Form = styled.form`
    width:300px;
    height:300px;

    padding:30px;
    border-radius:10px;

    background-color:${ props => props.theme.colors.tertiary };
`;

export const FormTitle = styled.p`
    color:${ props => props.theme.colors.white };
    
    font-size:25px;

    margin-bottom:25px;

    &:after{
        content:'';
        display:block;
        width:55px;
        border-bottom:5px solid ${ props => props.theme.colors.warning };
        border-radius:10px;
    }
`;