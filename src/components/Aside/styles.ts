import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IContainerProps{
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps{
    menuIsOpen: boolean;
}

export const Container = styled.aside<IContainerProps>`
    grid-area:AS;

    background-color:${ props => props.theme.colors.secondary };

    padding-left:20px;
    border-right:1px solid ${ props => props.theme.colors.gray };

    position:relative;

    @media(max-width:800px){
        width:185px;

        padding-left:20px;
        position:fixed;
        z-index:2;

        height:${ props => props.menuIsOpen ? '100vh' : '70px' };
        overflow:hidden;

        ${props => !props.menuIsOpen && css`
            border:none;
            border-bottom:1px solid ${ props => props.theme.colors.gray };
        `};
    }
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

    @media(max-width:800px){
        img{
            display:none;
        }
        
        h3{
            display:none;
        }
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

export const MenuButton = styled.button`
    color:${ props =>  props.theme.colors.info };
    background-color:transparent;

    font-size:16px;    
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

export const ToggleMenu = styled.button`
    width:40px;
    height:40px;

    border-radius:7px;
    font-size:22px;

    color:${ props => props.theme.colors.white };
    background-color:${ props => props.theme.colors.warning };

    display:none;

    transition:opacity .3s;

    &:hover{
        opacity:.7;
    }
    
    @media(max-width:800px){
        display:flex;
        align-items:center;
        justify-content:center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display:none;
    position:absolute;
    bottom:80px;

    @media(max-width:800px){
        display:${ props => props.menuIsOpen ? 'flex' : 'none' };
    }
`;