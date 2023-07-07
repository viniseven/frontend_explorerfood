import { useState, useEffect, useRef } from "react";

import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { Button } from "../Button";

import { motion } from "framer-motion";
import { Minus, Plus, HeartStraight } from "@phosphor-icons/react";

import SaladaRavanello from "../../assets/SaladaRavanello.svg";
import SpaguettiGambe from "../../assets/SpaguettiGambe.svg";

export function Carrousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className='cards'
          drag='x'
          dragConstraints={{ right: 15, left: -width }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='card'>
            <div className='favorite'>
              <HeartStraight weight='fill' />
            </div>
            <img src={SaladaRavanello} alt='Imagem do prato' />
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <span>R$ 49,97</span>
            <div>
              <ButtonText icon={Minus} />
              01
              <ButtonText icon={Plus} />
            </div>

            <Button title='Incluir' />
          </div>

          <div className='card'>
            <div className='favorite'>
              <ButtonText icon={HeartStraight} />
            </div>
            <img src={SpaguettiGambe} alt='Imagem do prato' />
            <h1>Spaguetti Gambe</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <span>R$ 79,97</span>
            <div>
              <ButtonText icon={Minus} />
              01
              <ButtonText icon={Plus} />
            </div>

            <Button title='Incluir' />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
