import React, { useMemo, useState, useEffect } from 'react';
import { Filters } from './styles';

import { useColors } from '../../hooks/colors';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import listOfMonths from '../../utils/months'; 

import Gains from '../../repositories/gains';
import Expenses from '../../repositories/expenses';

interface IRouteParams{
    match:{
        params:{
            type: string;
        }
    }
}

interface IData{
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const { colors } = useColors();

    const [ data, setData ] = useState<IData[]>([]);

    const [ monthSelected, setMonthSelected ] = useState<number>(0);
    const [ yearSelected, setYearSelected ] = useState<number>(0);

    const [ frequencyFilterSelected, setFrequencyFilterSelected ] = useState(['recorrente', 'eventual']);

    const movementType = match.params.type;
    
    const pageData = useMemo(() => {
        
        return movementType === 'entry-balance' ? {
            title: 'Entradas',
            lineColor:colors.success,
            listData: Gains
        } : {
            title:'Saídas',
            lineColor:colors.warning,
            listData: Expenses
        };

    }, [movementType]);

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
        
        pageData.listData.forEach(item => {
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
    }, [pageData.listData])

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
    
    useEffect(() => {
        
        const filteredDate = pageData.listData.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected 
                && year === yearSelected 
                && frequencyFilterSelected.includes(item.frequency);
        });

        const formattedData = filteredDate.map(item => {
            return{
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? colors.success : colors.warning
            }
        })

        setData(formattedData);
    }, [pageData.listData, monthSelected, yearSelected, frequencyFilterSelected])

    function handleSelectedFrequency(frequency: string){
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency)
            setFrequencyFilterSelected(filtered);
        }else{
            setFrequencyFilterSelected((prev => [...prev, frequency]));
        }
    }

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
        <div>

            <ContentHeader 
                title={ pageData.title } 
                lineColor={ pageData.lineColor }
            >
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

            <Filters>
                <button 
                    type="button"
                    className={`
                        tag-filter 
                        tag-filter-recurrent 
                        ${ frequencyFilterSelected.includes('recorrente') && 'tag-actived' }
                    `}
                    onClick={ () => handleSelectedFrequency('recorrente') }
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className={`
                        tag-filter 
                        tag-filter-eventual 
                        ${ frequencyFilterSelected.includes('eventual') && 'tag-actived' }
                    `}
                    onClick={ () => handleSelectedFrequency('eventual') }
                >
                    Eventuais
                </button>
            </Filters>

            <div>
                    
                { data.map((item, index) => (
                    <HistoryFinanceCard
                        key={ index }
                        tagColor={ item.tagColor }
                        title={ item.description }
                        subtitle={ item.dateFormatted }
                        amount={ item.amountFormatted }
                    />
                ))}
                
            </div>

        </div>
    );
}

export default List;
