import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  border-radius: 8px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  > input {
    width: 100%;
    height: 100%;

    background: none;
    border: none;

    outline: none;

    padding-left: 2rem;
  }
  
  @media screen and (max-width: 480px) { 
  {
    font-size: 16px;
  }
}
`;
