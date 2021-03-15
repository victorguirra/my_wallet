import React from 'react';
import { 
        Container,
        Profile, 
} from './styles'; 

import { BsFillBellFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';

import { useColors } from '../../hooks/colors';

import InputHeader from '../InputHeader';

const MainHeader: React.FC = () => {
    const { colors } = useColors();

    return(
        <Container>

            <InputHeader />

            <Profile>

                <button>
                    <BsFillBellFill size={ 25 } color={ colors.info } />
                </button>

                <button>
                    <AiFillSetting size={ 25 } color={ colors.info } />
                </button>

                <img 
                    src="https://avatars.githubusercontent.com/u/63051439?s=400&u=f0814cc2139714bd98f844764eeb7f013bacd8ce&v=4" 
                    alt="Victor Guirra" 
                />

            </Profile>

        </Container>
    );
}

export default MainHeader;