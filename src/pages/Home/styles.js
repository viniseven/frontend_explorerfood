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

  > div:nth-child(1){
   height: 12rem;

    background: ${({ theme }) =>  theme.GRADIENT.GRAD_200};

    display: flex;
    align-items: center;
    flex-shrink: 0;

    margin: 0 1.6rem 6.2rem;

    border-radius: 3px;

    img {
      position: relative;
      left: -30px;
      top: -14px;

      width: 16.9rem;
      height: 14.9rem;

    }

    div {
      width: 21rem;

      position: absolute;
      right: 1rem;

      h1{
        font-size: 1.8rem;
        font-weight: 600;
      }

      p{
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
`;