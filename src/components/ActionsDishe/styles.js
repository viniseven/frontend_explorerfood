import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.4rem;

  svg {
    width: 2.4rem;
    height: auto;

    fill: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
