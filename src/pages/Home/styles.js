import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  grid-template-rows: 114px auto 77px;
  gap: 4.4rem;

  min-height: 100vh;
`;

export const Content = styled.div`
  grid-area: content;

.card-info{

    background: ${({ theme }) =>  theme.GRADIENT.GRAD_200};

    border-radius: 3px;

    display: flex;
    align-items: center;

    width: 37.6rem;

    margin: 0 auto;

    img {
      position: relative;
      left: -20px;
      top: -14px;

      width: 16.9rem;
      height: 14.9rem;
    }

    div {
      h1{
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
      }

      p{
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }
`;

