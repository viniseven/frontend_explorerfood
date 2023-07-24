import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: grid;

  main {
    margin: 0 auto;

    max-width: 100%;

    overflow-x: hidden;

    .text-header {
      background: ${({ theme }) => theme.GRADIENT.GRAD_200};

      border-radius: 3px;

      display: flex;

      margin: 4.4rem 1.6rem 6.2rem 3rem;

      height: 12rem;

      img {
        position: relative;
        right: 30px;
        bottom: 40px;

        width: 19.1rem;
        height: 15.9rem;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: clamp(1.125rem, -0.187rem + 5.598vw, 3.3rem);
          font-weight: 600;
          line-height: 25.2px;

          margin-bottom: 3px;
        }

        p {
          font-size: clamp(0.75rem, 0.5115rem + 1.0178vw, 1.6rem);
          font-weight: 400;
          font-family: ${({ theme }) => theme.FONTS.ROBOTO};
          line-height: 16px;
        }
      }
    }

    .carousel {
      margin-top: 2.3rem;
      overflow: hidden;

      position: relative;

      .controls-carousel {
        display: flex;
        justify-content: space-between;

        position: absolute;
        top: 40%;
        z-index: 1;

        width: 100%;
      }

      .cards {
        display: flex;
        gap: 1.6rem;

        .card {
          background-color: ${({ theme }) => theme.COLORS.DARK_300};

          display: flex;
          flex-direction: column;
          padding: 2.4rem;

          cursor: grabbing;

          border-radius: 8px;

          max-width: 30.4rem;

          position: relative;

          > button {
            width: fit-content;

            position: absolute;
            right: 1.6rem;
            top: 1.6rem;

            svg {
              width: 2.4rem;
              height: 2.4rem;
            }
          }

          .content-card {
            text-align: center;

            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;

            margin-bottom: 1.2rem;

            width: 21rem;

            img {
              width: clamp(5.5rem, 0.2519rem + 22.3919vw, 17.6rem);
              height: auto;
            }

            h1 {
              font-size: clamp(1.4rem, 0.2786rem + 2.5445vw, 2.4rem);
              font-weight: 500;
              line-height: 24px;
            }

            p {
              display: none;

              font-family: ${({ theme }) => theme.FONTS.ROBOTO};
              font-size: 1.4rem;
              font-weight: 400;
              line-height: 22.4px;

              word-wrap: break-word;
            }

            > span {
              font-family: ${({ theme }) => theme.FONTS.ROBOTO};
              font-size: clamp(1.6rem, 0.0458rem + 4.0712vw, 3.2rem);
              font-weight: 400;
              color: ${({ theme }) => theme.COLORS.CAKE};
            }
          }

          .btn-quantity-dishe {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.6rem;

            > div {
              display: flex;
              gap: 1.4rem;
              align-items: center;
            }

            svg {
              width: 2.4rem;
              height: 2.4rem;

              fill: ${({ theme }) => theme.COLORS.WHITE};
            }
          }

          > button:last-child {
            padding: 1.2rem 2.4rem;
          }
        }
      }
    }

    @media (min-width: 768px) {
      .text-header {
        height: 18rem;

        margin-top: 10rem;

        img {
          width: 32.2rem;
          height: 21.6rem;
        }

        div {
          h1 {
            margin-bottom: 8px;
          }
        }
      }

      @media (min-width: 1024px) {
        .text-header {
          height: 26rem;

          margin-top: 16rem;

          img {
            width: 63.2rem;
            height: 40.6rem;

            position: relative;
            bottom: 110px;
          }
        }
      }
    }
  }
`;
