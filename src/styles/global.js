import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', serif;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND}
  }

  :root{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;