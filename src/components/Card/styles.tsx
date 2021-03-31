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
    .playbutton {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const PlayButton = styled.div`
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  transform: translateY(8px);
  opacity: 0;
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
