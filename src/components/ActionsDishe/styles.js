import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  .controls-quantity {
    display: flex;
    gap: 1.4rem;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.4rem;
      height: auto;

      fill: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    > button {
      padding: 1.2rem 2.4rem;
    }
  }
`;
