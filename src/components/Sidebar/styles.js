import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  animation: moveSide 0.3s;

  display: flex;
  flex-direction: column;

  border: 1px solid blue;

  .topo-menu {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 100%;
    height: 11.4rem;

    padding-left: 1.8rem;

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
      width: 100%;
    }
  }
`;

export const ContentMenu = styled.div`
  padding: 3.6rem 2.8rem 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

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
