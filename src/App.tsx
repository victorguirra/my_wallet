import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';

import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import List from './pages/List';

import dark from './assets/styles/theme/dark';
import light from './assets/styles/theme/light';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={ dark }>
            <GlobalStyles />
            <Layout>
                {/* <Dashboard /> */}
                <List />
            </Layout>
        </ThemeProvider>
    )
}

export default App;