import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 4.8rem;

  padding: 1rem 1.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  border-radius: 8px;

  > button {
    border: none;

    background: none;

    svg {
      width: 16px;
      height: auto;

      margin-top: 0.5rem;
    }
  }

  > input {
    background: transparent !important;

    height: 3.2rem;

    outline: none;
  }
`;
