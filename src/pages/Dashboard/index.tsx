import React, { useState, useMemo, useEffect } from 'react';
import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';

import listOfMonths from '../../utils/months';

import Gains from '../../repositories/gains';
import Expenses from '../../repositories/expenses';

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

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;
        
        const data = [
            {
                name:"Entradas",
                value:totalGains,
                percent:Number(percentGains.toFixed(1)),
                color:'#E44C4E'
            },
            {
                name:"Saídas",
                value:totalExpenses,
                percent:Number(percentExpenses.toFixed(1)),
                color:'#F7931B'
            }
        ]

        return data;

    }, [totalGains, totalExpenses])

    const historyData = useMemo(() => {
        return listOfMonths
        .map((_, month) => {
            
            let amountEntry = 0;
            Gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try{
                        amountEntry += Number(gain.amount);
                    }catch{
                        throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                    }
                }
            });

            let amountOutput = 0;
            Expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try{
                        amountOutput += Number(expense.amount);
                    }catch{
                        throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        })
        .filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);
        })
    }, [yearSelected])

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

                <PieChartBox data={ relationExpensesVersusGains }/>
                
                <HistoryBox 
                    data={ historyData }
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

            </Content>

        </Container>
    );
}

export default Dashboard;