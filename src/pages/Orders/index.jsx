import { useContext } from 'react';

import { Container } from './styles';

import CartContext from '../../context/CartContext';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Order } from '../../components/Order';
import { Button } from '../../components/Button';

export function Orders() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acumulator, dishe) => {
    return dishe.price + acumulator;
  }, 0);

  return (
    <Container>
      <Header />

      <main>
        <h1>Meu pedido</h1>

        <div className="orders">
          {cart.map((dishe, index) => (
            <Order key={index} dishe={dishe} />
          ))}

          <p>
            Total:{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice)}
          </p>

          <Link to="/payment">
            <Button title="Avançar" id="btn-advance-payment" />
          </Link>
        </div>
      </main>
    </Container>
  );
}
