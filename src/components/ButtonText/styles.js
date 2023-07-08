import styled from 'styled-components'

export const Container = styled.button`
  border: 0;
  background-color: transparent;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;

`;