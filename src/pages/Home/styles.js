import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 0 auto;

  max-width: 1122px;

  .card-title {
    background: ${({ theme }) => theme.GRADIENT.GRAD_200};

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 12rem;

    position: relative;

    margin: 4.4rem 1.6rem 6.2rem 3rem;

    img {
      width: 191px;
      height: 149px;

      position: absolute;
      bottom: 3px;
      left: -35px;
    }
  }

  .content-card-title {
    width: 60%;

    h1 {
      font-size: 1.8rem;
      font-weight: 500;

      white-space: nowrap;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      line-height: 16.8px;
    }
  }

  main {
    padding: 0 2.4rem;

    .carousel {
      width: 100%;

      overflow-y: auto;
    }

    .cards {
      display: flex;
      gap: 1.6rem;
      width: 100%;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      text-align: center;

      position: relative;

      padding: 2.4rem;

      h1 {
        font-size: 1.4rem;
      }

      p {
        display: none;
      }

      span {
        color: ${({ theme }) => theme.COLORS.CAKE};
      }

      .favorite {
        position: absolute;
        right: 0;
        border: 1px solid red;
      }

      .btn-quantity {
        display: flex;
        gap: 1.4rem;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (min-width: 768px) {
    .card-title {
      height: 16rem;

      img {
        width: 25rem;
        height: 30rem;

        bottom: -50px;
        left: -20px;
      }

      .content-card-title {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 16.4rem 12.4rem 4.6rem;

    .card-title {
      height: 26rem;

      img {
        width: 50%;
        height: 40rem;

        left: -70px;
        bottom: -50px;
      }

      .content-card-title {
        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
