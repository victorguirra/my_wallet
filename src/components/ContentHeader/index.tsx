import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
    return(
        <Container>

            <TitleContainer>
                <h2>Título</h2>      
            </TitleContainer>

            <Controllers>
                <button>Botão 1</button>
                <button>Botão 2</button>
            </Controllers>

        </Container>
    )
}

export default ContentHeader;