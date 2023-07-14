import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Carrousel } from '../../components/Carrousel';
import { Footer } from '../../components/Footer';

import cookie from '../../assets/cookie.svg';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="card-title">
          <img
            src={cookie}
            alt="Imagem de cookies flutuando no ar com folhas e frutas"
          />

          <div className="content-card-title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
