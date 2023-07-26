import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > input {
    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1rem 1.6rem;

    border: none;

    pointer-events: ${({ isNew }) => (isNew ? 'auto' : 'none')};
    :focus {
      outline: 0;
    }
  }

  > button {
    border: none;

    background: none;

    svg {
      width: 8px;
      height: 8px;
    }
  }
`;
