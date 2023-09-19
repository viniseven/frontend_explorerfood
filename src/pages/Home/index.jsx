import { useEffect, useContext } from 'react';

import AppContext from '../../context/AppContext';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';

import cookie from '../../assets/cookie.svg';
import { api } from '../../services/api';

export function Home() {
  const { search, dishes, setDishes } = useContext(AppContext);

  useEffect(() => {
    async function fetchDishes() {
      let response;

      response = await api.get(`/dishes?name=${search}&ingredient`);

      if (response.data == 0) {
        response = await api.get(`/dishes?name&ingredient=${search}`);
      }

      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  dishes.map((dishe) => {
    dishe.price = dishe.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  });

  const categories = [...new Set(dishes.map((dishe) => dishe.category))];

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

        <div className="content-sections">
          {categories.map((category) => {
            const categoryDishes = dishes.filter(
              (dishe) => dishe.category === category
            );

            return (
              <Section key={category} title={category}>
                <Carrousel dishes={categoryDishes} />
              </Section>
            );
          })}
        </div>
      </main>
      <Footer />
    </Container>
  );
}
