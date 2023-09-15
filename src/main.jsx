import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import Provider from './context/Provider';

import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Provider>
          <Routes />
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
