import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import listOfMonths from '../../utils/months';

import Expenses from '../../repositories/expenses';
import Gains from '../../repositories/gains';

import HappyIcon from '../../assets/images/happy.svg';
import SadIcon from '../../assets/images/sad.svg';

const Dashboard: React.FC = () => {
    const [ monthSelected, setMonthSelected ] = useState<number>(0);
    const [ yearSelected, setYearSelected ] = useState<number>(0);

    const monthOptions = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return{
                value: index + 1,
                label:month,
            }
        })
    }, [])        

    const yearsOptions = useMemo(() => {
        let uniqueYears: number[] = [];
        
        [...Expenses, ...Gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }
        })

        return uniqueYears.map(year => {
            return{
                value:year,
                label:year,
            }
        })
    }, [])

    function handleMonthSelected(month: string){
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    function handleYearSelected(year: string){
        try{
            const parseMonth = Number(year);
            setYearSelected(parseMonth);
        }catch{
            throw new Error('Invalid year value. Is accept integer numbers.');
        }
    }


    return(
        <Container>

            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput 
                    options={ monthOptions } 
                    defaultValue={ monthSelected }
                    onChange={ 
                        (e) => handleMonthSelected(e.target.value) 
                    }
                />
                <SelectInput 
                    options={ yearsOptions }
                    defaultValue={ yearSelected } 
                    onChange={ 
                        (e) => handleYearSelected(e.target.value) 
                    }
                />
            </ContentHeader>

            <Content>
            
                <WalletBox 
                    title="Saldo"
                    amount={ 150.00 }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox 
                    title="Entradas"
                    amount={ 5000.00 }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox 
                    title="Saídas"
                    amount={ 4850.00 }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox 
                    title="Muito bem!"
                    description="SUa carteira está positiva!"
                    footerText="Continue assim. Considere investir o seu saldo."
                    icon={ SadIcon }
                />

            </Content>

        </Container>
    );
}

export default Dashboard;