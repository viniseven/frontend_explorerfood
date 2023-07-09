import styled from 'styled-components'

export const Container = styled.div` 
 width: 100%;

 display : flex;
 flex-direction: column;
 align-items: center;

 .brand{
  margin-top: 15.8rem;

  display: flex;
  gap: 10px;

  h1{
    font-size: 3.7rem;
    font-weight: 700;
  }
 }

 @media(min-width: 800px){
  flex-direction: row;
  justify-content: space-around;

  margin: 0 auto;
  align-items: center;
  height: 100vh;
 }

`;

export const Form = styled.form`
  margin-top: 7.3rem;

  padding: 0 4.7rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
  
  h1 {
    display: none;
  }

  .input-wrapper{
    label{
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

    button:last-child {
     font-size: 1.4rem;
     font-weight: 500;
     line-height: 24px;
     color: ${({ theme }) => theme.COLORS.WHITE};

     display: block;
    }

    @media(min-width: 800px){
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      padding: 6.4rem;

      border-radius: 16px;

      width: 47.6rem;
      height: auto;

      h1{
        display: block;

        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;

        text-align: center;
      }
 }
`;