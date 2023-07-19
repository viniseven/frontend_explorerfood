import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    .text-header {
      background: ${({ theme }) => theme.GRADIENT.GRAD_200};

      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      border-radius: 3px;

      margin: 4.4rem 1.6rem 6.2rem 3rem;

      display: flex;
      align-items: center;

      height: 12rem;

      img {
        position: relative;
        right: 3rem;
        bottom: 2rem;
      }

      div {
        position: relative;
        right: 6rem;

        h1 {
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 25.2px;

          white-space: nowrap;
        }

        p {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 16.8px;
        }
      }
    }
  }
`;
