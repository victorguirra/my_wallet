import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Container, Content } from './styles';

import { useColors } from '../../hooks/colors';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import listOfMonths from '../../utils/months';

import Gains from '../../repositories/gains';
import Expenses from '../../repositories/expenses';

import HappyIcon from '../../assets/images/happy.svg';
import GrinningIcon from '../../assets/images/grinning.svg';
import SadIcon from '../../assets/images/sad.svg';

const Dashboard: React.FC = () => {
    const { colors } = useColors();

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

    const handleMonthSelected = useCallback((month: string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }, [])

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: 'Que triste!',
                description:"Neste mês, você gastou mais do que deveria.",
                footerText:"Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon:SadIcon
            }
        }else if(totalGains === 0 && totalExpenses === 0){
            return{
                title: 'Ops!',
                description:"Neste mês não há registros de entradas e saídas.",
                footerText:"Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon:GrinningIcon
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
    }, [totalBalance, totalGains, totalExpenses])

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name:"Entradas",
                value:totalGains,
                percent:percentGains ? percentGains : 0,
                color:colors.info
            },
            {
                name:"Saídas",
                value:totalExpenses,
                percent:percentExpenses ? percentExpenses : 0,
                color:colors.warning
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

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        Expenses
        .filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        })

        const total = amountRecurrent + amountEventual;

        const recurrentPercenct = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));
        
        return [
            {
                name:'Recorrentes',
                amount:amountRecurrent,
                percent: recurrentPercenct ? recurrentPercenct : 0,
                color:colors.info
            },
            {
                name:'Eventuais',
                amount:amountEventual,
                percent:eventualPercent ? eventualPercent : 0,
                color:colors.warning
            }
        ]

    },[monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        Gains
        .filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        })

        const total = amountRecurrent + amountEventual;
        
        const recurrentPercenct = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name:'Recorrentes',
                amount:amountRecurrent,
                percent:recurrentPercenct ? recurrentPercenct : 0,
                color: colors.info
            },
            {
                name:'Eventuais',
                amount:amountEventual,
                percent:eventualPercent ? eventualPercent : 0 ,
                color:colors.warning
            }
        ]

    },[monthSelected, yearSelected])

    const handleYearSelected = useCallback((year: string) => {
        try{
            const parseMonth = Number(year);
            setYearSelected(parseMonth);
        }catch{
            throw new Error('Invalid year value. Is accept integer numbers.');
        }
    },[])

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
    }, [yearsOptions, monthOptions])

    return(
        <Container>

            <ContentHeader title="Dashboard" lineColor={ colors.info }>
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
                    color={ totalBalance >= 0 ? colors.success : colors.info }
                />

                <WalletBox 
                    title="Entradas"
                    amount={ totalGains }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowUp"
                    color={ colors.info }
                />

                <WalletBox 
                    title="Saídas"
                    amount={ totalExpenses }
                    footerLabel="Atualizado com base nas entradas e saídas!"
                    icon="arrowDown"
                    color={ colors.warning }
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
                    lineColorAmountEntry={ colors.info }
                    lineColorAmountOutput={ colors.warning }
                />

                <BarChartBox 
                    title="Entradas"
                    data={ relationGainsRecurrentVersusEventual } 
                />
                
                <BarChartBox
                    title="Saídas"
                    data={ relationExpensevesRecurrentVersusEventual }
                />

            </Content>

        </Container>
    );
}

export default Dashboard;