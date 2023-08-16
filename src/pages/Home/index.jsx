import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div className="text-header">
          <img
            src={cookie}
            alt="Imagem de cookies flutuando no ar com folhas e frutas"
          />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <Section title="Refeições">
          <Carrousel />
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
