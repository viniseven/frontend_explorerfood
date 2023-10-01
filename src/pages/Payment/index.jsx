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
  const [modelPayment, setModelPayment] = useState('');
  const [payment, setPayment] = useState(false);

  function handlePayment() {
    setPayment(true);
  }

  return (
    <Container>
      <Header />
      <main>
        <h1>Pagamento</h1>

        <div className="payment">
          <div className="model-payment">
            <div className="model-pix">
              <ButtonText
                title="PIX"
                disabled={payment}
                onClick={() => setModelPayment('pix')}
              >
                <img src={iconPix} alt="Icon pix payment" />
              </ButtonText>
            </div>
            <div className="model-card">
              <ButtonText
                title="Crédito"
                icon={CreditCard}
                onClick={() => setModelPayment('credit')}
              />
            </div>
          </div>

          <div className="content-data-payment">
            {modelPayment == 'pix' ? (
              <div class="qrcode">
                <img src={qrCode} alt="Icon QRCode" />
              </div>
            ) : (
              <div
                class="credit-card"
                style={{ display: payment ? 'none' : 'block' }}
              >
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
                <Button title="Finalizar pagamento" onClick={handlePayment} />
              </div>
            )}

            {payment ? (
              <div className="info-status-payment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="96"
                  viewBox="0 0 97 96"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.0391 15C29.8137 15 15.0391 29.7746 15.0391 48C15.0391 66.2254 29.8137 81 48.0391 81C66.2645 81 81.0391 66.2254 81.0391 48C81.0391 29.7746 66.2645 15 48.0391 15ZM9.03906 48C9.03906 26.4609 26.5 9 48.0391 9C69.5782 9 87.0391 26.4609 87.0391 48C87.0391 69.5391 69.5782 87 48.0391 87C26.5 87 9.03906 69.5391 9.03906 48ZM48.0391 24C49.6959 24 51.0391 25.3431 51.0391 27V45H69.0391C70.6959 45 72.0391 46.3431 72.0391 48C72.0391 49.6569 70.6959 51 69.0391 51H48.0391C46.3822 51 45.0391 49.6569 45.0391 48V27C45.0391 25.3431 46.3822 24 48.0391 24Z"
                  />
                </svg>
                <p>Aguardando pagamento no caixa</p>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </Container>
  );
}
