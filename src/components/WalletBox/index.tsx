import React, { useMemo } from 'react';
import CountUp from 'react-countup';
import { Container } from './styles';

import dollarImg from '../../assets/images/dolar.svg'
import arrowUpImg from '../../assets/images/arrow-up.svg';
import arrowDownImg from '../../assets/images/arrow-down.svg';

interface IWalletBox {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBox> = ({
    title,
    amount,
    footerLabel,
    icon,
    color  
}) => {

    const selectedIcon = useMemo(() => {
        switch (icon){
            case 'dolar':
                return dollarImg
            
            case 'arrowUp':
                return arrowUpImg;
            
            case 'arrowDown':
                return arrowDownImg;

            default:
                return undefined;
        }
    }, [icon])

    return(
        <Container color={ color }>

            <span>{ title }</span>

            {/* <h1>{ amount }</h1> */}

            <h1>
                <CountUp 
                    end={ amount }
                    prefix={"RS"}
                    separator="."
                    decimal=","
                    decimals={ 2 }
                    duration={ 2 }
                />
            </h1>

            <small>{ footerLabel }</small>

            <img src={ selectedIcon } alt={ title } />

        </Container>
    )
}

export default WalletBox;