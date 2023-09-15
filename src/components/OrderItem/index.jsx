import { Container } from './styles';

import { Button } from '../Button';

import { X } from '@phosphor-icons/react';

import imgBolo from '../../assets/bolo.png';
import { useContext } from 'react';

export function OrderItem({ data }) {
  const { title, price, quantity } = data;

  return (
    <Container>
      <img src={imgBolo} alt="Imagem do prato" />
      <div className="content-dishe">
        <p>{title}</p>
        <div>
          <span>Valor: {price}</span>
          <span>Quantidade: {quantity}</span>
        </div>
      </div>

      <Button icon={X} />
    </Container>
  );
}
