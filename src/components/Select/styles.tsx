import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
`;

export const StyledSelect = styled.select`
  width: 250px;
  padding: 7px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.mediumDark};
  border: 0;
  color: ${({ theme }) => theme.colors.light};
`;
