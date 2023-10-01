import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    margin: 5.6rem 3.7rem 0 1.9rem;

    h1 {
      font-weight: 500;
      font-size: 3.2rem;

      line-height: 44.8px;
    }

    .orders {
      margin-top: 2.7rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      position: relative;

      > p {
        margin-top: 1.8rem;

        font-size: 2rem;
      }

      #btn-advance-payment {
        padding: 1.2rem 3.2rem;

        width: 21.6rem;

        position: fixed;
        right: 3.7rem;
      }
    }
  }

  @media (min-width: 1024px) {
    #btn-advance-payment {
      display: none;
    }
  }
`;
