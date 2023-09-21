import { Container } from './styles';

import { ButtonText } from '../ButtonText';

import { api } from '../../services/api';

export function Order({ dishe }) {
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${dishe.image}`} alt="" />
      <div className="content-order">
        <h1>{dishe.name}</h1>
        <ButtonText title="Remover dos favoritos" />
      </div>
    </Container>
  );
}
