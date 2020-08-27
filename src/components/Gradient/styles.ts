import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 6.4rem;
  background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%)`};
`;
