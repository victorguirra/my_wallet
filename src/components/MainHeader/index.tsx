import React, { useMemo } from 'react';
import { 
        Container, 
        Profile, 
} from './styles'; 

import Toggle from '../../components/Toogle';
import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        
        return emojis[index];
    }, [])

    return(
        <Container>

            <Toggle />

            <Profile>

                <h3>Olá, { emoji }</h3>

                <span>Victor Guirra</span>

            </Profile>

        </Container>
    );
}

export default MainHeader;