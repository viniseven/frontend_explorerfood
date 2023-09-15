import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 6rem;
    height: auto;
  }

  .content-dishe {
    margin-right: 1rem;

    p {
      font-weight: bold;
    }

    div {
      margin-top: 1rem;

      display: flex;
      gap: 4rem;

      span {
        white-space: nowrap;
      }
    }
  }

  button {
    background: none;

    svg {
      width: 2rem;
      fill: red;
    }
  }
`;
