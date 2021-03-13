import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';

import Routes from './routes';

import dark from './assets/styles/theme/dark';
import light from './assets/styles/theme/light';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={ light }>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;