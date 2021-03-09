import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    const personsSelectOptions = [
        { value:'Victor', label:'Victor' },
        { value:'Carlos', label:'Carlos' },
        { value:'Marcos', label:'Marcos' }
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={ personsSelectOptions } />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;