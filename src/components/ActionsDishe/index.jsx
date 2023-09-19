import { useContext } from 'react';
import { Container } from './styles';

import { ButtonText } from '../ButtonText';
import { Minus, Plus } from '@phosphor-icons/react';
import QuantityContext from '../../context/QuantityContext';

export function ActionsDishe() {
  let quantity;

  function handleRemoveQuantity() {
    if (quantity == 0) {
      alert('A quantidade deste produto já está zerada!');
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleAddQuantity() {
    if (quantity == 20) {
      alert('Quantidade máxima permitida por pedido atingida');
      return;
    }
    setQuantity(quantity + 1);
  }

  return (
    <Container>
      <ButtonText icon={Minus} onClick={handleRemoveQuantity} />
      <span>{quantity}</span>
      <ButtonText icon={Plus} onClick={handleAddQuantity} />
    </Container>
  );
}
