import { Container } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

import iconPix from '../../assets/iconPix.svg';
import qrCode from '../../assets/qrCode.svg';

import { CreditCard } from '@phosphor-icons/react';

export function Payment() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Pagamento</h1>

        <div className="payment">
          <div className="model-payment">
            <div className="model-pix">
              <ButtonText title="PIX">
                <img src={iconPix} alt="Icon pix payment" />
              </ButtonText>
            </div>
            <div className="model-card">
              <ButtonText title="Crédito" icon={CreditCard} />
            </div>
          </div>

          <div className="content-data-payment">
            <img src={qrCode} alt="Icon QRCode" />
          </div>
        </div>
      </main>
    </Container>
  );
}
