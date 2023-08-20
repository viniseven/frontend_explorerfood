import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  min-height: 17.2rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: none;

  padding: 1.4rem;

  resize: none;

  margin-top: 1.6rem;
`;
