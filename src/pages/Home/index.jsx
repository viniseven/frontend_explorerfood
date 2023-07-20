import { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

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
import TorradasParma from '../../assets/TorradasParma.svg';

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
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className="cards"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              <motion.div className="card">
                <img
                  src={SaladaRavanello}
                  alt="Foto do prato de salada ravanello"
                />

                <h1>Salada Ravanello</h1>

                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>

                <span>R$ 49,97</span>

                <div className="btn-dishe">
                  <div>
                    <ButtonText icon={Minus} />
                    <span>01</span>
                    <ButtonText icon={Plus} />
                  </div>

                  <Button title="incluir" />
                </div>
              </motion.div>

              <motion.div className="card">
                <img
                  src={SpaguettiGambe}
                  alt="Foto do prato de spaguetti gambe"
                />

                <h1>Spaguetti Gambe</h1>

                <p>Massa fresca com camarões e pesto.</p>

                <span>R$ 79,97</span>

                <div className="btn-dishe">
                  <div>
                    <ButtonText icon={Minus} />
                    <span>01</span>
                    <ButtonText icon={Plus} />
                  </div>

                  <Button title="incluir" />
                </div>
              </motion.div>

              <motion.div className="card">
                <img src={TorradasParma} alt="Fotos de Torradas de Parma" />

                <h1>Torradas de Parma</h1>

                <p>
                  Presunto de parma e rúcula em um pão com fermentação natural
                </p>

                <span>R$ 25,97</span>

                <div className="btn-dishe">
                  <div>
                    <ButtonText icon={Minus} />
                    <span>01</span>
                    <ButtonText icon={Plus} />
                  </div>

                  <Button title="incluir" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
