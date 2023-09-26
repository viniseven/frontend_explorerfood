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

      border-radius: 5px 5px 0 0;

      display: flex;
      justify-content: center;

      margin-top: 3.2rem;

      .model-pix {
        display: flex;
        align-items: center;
        justify-content: center;

        border-right: 1.5px solid ${({ theme }) => theme.COLORS.LIGHT_600};

        padding: 3.2rem;

        width: 50%;
      }

      .model-card {
        display: flex;
        align-items: center;

        padding: 3.2rem;

        width: 50%;
      }
    }
  }
`;
