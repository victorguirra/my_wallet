import styled from 'styled-components';

export const Container = styled.div`
    width:48%;
    height:260px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.tertiary };

    border-radius:7px;

    margin:10px 0;
    padding:30px 20px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;

    header h1{
        display:flex;
        align-items:center;
    }

    header h1 img{
        width:35px;
        margin-left:15px;
    }

    header p{
        font-size:18px;
    }
`;