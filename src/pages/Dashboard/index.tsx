import React, { useState, useMemo, useEffect } from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';

import listOfMonths from '../../utils/months';

import Expenses from '../../repositories/expenses';
import Gains from '../../repositories/gains';

import HappyIcon from '../../assets/images/happy.svg';
import GrinningIcon from '../../assets/images/grinning.svg';
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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        Expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! AMount must be number.')
                }
            }
        })

        return total;
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total: number = 0;

        Gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! AMount must be number.')
                }
            }
        })
        
        return total;
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]) 

    function handleMonthSelected(month: string){
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: 'Que triste!',
                description:"Neste mês, você gastou mais do que deveria.",
                footerText:"Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon:SadIcon
            }
        }else if(totalBalance === 0){
            return{
                title: 'Ufaa!',
                description:"Neste mês, você gastou exatamente o que ganhou.",
                footerText:"Tome cuidado. No próximo tente poupar o seu dinheiro",
                icon:GrinningIcon
            }
        }else{
            return{
                title: 'Muito bem!',
                description:"Sua carteira está positiva!",
                footerText:"Continue assim. Considere investir o seu saldo.",
                icon:HappyIcon
            }
        }
    }, [totalBalance])

    function handleYearSelected(year: string){
        try{
            const parseMonth = Number(year);
            setYearSelected(parseMonth);
        }catch{
            throw new Error('Invalid year value. Is accept integer numbers.');
        }
    }

    useEffect(() => {
        yearsOptions.map((item, index) => {
            if(index === 0){
                setYearSelected(item.value);
            }
        })

        monthOptions.map((item, index) => {
            if(index === 0){
                setMonthSelected(item.value);
            }
        })
    }, [])


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
                    amount={ totalBalance }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox 
                    title="Entradas"
                    amount={ totalGains }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox 
                    title="Saídas"
                    amount={ totalExpenses }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox 
                    title={ message.title }
                    description={ message.description }
                    footerText={ message.footerText }
                    icon={ message.icon }
                />

                <PieChart />

            </Content>

        </Container>
    );
}

export default Dashboard;