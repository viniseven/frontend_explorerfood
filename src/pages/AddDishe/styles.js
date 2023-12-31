import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: grid;

  main {
    position: relative;
    top: 50%;

    left: 50%;

    transform: translate(-50%, -50%);

    padding: 1rem 3.2rem 5.3rem;

    max-width: 1366px;

    margin-top: 3.2rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;

  border: none;

  position: relative;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 44.8px;

    margin-bottom: 2.4rem;
  }

  fieldset {
    border: none;

    .input-wrapper {
      margin-bottom: 2.4rem;

      input {
        outline: none;
      }

      label {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};

        display: inline-block;

        width: 100%;

        margin-bottom: 1.6rem;
      }

      .input-file {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border-radius: 8px;

        height: 4.8rem;

        display: flex;
        align-items: center;
        gap: 8px;

        padding-left: 1.6rem;

        margin-top: 1.3rem;

        position: relative;

        input[type='file'] {
          opacity: 0;

          cursor: pointer;

          display: block;
        }

        label {
          margin-bottom: 0;

          font-size: 1.4rem;
        }
      }

      input {
        width: 100%;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border: none;
        border-radius: 8px;

        padding-left: 1.6rem;
      }
    }

    select {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      border: none;

      border-radius: 8px;

      padding-left: 1.6rem;

      width: 100%;
      height: 4.8rem;
    }

    .group-ingredients {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      display: grid;
      grid-template-columns: repeat(auto-fit, 250px);
      width: auto;
      gap: 2.4rem;

      border-radius: 8px;
    }
  }

  .buttom-footer-form {
    margin-top: 2.4rem;
    button {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

      padding: 1.2rem 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    fieldset:nth-child(n + 1) {
      display: flex;
      gap: 3.2rem;

      .input-wrapper {
        width: 100%;
      }
    }
    fieldset:nth-child(n + 3) {
      .input-wrapper:last-child {
        width: 30%;
      }
    }

    .buttom-footer-form {
      display: flex;
      justify-content: flex-end;

      button {
        width: 17.2rem;
        height: auto;
      }
    }
  }
`;
