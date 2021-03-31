import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
