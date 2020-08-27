import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10.4rem;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 100rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  > svg {
    max-width: 11.2rem;
    height: auto;
    margin-right: 2.4rem;
  }
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;

  display: flex;
  align-items: center;
`;
export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
