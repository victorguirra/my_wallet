import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from './hooks/theme';
import { ColorsProvider } from './hooks/colors';
import { AuthProvider } from './hooks/auth';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ColorsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);