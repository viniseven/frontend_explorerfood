import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: grid;

  main {
    max-width: 1366px;

    padding: 1rem 3.2rem 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;

  h1 {
    margin: 2.4rem 0;

    font-size: 3.2rem;
    font-weight: 500;
    line-height: 44.8px;
  }

  label,
  input {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    .btn-select-image {
      margin-top: 1.6rem;

      border-radius: 8px;

      background: ${({ theme }) => theme.COLORS.DARK_800};

      padding: 1.2rem 3.2rem;

      button {
        font-size: 1.4rem;

        width: 100%;

        svg {
          width: 2.4rem;
          height: auto;

          margin-right: 8px;
        }
      }
    }
  }
`;
