import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    transition: .2s;
  }

  body{
    background: ${theme.colors.dark};
  }

  a{
    transition: .2s;
    text-decoration: none;
  }
`;
