import { Container } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import iconPix from '../../assets/iconPix.svg';
import qrCode from '../../assets/qrCode.svg';

import { CreditCard } from '@phosphor-icons/react';
import { useState } from 'react';

export function Payment() {
  const [modelPayment, setModelPayment] = useState(true);

  return (
    <Container>
      <Header />
      <main>
        <h1>Pagamento</h1>

        <div className="payment">
          <div className="model-payment">
            <div className="model-pix">
              <ButtonText title="PIX" onClick={() => setModelPayment(true)}>
                <img src={iconPix} alt="Icon pix payment" />
              </ButtonText>
            </div>
            <div className="model-card">
              <ButtonText
                title="Crédito"
                icon={CreditCard}
                onClick={() => setModelPayment(false)}
              />
            </div>
          </div>

          <div className="content-data-payment">
            {modelPayment ? (
              <div class="qrcode">
                <img src={qrCode} alt="Icon QRCode" />
              </div>
            ) : (
              <div class="credit-card">
                <label htmlFor="input-number-card">Número do Cartão</label>
                <Input placeholder="0000 0000 0000 0000" type="number" />

                <div className="info-credit-card">
                  <div>
                    <label htmlFor="">Validade</label>
                    <Input placeholder="04/25" type="number" />
                  </div>

                  <div>
                    <label htmlFor="">CVC</label>
                    <Input placeholder="000" type="number" />
                  </div>
                </div>
                <Button title="Finalizar pagamento" />
              </div>
            )}
          </div>
        </div>
      </main>
    </Container>
  );
}
