import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

interface IPieChartProps{
    data:{
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (    
    <Container>

        <SideLeft>

            <p>Relação</p>

            <LegendContainer>

                { data.map((indicator, index) => (
                    <Legend key={ index } color={ indicator.color }>
                        <div>{ indicator.percent }%</div>
                        <span>{ indicator.name }</span>
                    </Legend>
                ))}

            </LegendContainer>
        
        </SideLeft>

        <SideRight>

            <ResponsiveContainer>

                <PieChart>
                    <Pie data={ data } dataKey="percent">

                    { data.map((indicator, index) => (
                        <Cell key={ index } fill={ indicator.color } />
                    ))}

                    </Pie>
                </PieChart>

            </ResponsiveContainer>

        </SideRight>

    </Container>
)

export default PieChartBox;