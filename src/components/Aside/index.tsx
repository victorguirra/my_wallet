import React, { useState } from 'react';
import { 
        Container, 
        Header, 
        MenuContainer, 
        MenuItem,
        MenuButton,
        ToggleMenu,

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
                    { toggleMenuIsOpen ? <MdClose color="#fff"/> : <MdMenu color="#fff" /> }
                </ToggleMenu>

                <p><span>$</span> Minha Carteira</p>
            </Header>

            <MenuContainer>

                <MenuItem to="/">
                    <MdDashboard  size={ 35 }/>
                </MenuItem>
                
                <MenuItem to="/list/entry-balance">
                    <MdArrowUpward size={ 35 } />
                </MenuItem>
                
                <MenuItem to="/list/exit-balance">
                    <MdArrowDownward size={ 35 } />
                </MenuItem>
                
                <MenuButton onClick={ signOut }>
                    <MdExitToApp size={ 35 } />
                </MenuButton>

            </MenuContainer>

            
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={ darkTheme }
                onChange={ handleChangeTheme }
            />
            

        </Container>
    );
}

export default Aside;