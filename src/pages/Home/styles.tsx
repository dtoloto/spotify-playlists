import styled from 'styled-components';

export const Container = styled.section`
  padding: calc(70px + 1rem) 1rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
`;
