import styled from 'styled-components'

export const Container = styled.div`

.header-info{
  width: 100%;

  display: flex;
  align-items: center;

  position: absolute;

  background: ${({ theme }) => theme.GRADIENT.GRAD_200};

  img {
    position: relative;
    right: 3rem;
    bottom: 2rem;
  }
  

  div {
    h1 {
      font-size: 1.8rem;
    }

    p{
      font-size: 1.2rem;
    }
  }
}
`;