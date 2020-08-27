import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Header from './components/Header';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <div>Hello World</div>
  </ThemeProvider>
);

export default App;
