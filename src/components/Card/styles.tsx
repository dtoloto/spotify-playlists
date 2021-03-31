import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.mediumDark};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightDark};
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: normal;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
