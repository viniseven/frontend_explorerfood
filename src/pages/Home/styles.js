import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "header-info"
  "content";

  grid-template-columns: 1fr;
  gap: 4.4rem;

  .header-info{
    width: 37.6rem;
    height: 12rem;

    position: relative;

    display: flex;
    align-items: center;
   
    margin: 0 3.0rem 1.6rem;

    border-radius: 3px;

    background: ${({ theme }) => theme.GRADIENT.GRAD_200};

    div {
      margin-left: 15rem;
    }

    img {
      position: absolute;

      top: -30px;
      left: -30px;
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
    }

    p{
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;