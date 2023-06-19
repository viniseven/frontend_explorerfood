import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.3rem;
  
  margin: 0 auto;
  padding: 15.8rem 4.7rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .input-wrapper{
    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;