import React, { useMemo, useState } from 'react';
import { 
        Container, 
        Profile, 
} from './styles'; 

import { useTheme } from '../../hooks/theme';

import Toggle from '../../components/Toogle';
import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [ darkTheme, setDarkTheme ] = useState(() => theme.title === 'dark' ? true : false );

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        
        return emojis[index];
    }, [])

    return(
        <Container>

            <Toggle
                labelLeft="Light" 
                labelRight="Dark"
                checked={ darkTheme }
                onChange={ handleChangeTheme }
            />

            <Profile>

                <h3>Olá, { emoji }</h3>

                <span>Victor Guirra</span>

            </Profile>

        </Container>
    );
}

export default MainHeader;