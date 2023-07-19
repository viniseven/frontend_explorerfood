import { useState, useEffect, useRef } from 'react';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import cookie from '../../assets/cookie.svg';

import { motion } from 'framer-motion';
import { Minus, Plus, HeartStraight } from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';
import SpaguettiGambe from '../../assets/SpaguettiGambe.svg';

export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const [favorites, setFavorites] = useState(false);

  function handleAddToFavorites() {
    setFavorites(!favorites);
  }

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

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

        <main>
          <Section title="Refeições">
            <motion.div
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                className="cards"
                drag="x"
                dragConstraints={{ right: 15, left: -width }}
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card">
                  <div className="favorite">
                    <ButtonText onClick={handleAddToFavorites}>
                      {favorites ? (
                        <HeartStraight weight="fill" fill="red" />
                      ) : (
                        <HeartStraight />
                      )}
                    </ButtonText>
                  </div>
                  <img src={SaladaRavanello} alt="Imagem do prato" />
                  <h1>Salada Ravanello</h1>
                  <p>
                    Rabanetes, folhas verdes e molho agridoce salpicados com
                    gergelim.
                  </p>
                  <span>R$ 49,97</span>
                  <div className="btn-quantity">
                    <ButtonText icon={Minus} />
                    01
                    <ButtonText icon={Plus} />
                  </div>

                  <Button title="Incluir" />
                </div>

                <div className="card">
                  <div className="favorite">
                    <ButtonText onClick={handleAddToFavorites}>
                      {favorites ? (
                        <HeartStraight weight="fill" fill="red" />
                      ) : (
                        <HeartStraight />
                      )}
                    </ButtonText>
                  </div>
                  <img src={SpaguettiGambe} alt="Imagem do prato" />
                  <h1>Spaguetti Gambe</h1>
                  <p>
                    Rabanetes, folhas verdes e molho agridoce salpicados com
                    gergelim.
                  </p>
                  <span>R$ 79,97</span>
                  <div className="btn-quantity">
                    <ButtonText icon={Minus} />
                    01
                    <ButtonText icon={Plus} />
                  </div>

                  <Button title="Incluir" />
                </div>
              </motion.div>
            </motion.div>
          </Section>
        </main>
      </Content>
    </Container>
  );
}
