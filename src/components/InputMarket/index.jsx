import { Container } from './styles';
import { Plus, X } from '@phosphor-icons/react';

export function InputMarket({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
