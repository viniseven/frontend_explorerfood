import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: grid;

  main {
    padding: 3.6rem 5.6rem;

    text-align: center;

    margin: 0 auto;

    max-width: 100%;

    img {
      margin-top: 1.6rem;

      min-width: 26rem;
      min-height: 26rem;
    }

    h1 {
      font-size: clamp(2.7rem, 0.9122rem + 3.3079vw, 4rem);
      font-weight: 500;

      margin-top: 1.6rem;
    }

    p {
      margin-top: 2.4rem;

      font-weight: 400;

      font-size: clamp(1.6rem, 0.5229rem + 2.0356vw, 2.4rem);
    }

    .tag-ingredients {
      margin: 2.8rem 0 4.8rem;

      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .controls-dishe {
      .choose-dishe {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        justify-content: center;

        div {
          display: flex;
          gap: 15px;
          align-items: center;

          svg {
            width: 2.7rem;
          }
        }

        > button {
          font-size: 9.4px;

          padding: 8px 16px;

          border-radius: 5px;

          background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

          svg {
            margin-right: 5px;

            width: 2.1rem;
            height: 2.1rem;
          }
        }
      }

      .edit-dishe {
        button {
          max-width: 32.2rem;
        }
      }
    }

    @media (min-width: 768px) {
      .content-details-dishe {
        display: flex;
        gap: 4.7rem;

        > div {
          text-align: start;
        }

        .controls-dishe {
          .choose-dishe {
            justify-content: flex-start;
          }
        }
      }
    }

    @media (min-width: 1024px) {
      .tag-ingredients {
        display: flex;
        gap: 1.2rem;
      }
    }
  }
`;
