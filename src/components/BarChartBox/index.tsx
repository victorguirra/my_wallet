import React from 'react';
import { 
    Container, 
    LeftSide,
    LegendContainer,
    Legend, 
    RightSide
} from './styles';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartBoxProps{
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
    return(
        <Container>

            <LeftSide>
                
                <h2>{ title }</h2>

                <LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Legend key={ index } color={ indicator.color } >
                                <div>{ indicator.percent }%</div>
                                <span>{ indicator.name }</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>

            </LeftSide>

            <RightSide>
                <ResponsiveContainer>
                    <BarChart data={ data }>
                        <Bar dataKey="amount" name="Valor">
                            { data.map((indicator, index) => (
                                <Cell 
                                    key={ index }
                                    fill={ indicator.color }
                                    cursor="pointer"
                                />
                            ))}
                        </Bar>
                        <Tooltip
                            cursor={{ fill: 'none' }}
                            formatter={ (value: number) => formatCurrency(value) }
                        />
                    </BarChart>
                </ResponsiveContainer>
            </RightSide>

        </Container>
    )   
}

export default BarChartBox;