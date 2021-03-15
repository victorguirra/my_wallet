import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles'; 

import { FiSearch } from 'react-icons/fi'

import { useColors } from '../../hooks/colors';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputHeader: React.FC<IInputProps> = ({ ...rest }) => {
    const { colors } = useColors();
    
    return(
        <Container>

            <input { ...rest }/>

            <button>
                <FiSearch size={ 30 } color={ colors.warning } />
            </button>

        </Container>
    )
}

export default InputHeader;