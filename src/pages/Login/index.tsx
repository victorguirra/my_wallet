import React from 'react';
import { Container, Logo, Form, FormTitle } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/images/logo.svg';

const Login: React.FC = () => {
    return(
        <Container>

            <Logo>

                <img src={ LogoImg } alt="Minha Carteira" />
                
                <h2>Minha Carteira</h2>

            </Logo>

            <Form onSubmit={ () => {} }>

                <FormTitle>Entrar</FormTitle>

                <Input type="email" placeholder="E-mail" required />
                <Input type="password" placeholder="Password" required />

                <Button type="submit">Acessar</Button>


            </Form>

        </Container>
    );
}

export default Login;