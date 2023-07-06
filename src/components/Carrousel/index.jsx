import { useState, useEffect, useRef } from "react";

import { Container } from "./styles";
import { motion } from "framer-motion";

import { Dishe } from "../../components/Dishe";

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
          <Dishe />
          <Dishe />
          <Dishe />
        </motion.div>
      </motion.div>
    </Container>
  );
}
