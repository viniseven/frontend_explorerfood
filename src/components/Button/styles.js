import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;
