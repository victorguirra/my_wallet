import React from 'react';
import { 
        Container, 
        Header, 
        MenuContainer, 
        MenuItem,
        MenuButton
} from './styles'; 

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/images/logo.svg';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    
    return(
        <Container>
            <Header>
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

        </Container>
    );
}

export default Aside;