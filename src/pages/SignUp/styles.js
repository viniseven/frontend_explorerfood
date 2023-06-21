import styled from 'styled-components'


export const Container = styled.div` 
  margin: 15.8rem auto;

  padding: 0 4.7rem;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding: 0 10.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border-radius: 16px;

  h1{
    color: ${({ theme}) => theme.COLORS.WHITE};

    text-align: center;

    visibility: hidden;
  }

  label{
    color: ${({ theme}) => theme.COLORS.WHITE};
  }

  @media (min-width: 800px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6.4rem;
    width: 47.6rem;

    h1{
      visibility: visible;
      font-weight: 500;
    }
  }

`;