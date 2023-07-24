import { useRef } from 'react';

import { Container } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import {
  Minus,
  Plus,
  HeartStraight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';

export function Carrousel() {
  const carousel = useRef(null);

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
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
          </div>
        </div>

        <div className="card">
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
          </div>
        </div>

        <div className="card">
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
          </div>
        </div>

        <div className="card">
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
          </div>
        </div>

        <div className="card">
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
          </div>
        </div>

        <div className="card">
          <ButtonText icon={HeartStraight} />

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

            <div className="choose-dishe">
              <div>
                <ButtonText icon={Minus} />
                <span>01</span>
                <ButtonText icon={Plus} />
              </div>
              <Button title="incluir" />
            </div>
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
