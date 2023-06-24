import { Container } from "./styles";

import { Header } from "../../components/Header";

import cookie from "../../assets/cakes_home.svg";

export function Home() {
  return (
    <Container>
      <Header />
      <div className='header-info'>
        <img src={cookie} alt='' />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do prepato com ingredientes selecionados</p>
        </div>
      </div>
    </Container>
  );
}
