import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

.main{
  padding: 3.6rem 5.6rem;
  
  text-align: center;
  
  img{
    margin-top: 1.6rem;

    min-width: 26rem;
    min-height: 26rem;
  }

  h1{
    font-size: 2.7rem;
    font-weight: 500;

    margin-top: 1.6rem;
  }

  p{
    margin-top: 2.4rem;

    font-weight: 400;
  }

  .tag-ingredients{
    margin-top: 2.8rem;

    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .quantity-order{
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: center;

    margin-top: 4.8rem;

    div {
      display: flex;
      gap: 15px;
      align-items: center;

      svg {
        width: 2.7rem;
      }
    }

    > button {
      font-size: 9.4px;

      padding: 8px 16px;

      border-radius: 5px;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      svg {
        margin-right: 5px;

        width: 2.1rem;
        height: 2.1rem;
      }
    }
  }
}
`