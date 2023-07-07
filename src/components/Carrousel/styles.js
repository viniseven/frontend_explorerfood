import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
max-width: 93vw;

.carousel{

 overflow: hidden;

 cursor: grab;
}

.cards{
  display: flex;
  gap: 1.6rem;

  > div{
  padding: 2.4rem;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  gap: 12px;
}
}

.card{
  margin-top: 2.4rem;

  position: relative;
  
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p{
    display: none;
  }

  span{
    color: ${({ theme }) => theme.COLORS.CAKE};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

.favorite{
  position: absolute;
  right: 16px;

  svg {
     fill: red;
  }
}
`