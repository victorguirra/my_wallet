import React from 'react';
import { 
        Container, 
        Header, 
        MenuContainer, 
        MenuItem
} from './styles'; 

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md';

import logo from '../../assets/images/logo.svg';

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <img src={ logo } alt="My Wallet" />
                <h3>Minha Carteira</h3>
            </Header>

            <MenuContainer>

                <MenuItem to="/Dashboard">
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
                
                <MenuItem to="/close">
                    <MdExitToApp />
                    Sair
                </MenuItem>

            </MenuContainer>

        </Container>
    );
}

export default Aside;