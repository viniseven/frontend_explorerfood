import { useState } from 'react';
import { Container } from './styles';

import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { Minus, Plus } from '@phosphor-icons/react';

export function ActionsDishe(valueQuantity) {
  const [quantity, setQuantity] = useState(0);

  function handleRemoveQuantity() {
    setQuantity(quantity - 1);
    if (quantity == 0) {
      alert('Item já possui sua quantidade como zero');
    }
    setQuantity(0);
  }

  function handleAddQuantity() {
    setQuantity(quantity + 1);

    if (quantity == 99) {
      alert('Quantidade máxima por pedido atingida');
    }
  }

  function sendQuantityDishe() {
    valueQuantity.quantityDishe(quantity);

    console.log(quantity);
  }

  return (
    <Container>
      <div className="controls-quantity">
        <ButtonText icon={Minus} onClick={handleRemoveQuantity} />
        <span>{quantity}</span>
        <ButtonText icon={Plus} onClick={handleAddQuantity} />
      </div>

      <Button title="incluir" onClick={sendQuantityDishe} />
    </Container>
  );
}
