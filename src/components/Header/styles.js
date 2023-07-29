import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  height: 11.4rem;

  .logo {
    display: flex;
    gap: 8px;
    align-items: center;

    h1 {
      font-size: clamp(1.5rem, 1.5rem + 0.4vw, 2rem);
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.CAKE};
    }
  }

  .view-receipt {
    display: flex;

    :nth-child(2) {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 5px;

      font-size: 1.4rem;

      padding: 8px 12px;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    span {
      position: relative;
      bottom: 2px;
      right: 15px;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 100px;

      width: 2rem;
      height: 2rem;

      text-align: center;

      font-size: 1.4rem;
    }
  }

  @media (max-width: 767px) {
    .sidebar-menu {
      display: block;
    }

    .search {
      display: none;
    }

    .view-receipt {
      :nth-child(2) {
        display: none;
      }
    }

    > button:last-child {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .sidebar-menu {
      display: none;
    }

    .search {
      width: auto;
    }

    .view-receipt {
      span {
        display: none;
      }

      button:first-child {
        display: none;
      }
    }

    .logo {
      position: relative;

      span {
        position: absolute;
        right: 0;
        top: 25px;
      }
    }
  }

  @media (min-width: 1440px) {
    .search {
      width: 58rem;
    }
  }
`;
