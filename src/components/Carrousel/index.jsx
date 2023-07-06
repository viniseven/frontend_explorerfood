import { useState, useEffect, useRef } from "react";

import { Container } from "./styles";
import { motion } from "framer-motion";

import saladaRavanello from "../../assets/SaladaRavanello.svg";
import spaguettiGambe from "../../assets/SpaguettiGambe.svg";
import torradasParma from "../../assets/TorradasParma.svg";

import { Button } from "../Button";

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
        >
          <motion.div>
            <img src={saladaRavanello} alt='' />
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verder e molho agridoce salpicados com gergelim.
            </p>
            <span>R$ 49,97</span>
            <Button title='incluir' />
          </motion.div>

          <motion.div>
            <img src={spaguettiGambe} alt='' />
            <h1>Spaguetti Gambe</h1>
            <p>Massa fresca com camarões e pesto.</p>
            <span>R$ 79,97</span>
            <Button title='incluir' />
          </motion.div>

          <motion.div>
            <img src={torradasParma} alt='' />
            <h1>Torradas de Parma</h1>
            <p>Presunto de parma e rúcula em um pão com fermentação natural</p>
            <span>R$ 25,97</span>
            <Button title='incluir' />
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
