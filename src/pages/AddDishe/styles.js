import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: grid;

  main {
    padding: 1rem 3.2rem 5.3rem;

    > button {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 23.16px;

      svg {
        width: 2.2rem;
        height: auto;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 2.4rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 44.8px;
  }

  fieldset {
    margin-top: 2.1rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    border: none;

    .input-wrapper {
      label,
      input {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      }

      label {
        display: inline-block;

        width: 100%;

        margin-bottom: 1.6rem;
      }

      input {
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border: none;

        border-radius: 8px;

        padding: 1.6rem 1.4rem;
      }

      .input-file {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        padding: 1.2rem 3.2rem;

        border-radius: 8px;

        display: flex;
        align-items: center;

        width: 100%;

        margin-top: 1.6rem;

        input {
          opacity: 0;

          cursor: pointer;

          display: none;
        }

        span {
          margin-left: 8px;
        }
      }

      select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border: none;

        border-radius: 8px;

        padding: 1.6rem;

        width: 100%;
      }

      .group-ingredients {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        display: flex;
        gap: 1.6rem;

        width: 100%;

        border-radius: 8px;
      }
    }
  }

  .buttom-footer-form {
    margin-top: 2.4rem;
    button {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`;
