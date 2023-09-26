import { Container } from './styles';

import { Header } from '../../components/Header';

import iconPix from '../../assets/iconPix.svg';
import creditCard from '../../assets/creditCard.svg';

export function Payment() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Pagamento</h1>

        <div className="payment">
          <div className="model-pix">
            <img src={iconPix} alt="Icon pix payment" />
            <span>PIX</span>
          </div>
          <div className="model-card">
            <img src={creditCard} alt="Icon credit card payment" />
            <span>Crédito</span>
          </div>
          <div className="content-data-payment"></div>
        </div>
      </main>
    </Container>
  );
}
