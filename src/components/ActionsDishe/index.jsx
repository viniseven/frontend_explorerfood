import { useEffect, useState } from 'react';
import { Container } from './styles';

import { ButtonText } from '../ButtonText';
import { Minus, Plus } from '@phosphor-icons/react';

export function ActionsDishe({ onQuantityUpdate }) {
  const [quantity, setQuantity] = useState(0);

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

  useEffect(() => {
    onQuantityUpdate(quantity);
  }, [quantity]);

  return (
    <Container>
      <ButtonText icon={Minus} onClick={handleRemoveQuantity} />
      <span>{quantity}</span>
      <ButtonText icon={Plus} onClick={handleAddQuantity} />
    </Container>
  );
}
