import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 5.6rem 2.8rem 2.4rem;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  div {
    display: flex;
    gap: 8px;

    h1{
      font-size: 2.1rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }
  }

  .receipt{
    position: relative;

    span {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 100px;

      position: absolute;
      top: 0;
      left: 20px;

      width: 20px;
      height: 20px;

      padding: 2px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`