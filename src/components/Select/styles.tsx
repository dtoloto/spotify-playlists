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

export const Content = styled.label`
  position: relative;
`;

export const ArrowDown = styled.div`
  background: ${({ theme }) => theme.colors.mediumDark};
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.light};
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledSelect = styled.select`
  width: 250px;
  padding: 7px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.mediumDark};
  border: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light};
  -webkit-appearance: none;
`;
