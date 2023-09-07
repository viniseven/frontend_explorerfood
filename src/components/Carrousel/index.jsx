import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CaretLeft,
  CaretRight,
  Minus,
  Plus,
  PencilSimple
} from '@phosphor-icons/react';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';
import { Card } from '../Card';

export function Carrousel({ dishes }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(0);
  const [favoritesList, setFavoritesList] = useState([]);

  const { admin } = user;

  const carousel = useRef(null);

  function handleDetailsPage(id) {
    navigate(`/details/${id}`);
  }

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  const handleAddFavorites = (disheId) => {
    setFavoritesList((prevState) => [...prevState, disheId]);
  };

  console.log(favoritesList);

  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    setQuantity(quantity - 1);
    if (quantity == 0) {
      alert('Quantidade zerada');
    }
    setQuantity(0);
  }

  function handleEditDishe(id) {
    navigate(`/editdishe/${id}`);
  }

  return (
    <Container>
      <div className="cards" ref={carousel}>
        <div className="card">
          {dishes.map((dishe, index) => (
            <Card key={index}>
              {admin ? (
                <ButtonText
                  icon={PencilSimple}
                  onClick={() => handleEditDishe(dishe.id)}
                />
              ) : (
                <button onClick={() => handleAddFavorites(dishe.id)}>
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
              )}

              <img
                src={`${api.defaults.baseURL}/files/${dishe.img_dishe}`}
                alt="Imagem do prato"
                onClick={() => handleDetailsPage(dishe.id)}
              />

              <h1>{dishe.name}</h1>
              <p>{dishe.description}</p>
              <span>R$ {dishe.price}</span>
              {!admin ? (
                <div className="choose-dishe">
                  <div>
                    <ButtonText icon={Minus} onClick={handleRemoveQuantity} />
                    <span>{quantity}</span>
                    <ButtonText icon={Plus} onClick={handleAddQuantity} />
                  </div>
                  <Button title="incluir" />
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>

      {dishes.length > 0 && (
        <div className="buttons-carousel">
          <div className="btn-left">
            <ButtonText icon={CaretLeft} onClick={handleLeftClick} />
          </div>

          <div className="btn-right">
            <ButtonText icon={CaretRight} onClick={handleRightClick} />
          </div>
        </div>
      )}
    </Container>
  );
}
