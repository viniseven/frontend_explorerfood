import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  :root{
    font-size: 62.5%;
  }

  body{
    width: 100vw;
    height: 100vh;

    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    margin: 0 auto;

    display: flex;
    justify-content: center;

    overflow-x: hidden;
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
