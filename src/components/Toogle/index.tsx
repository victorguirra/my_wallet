import React from 'react';
import { Container, ToggleSelector } from './styles';

interface IToggleProps{
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
} 

const Toogle: React.FC<IToggleProps> = ({
    labelLeft, labelRight, checked, onChange
}) => {
    
    return (
        <Container>
            <span>{ labelLeft }</span>

            <ToggleSelector
                checked={ checked }
                onChange={ onChange }
                checkedIcon={ false }
                uncheckedIcon={ false }
            />

            <span>{ labelRight }</span>
        </Container>
    )
}
export default Toogle;