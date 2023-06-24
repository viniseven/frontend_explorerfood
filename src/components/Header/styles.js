import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 5.6rem 0 2.4rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > img{
    width: 15rem;
  }
`