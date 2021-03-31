import styled from 'styled-components';

interface IProps {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Container = styled.div<IProps>`
  grid-column-start: span ${({ xl, span }) => xl || span || 1};

  @media screen and (max-width: 1400px) {
    grid-column-start: span ${({ lg, span }) => lg || span || 1};
  }

  @media screen and (max-width: 1200px) {
    grid-column-start: span ${({ lg, span }) => lg || span || 1};
  }

  @media screen and (max-width: 1100px) {
    grid-column-start: span ${({ md, span }) => md || span || 1};
  }

  @media screen and (max-width: 750px) {
    grid-column-start: span ${({ sm, span }) => sm || span || 1};
  }

  @media screen and (max-width: 350px) {
    grid-column-start: span ${({ xs, span }) => xs || span || 1};
  }
`;
