import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 7rem;
    height: auto;

    opacity: 0.8;
  }

  .content-order {
    display: flex;
    align-items: center;
    gap: 5rem;

    max-width: 40rem;

    .content {
      h1 {
        font-size: 2rem;
        line-height: 32px;
      }

      p {
        font-size: 1.3rem;
      }
      button {
        color: ${({ theme }) => theme.COLORS.TOMATO_400};

        font-size: 1.2rem;
        font-weight: 400;
        line-height: 19.2px;
      }
    }

    .value {
      height: 100%;

      p {
        color: ${({ theme }) => theme.COLORS.CAKE};
      }
    }
  }
`;
