import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Logo } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

export default Navbar;
