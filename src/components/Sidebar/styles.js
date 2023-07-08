import styled  from 'styled-components'

export const Container = styled.div`
background-color: ${({ theme}) => theme.COLORS.BACKGROUND};

position: fixed;
top: 0;
left: 0;

z-index: 10;

width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;

animation: moveSide 0.3s;

.header {
 display: flex;
 align-items: center;
 gap: 1.6rem;

 background-color: ${({ theme }) => theme.COLORS.DARK_700};

 width: 100%;

 padding: 5.6rem 2.8rem 2.4rem;

 h1 {
  font-size: 2.1rem;
  font-weight: 400;
 }
}

.content {
 margin: 3.6rem 2.8rem ;

 display: flex;
 flex-direction: column;
 gap: 4.6rem;

 > div {
  button {
  text-align: left;
  
  font-weight: light;
  font-size: 2.4rem;

  padding-bottom: 10px;

  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_600};
  }
 }
}

@keyframes moveSide{
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
`