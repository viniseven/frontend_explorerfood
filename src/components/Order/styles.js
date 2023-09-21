import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 7rem;
    height: auto;

    opacity: 0.8;
  }

  .content-order {
    h1 {
      font-size: 2rem;
      line-height: 32px;
    }

    button {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      font-size: 1.2rem;
      font-weight: 400;
      line-height: 19.2px;
    }
  }
`;
