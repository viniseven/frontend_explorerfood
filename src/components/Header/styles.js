import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 5.6rem 0 2.4rem;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  h1 {
    font-size: 2.1rem;
  }

  > div {
    display: flex;
    gap: 8px;
  }

  .receipt{
    span {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 100px;

      position: relative;
      top: 0;
      right: 20px;

      width: 20px;
      height: 20px;

      padding: 2px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`