import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  height: 11.4rem;

  grid-area: 'header';

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  width: 100%;

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

  .search {
    min-width: 35rem;

    > :first-child {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 1.2rem 1.4rem;
    }
  }

  #new-dishe {
    width: 21.6rem;
  }

  .btn-icon-orders {
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: 0;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 50%;

      padding: 4px;

      width: auto;
      height: 2rem;

      display: flex;
      align-items: center;
    }
  }

  #btn-orders {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    max-width: 21.6rem;

    padding: 1.2rem 3.2rem;
  }

  > button {
    max-width: 21.6rem;
  }

  .logo {
    position: relative;

    span {
      position: absolute;
      right: 0;
      top: 25px;
    }
  }

  @media (max-width: 1023px) {
    .search {
      display: none;
    }

    #new-dishe {
      display: none;
    }

    #btn-orders {
      display: none;
    }

    #logout {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .sidebar-menu {
      display: none;
    }

    .btn-icon-orders {
      display: none;
    }
  }
`;
