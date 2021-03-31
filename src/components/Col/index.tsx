import React from 'react';

import { Container } from './styles';

interface IProps {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: React.ReactNode;
}

const Col: React.FC<IProps> = ({ children, span, xs, sm, md, lg, xl }) => {
  return (
    <Container span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      {children}
    </Container>
  );
};

export default Col;
