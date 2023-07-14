import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-around;

  height: 11.4rem;

  .logo {
    display: flex;
    gap: 8px;
    align-items: center;

    h1 {
      font-size: clamp(2.1rem, 2.02rem + 0.4vw, 2.5rem);
    }
  }

  .receipt {
    display: flex;
    align-items: center;
  }

  span {
    position: relative;
    bottom: 6px;
    right: 10px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border-radius: 100px;

    width: 2rem;
    height: 2rem;

    text-align: center;

    font-size: 1.4rem;
  }
`;
