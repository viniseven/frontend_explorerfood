import { useContext, useEffect } from 'react';

import { Container } from './styles';

import CartContext from '../../context/CartContext';

import { Header } from '../../components/Header';
import { Order } from '../../components/Order';

export function Orders() {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function returnCartStorage() {
      const savedCart = (await JSON.parse(localStorage.getItem('cart'))) || [];

      console.log(savedCart);
    }
    returnCartStorage();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <h1>Meu pedido</h1>

        <div className="orders">
          {cart.map((dishe, index) => (
            <Order key={index} dishe={dishe} />
          ))}
        </div>
      </main>
    </Container>
  );
}
