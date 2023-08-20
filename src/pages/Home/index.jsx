import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';

export function Home() {
  const { user } = useAuth();
  const { admin } = user;
  const [dishesData, setDishesData] = useState([]);

  useEffect(() => {
    dishesData;
  }, []);

  const receiptDataDishe = (data) => {
    setDishesData(data);
  };

  return (
    <Container>
      <Header sendData={receiptDataDishe} />
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
          <Carrousel dishesData={dishesData} />
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
