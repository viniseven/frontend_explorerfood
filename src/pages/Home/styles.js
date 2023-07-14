import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1920px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 4.4rem;

  padding: 0 1.6rem;

  .card-title {
    background: ${({ theme }) => theme.GRADIENT.GRAD_200};

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 12rem;

    position: relative;

    img {
      width: 191px;
      height: 149px;

      position: absolute;
      bottom: 1px;
      left: -35px;
    }

    .content-card-title {
      width: 60%;

      h1 {
        font-size: clamp(1.4rem, 0.4rem + 2.2vw, 4rem);
        font-weight: 600;

        white-space: nowrap;
      }

      p {
        font-size: clamp(1.2rem, 0.4rem + 1vw, 1.6rem);
        font-weight: 400;
        line-height: 16.8px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-top: 16.4rem;

    .card-title {
      height: 26rem;

      position: relative;

      img {
        width: 632px;
        height: 406px;

        position: absolute;
        left: -100px;
        top: -80px;
      }

      .content-card-title {
        margin-right: -80px;

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
