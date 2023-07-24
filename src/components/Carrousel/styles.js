import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  position: relative;

  .cards {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    margin-top: 2.4rem;

    overflow-x: scroll;

    scroll-behavior: smooth;

    position: relative;
  }

  .card {
    display: flex;
    flex-direction: column;
    flex: none;

    position: relative;

    padding: 2.4rem;

    cursor: grabbing;

    max-width: 30.4rem;

    > button {
      width: fit-content;

      position: absolute;
      right: 2.4rem;

      svg {
        width: 2.4rem;
        height: auto;
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      align-items: center;

      text-align: center;

      img {
        width: 8.8rem;
        height: auto;
      }

      h1 {
        font-size: clamp(1.4rem, 0.2786rem + 2.5445vw, 2.4rem);
      }

      p {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 22.4px;

        display: none;
      }

      > span {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: clamp(1.6rem, 0.0458rem + 4.0712vw, 3.2rem);
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.CAKE};
      }

      .choose-dishe {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.6rem;

        width: 100%;

        div {
          display: flex;
          gap: 1.4rem;

          svg {
            width: 2.4rem;
            height: 2.4rem;

            fill: ${({ theme }) => theme.COLORS.WHITE};
          }
        }
      }
    }
  }

  .buttons-carousel {
    position: relative;
    bottom: 18rem;

    justify-content: space-between;
    align-items: center;

    width: 100%;

    display: none;

    .btn-left,
    .btn-right {
      display: flex;
      flex-direction: row;

      svg {
        width: 4rem;
        height: auto;
      }
    }

    .btn-left {
      justify-content: flex-start;
    }

    .btn-right {
      justify-content: flex-end;
    }
  }

  @media (min-width: 768px) {
    .cards {
      .card {
        .card-content {
          img {
            width: 17.8rem;
          }

          p {
            display: block;
          }

          .choose-dishe {
            flex-direction: row;
            justify-content: center;

            > button {
              width: 9.2rem;
              height: 4.8rem;
            }
          }
        }
      }
    }

    .buttons-carousel {
      display: flex;
    }
  }
`;
