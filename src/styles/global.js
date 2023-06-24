import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  :root{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND}
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;