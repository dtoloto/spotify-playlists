import styled, { keyframes } from 'styled-components';

const load = keyframes`

  50%{
    opacity: 0.3;
  }
  0%, 100%{
    opacity: 1;
  }
`;

export const Skeleton = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.mediumDark};
  padding-bottom: 120%;
  animation: ${load} infinite ease-in 1.5s;
`;
