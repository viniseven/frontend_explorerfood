import { useContext } from 'react';

import { Container } from './styles';

import { ButtonText } from '../ButtonText';

import CartContext from '../../context/CartContext';

import { api } from '../../services/api';

export function Order({ dishe }) {
  const { handleRemoveToCart } = useContext(CartContext);

  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${dishe.image}`} alt="" />
      <div className="content-order">
        <div className="content">
          <h1>{dishe.name}</h1>
          <p>Quantidade: {dishe.quantity}</p>
          <ButtonText
            title="Remover do carrinho"
            onClick={() => handleRemoveToCart(dishe.id)}
          />
        </div>
        <div className="value"></div>
      </div>
    </Container>
  );
}
