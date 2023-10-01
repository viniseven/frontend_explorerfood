import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    margin: 5.6rem 3.8rem 0 3.5rem;

    h1 {
      font-size: 3.2rem;
      font-weight: 500;

      line-height: 44.8px;
    }

    .payment {
      border: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};

      border-radius: 5px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-top: 3.2rem;

      .model-payment {
        display: flex;

        border-bottom: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};

        .model-pix {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 1rem;

          border-right: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};

          padding: 3.2rem;

          width: 50%;

          > button {
            display: flex;
            gap: 1rem;

            font-weight: 400;
            font-size: 1.6rem;
          }
        }

        .model-card {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 3.2rem;

          width: 50%;

          > button {
            display: flex;
            gap: 1rem;

            font-weight: 400;
            font-size: 1.6rem;
          }
        }
      }

      .content-data-payment {
        display: flex;
        justify-content: center;

        padding: 3.1rem 0 3.1rem;
      }
    }
  }
`;
