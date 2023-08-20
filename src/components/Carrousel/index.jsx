import { useRef, useState, useEffect } from 'react';

import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';
import { Card } from '../Card';

import {
  Minus,
  Plus,
  CaretLeft,
  CaretRight,
  PencilSimple,
} from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';
import theme from '../../styles/theme';

export function Carrousel({ isAdmin, dishesData }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const carousel = useRef(null);

  function handleAddFavorites() {
    setFavorites([...favorites]);

    const btnFav = document.getElementById('btn-favorite');
    const icon = btnFav.querySelector('svg');

    icon.setAttribute('fill', theme.COLORS.TOMATO_100);
    icon.setAttribute('stroke', theme.COLORS.TOMATO_100);
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
          {dishesData.map((dishe) => (
            <Card key={String(dishe.id)}>
              {!isAdmin ? (
                <button id="btn-favorite" onClick={handleAddFavorites}>
                  <svg
                    width="26"
                    height="24"
                    stroke="white"
                    viewBox="0 0 26 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z" />
                  </svg>
                </button>
              ) : (
                <ButtonText icon={PencilSimple} />
              )}
              <img src={SaladaRavanello} alt="Imagem do prato" />
              <h1>{dishe.name}</h1>
              <p>{dishe.description}</p>
              <span>{`R$ ${dishe.price}`}</span>
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
            </Card>
          ))}
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
