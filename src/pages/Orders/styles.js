import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    padding: 5.6rem 4rem 0;

    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: 500;
      font-size: 3.2rem;

      line-height: 44.8px;
    }

    .content-order {
      position: relative;

      > button {
        position: absolute;
        right: 1rem;

        width: 21rem;

        margin-top: 4.7rem;
      }

      .orders {
        margin-top: 2.7rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        > p {
          margin-top: 1.8rem;

          font-size: 2rem;
        }
      }
    }

    .content-payment {
      .payment {
        width: 35rem;

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

            #btn-advance-payment {
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

          padding: 5rem 2.7rem 5rem;

          .credit-card {
            .info-credit-card {
              display: flex;
              gap: 1.7rem;
              margin: 3.7rem 0 3.7rem;
            }
          }

          .info-status-payment {
            text-align: center;

            svg {
              fill: ${({ theme }) => theme.COLORS.LIGHT_400};
            }

            p {
              color: ${({ theme }) => theme.COLORS.LIGHT_400};

              font-weight: 700;
              font-size: 2rem;

              line-height: 3.2rem;

              margin-top: 2.4rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    main {
      margin-left: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 1440px) {
    #btn-advance-payment {
      display: none;
    }

    .content-payment {
      display: block !important;
    }

    main {
      width: 1360px;

      margin: 0 auto;
    }
  }
`;
