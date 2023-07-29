import { Container } from './styles';

import { CaretLeft } from '@phosphor-icons/react';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';

import { Minus, Plus, Receipt } from '@phosphor-icons/react';

import SaladaRavanello from '../../assets/SaladaRavanello.svg';

export function Details({ isAdmin }) {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText icon={CaretLeft} title="voltar" />

        <div className="content-details-dishe">
          <img src={SaladaRavanello} alt="Imagem do prato" />

          <div>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div className="tag-ingredients">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>

            <div className="controls-dishe">
              {isAdmin ? (
                <div className="choose-dishe">
                  <div>
                    <ButtonText icon={Minus} />
                    01
                    <ButtonText icon={Plus} />
                  </div>

                  <ButtonText icon={Receipt} title={`pedir - R$ 25,00`} />
                </div>
              ) : (
                <div className="edit-dishe">
                  <Button title="Editar prato" />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
