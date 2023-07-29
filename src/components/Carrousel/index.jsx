import { useRef, useState } from 'react';

import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import {
  Minus,
  Plus,
  HeartStraight,
  CaretLeft,
  CaretRight,
  PencilSimple,
} from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';
import theme from '../../styles/theme';

export function Carrousel({ isAdmin }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const carousel = useRef(null);

  function handleAddFavorites(dishe) {
    setFavorites([...favorites, dishe]);

    const btnFav = document.getElementById('btn-favorite');
    const iconFav = btnFav.querySelector('svg');

    iconFav.setAttribute('fill', theme.COLORS.TOMATO_100);
  }

  function handleAddDishe() {
    setQuantity(quantity + 1);
  }

  function handleRemoveDishe() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Container>
      <div className="cards" ref={carousel}>
        <div className="card">
          {!isAdmin ? (
            <ButtonText
              icon={HeartStraight}
              onClick={handleAddFavorites}
              id="btn-favorite"
            />
          ) : (
            <ButtonText icon={PencilSimple} />
          )}

          <div className="card-content">
            <img
              src={SaladaRavanello}
              alt="Foto do prato de Salada Ravanello"
            />

            <h1>Salada Ravanello</h1>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
            </p>

            <span>R$ 49,97</span>

            {!isAdmin ? (
              <div className="choose-dishe">
                <div>
                  <ButtonText icon={Minus} onClick={handleRemoveDishe} />
                  <span>{quantity}</span>
                  <ButtonText icon={Plus} onClick={handleAddDishe} />
                </div>
                <Button title="incluir" />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="buttons-carousel">
        <div className="btn-left">
          <ButtonText icon={CaretLeft} onClick={handleLeftClick} />
        </div>

        <div className="btn-right">
          <ButtonText icon={CaretRight} onClick={handleRightClick} />
        </div>
      </div>
    </Container>
  );
}
