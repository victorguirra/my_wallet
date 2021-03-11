import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
    grid-area:AS;

    background-color:${ props => props.theme.colors.secondary };

    padding-left:20px;
    border-right:1px solid ${ props => props.theme.colors.gray };
`;

export const Header = styled.header`
    height:70px;
    
    display:flex;
    align-items:center;

    img{
        width:40px;
        height:40px;
    }

    h3{
        color:${ props =>  props.theme.colors.white };
        margin-left:12px;
    }
`;

export const MenuContainer = styled.nav`
    margin-top:50px;

    display:flex;
    flex-direction:column;
`;

export const MenuItem = styled(Link)`
    color:${ props =>  props.theme.colors.info };
    text-decoration:none;

    margin:7px 0;

    display:flex;
    align-items:center;

    transition:opacity .3s;

    &:hover{
        opacity:.7;
    }

    > svg{
        font-size:22px;
        margin-right:10px;
    }
`;