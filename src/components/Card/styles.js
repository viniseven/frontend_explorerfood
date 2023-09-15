import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  padding: 2.4rem;

  text-align: center;

  display: flex;
  gap: 1.2rem;
  align-items: center;
  flex-direction: column;
  flex: none;

  position: relative;

  cursor: grabbing;

  width: 21rem;

  border-radius: 8px;

  > button {
    width: fit-content;

    position: absolute;
    right: 2.4rem;

    background: none;
    border: none;

    svg {
      stroke-width: 1.5;
    }
  }

  img {
    width: 8.8rem;
    height: auto;
  }

  h1 {
    font-size: clamp(1.4rem, 0.2786rem + 2.5445vw, 2.4rem);
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 22.4px;

    display: none;
  }

  > span {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: clamp(1.6rem, 0.0458rem + 4.0712vw, 3.2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE};
  }

  @media (min-width: 768px) {
    width: 30.4rem;

    img {
      width: 17.8rem;
    }

    p {
      display: block;
    }
  }
`;
