import React, { useState } from 'react';
import { 
        Container, 
        Header, 
        MenuContainer, 
        MenuItem,
        MenuButton,
        ToggleMenu,
        ThemeToggleFooter
} from './styles'; 

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import Toggle from '../Toogle';
import logo from '../../assets/images/logo.svg';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [ toggleMenuIsOpen, setToggleMenuIsOpened ] = useState(false);
    const [ darkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpen);
    }
    
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    } 

    return(
        <Container menuIsOpen={ toggleMenuIsOpen }>
            <Header>
                <ToggleMenu onClick={ handleToggleMenu }>
                    { toggleMenuIsOpen ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <img src={ logo } alt="My Wallet" />
                <h3>Minha Carteira</h3>
            </Header>

            <MenuContainer>

                <MenuItem to="/">
                    <MdDashboard />
                    Dashboard
                </MenuItem>
                
                <MenuItem to="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItem>
                
                <MenuItem to="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItem>
                
                <MenuButton onClick={ signOut }>
                    <MdExitToApp />
                    Sair
                </MenuButton>

            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={ toggleMenuIsOpen }>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={ darkTheme }
                    onChange={ handleChangeTheme }
                />
            </ThemeToggleFooter>

        </Container>
    );
}

export default Aside;