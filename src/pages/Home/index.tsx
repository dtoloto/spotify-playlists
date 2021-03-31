import React from 'react';
import Filter from '../../components/Filter';
import List from '../../components/List';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Filter />
      <List />
    </Container>
  );
};

export default Home;
