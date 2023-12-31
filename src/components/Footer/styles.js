import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7rem;

  grid-area: 'footer';

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 3rem 0rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  position: static;

  .brand {
    display: flex;
    gap: 6px;

    p {
      color: #4d585e;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .copyright {
    font-size: 1.2rem;
  }
`;
