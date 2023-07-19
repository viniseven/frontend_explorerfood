import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 7.3rem;

  margin: 0 auto;

  .brand {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 30rem;

    margin: 0 2rem;

    .brand {
      width: 50%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    display: none;

    font-size: 3.2rem;
    font-weight: 500;
    text-align: center;
  }

  .input-wrapper {
    label {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
      font-size: 1.6rem;
    }
  }

  button:last-child {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: block;
  }

  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6.4rem;

    border-radius: 16px;

    h1 {
      display: block;
    }
  }
`;
