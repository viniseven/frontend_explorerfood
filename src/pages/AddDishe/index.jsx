import { Container } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

import { CaretLeft } from '@phosphor-icons/react';

export function AddDishe() {
  return (
    <Container>
      <Header isAdmin={true} />

      <main>
        <ButtonText icon={CaretLeft} title="voltar" />
        <h1>Novo prato</h1>
      </main>
    </Container>
  );
}
