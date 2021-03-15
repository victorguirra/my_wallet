import React, { createContext, useContext } from 'react';

import { useTheme } from './theme';

interface IColors{
    title:string;

    colors:{
        primary:string;
        secondary:string;
        tertiary: string;

        white:string;
        black:string;
        gray:string;

        success:string;
        info:string;
        warning:string;
    }
}

const ColorsContext = createContext<IColors>({} as IColors);

const ColorsProvider: React.FC = ({ children }) => {
    const { theme } = useTheme();

    return(
        <ColorsContext.Provider value={ theme }>
            { children }
        </ColorsContext.Provider>
    )
}

function useColors(): IColors{
    const context = useContext(ColorsContext);

    return context;
}

export { ColorsProvider, useColors };