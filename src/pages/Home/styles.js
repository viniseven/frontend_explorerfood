import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    margin: 0 auto;

    max-width: 1120px;

    overflow-x: hidden;

    .text-header {
      background: ${({ theme }) => theme.GRADIENT.GRAD_200};

      border-radius: 3px;

      display: flex;

      margin: 4.4rem 1.6rem 6.2rem 3rem;

      height: 12rem;

      img {
        width: 45%;

        position: relative;
        right: 30px;
        bottom: 30px;

        height: 14.9rem;
        width: 19.1rem;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: clamp(1.125rem, -0.187rem + 5.598vw, 2.5rem);
          font-weight: 600;
          line-height: 25.2px;

          margin-bottom: 3px;
        }

        p {
          font-size: clamp(0.75rem, 0.5115rem + 1.0178vw, 1rem);
          font-weight: 400;
          font-family: ${({ theme }) => theme.FONTS.ROBOTO};
          line-height: 16px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .text-header {
      img {
        width: 28rem;
        height: 20rem;

        position: relative;
        top: 1px;
      }

      div {
        h1 {
          margin-bottom: 8px;
        }
      }
    }
  }
`;
