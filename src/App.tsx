import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { PlaylistsProvider } from './context/PlaylistsContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlaylistsProvider>
        <GlobalStyle />
        <Navbar />
        <Home />
      </PlaylistsProvider>
    </ThemeProvider>
  );
};

export default App;
