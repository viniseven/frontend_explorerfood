import { Container } from './styles';
import { OrderItem } from '../OrderItem';

export function Orders() {
  return (
    <Container>
      <h1>Itens do Pedido</h1>
      <OrderItem
        data={{ title: 'Bolo de ameixa', price: 15.99, quantity: 3 }}
      />

      <div className="total-order">
        <p>Total:</p>
        <span>R$ 30.00</span>
      </div>
    </Container>
  );
}
