import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [ logged, setLogged ] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my_wallet: logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if(email === 'usuario.teste@gmail.com' && password === '123456'){
            localStorage.setItem('@my_wallet: logged', 'true')
            setLogged(true);
        }else{
            alert('Senha ou usuário inválidos');
        }
    }

    const signOut = () => {
        const signOutConfirm = window.confirm('Deseja realmente sair?');
        
        if(signOutConfirm){
            localStorage.removeItem('@my_wallet: logged');
            setLogged(false);
        }
    }

    return(
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };