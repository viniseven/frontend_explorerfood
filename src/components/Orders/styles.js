import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  margin-top: 11rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.5rem;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .total-order {
    margin-top: 3rem;

    padding-top: 1rem;

    font-size: 2rem;

    border-top: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

    display: flex;
    gap: 2rem;

    p {
      font-weight: bold;
    }

    span {
      font-size: 3rem;
    }
  }
`;
