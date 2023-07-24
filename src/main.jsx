import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';
import { AddDishe } from './pages/AddDishe/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AddDishe />
    </ThemeProvider>
  </React.StrictMode>
);
