import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import LogoImg from '../../assets/images/logo.svg';

const Login: React.FC = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const { signIn } = useAuth();

    return(
        <Container>

            <Logo>

                <img src={ LogoImg } alt="Minha Carteira" />
                
                <h2>Minha Carteira</h2>

            </Logo>

            <Form onSubmit={ () => signIn(email, password) }>

                <FormTitle>Entrar</FormTitle>

                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    onChange={ (e) => setEmail(e.target.value) }
                    required 
                />
                <Input 
                    type="password" 
                    placeholder="Password"
                    onChange={ (e) => setPassword(e.target.value) } 
                    required 
                />

                <Button type="submit">Acessar</Button>


            </Form>

        </Container>
    );
}

export default Login;