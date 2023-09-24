import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  animation: moveSide 0.3s;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  .topo-menu {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 11.4rem;

    padding-left: 4.5rem;

    display: flex;
    align-items: center;

    h1 {
      font-size: 2.1rem;
      font-weight: 400;
    }
  }

  @keyframes moveSide {
    from {
      width: 0;
    }
    to {
      width: 40%;
    }
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const ContentMenu = styled.div`
  padding: 3.6rem 2.8rem 0;

  display: flex;
  flex-direction: column;

  .btn-actions {
    margin-top: 4.6rem;

    display: flex;
    flex-direction: column;

    button {
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_600};
    }
  }
`;
