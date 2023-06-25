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
    background: ${({ theme }) =>  theme.GRADIENT.GRAD_200};

    display: flex;

    height: 12rem;

    margin:  0 1.6rem 0 3.0rem;

    img {
      display: block;
      position: relative;
     
      width: 19.1rem;
      height: 14.9rem;

      left: -30px;
      top: -30px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: initial;
    
      position: relative;
      right: 2.7rem;

      h1 {
        font-size: 1.6rem;
        font-weight: 600;
      }

      p {
        font-size: 1rem;
      }
    }
  }

`;