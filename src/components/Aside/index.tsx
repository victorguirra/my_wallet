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

                <MenuItem href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItem>
                
                <MenuItem href="#">
                    <MdArrowUpward />
                    Entradas
                </MenuItem>
                
                <MenuItem href="#">
                    <MdArrowDownward />
                    Saídas
                </MenuItem>
                
                <MenuItem href="#">
                    <MdExitToApp />
                    Sair
                </MenuItem>

            </MenuContainer>

        </Container>
    );
}

export default Aside;