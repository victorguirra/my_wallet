import React, { useState } from 'react';
import { Container, ToggleSelector } from './styles';

const Toogle: React.FC = () => {
    const [ isToggleChecked, setIsToggleChecked ] = useState(true);

    return (
        <Container>
            <span>Light</span>

            <ToggleSelector
                checked={ isToggleChecked }
                onChange={ () => setIsToggleChecked(!isToggleChecked) }
                checkedIcon={ false }
                uncheckedIcon={ false }
            />

            <span>Dark</span>
        </Container>
    )
}
export default Toogle;