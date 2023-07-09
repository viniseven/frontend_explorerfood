import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 8px;
 
  display: flex;
  align-items: center;

  padding-left: 1.6rem;

  > input {
    width: 100%;
    max-height: 4.8rem;

    padding: 1.6rem 1.4rem;

    border: 0;
  
    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus{
      outline: none;
    }
  }
`