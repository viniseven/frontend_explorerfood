import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputMarket } from '../../components/InputMarket';

import { CaretLeft, UploadSimple } from '@phosphor-icons/react';

export function AddDishe() {
  return (
    <Container>
      <Header isAdmin={true} />

      <main>
        <ButtonText icon={CaretLeft} title="voltar" />

        <Form>
          <h1>Novo prato</h1>

          <div className="input-wrapper">
            <label htmlFor="image">
              Imagem do prato
              <div className="btn-select-image">
                <ButtonText icon={UploadSimple} title="Selecione Imagem" />
              </div>
            </label>

            <label htmlFor="">
              Nome
              <Input id="name" placeholder="Ex.: Salada Ceasar" />
            </label>

            <label htmlFor="category">Categoria</label>
            <select name="category" id="category">
              <option value="Refeicao">Refeição</option>
              <option value="Refeicao">Sobremesas</option>
              <option value="Refeicao">Bebidas</option>
            </select>
          </div>
        </Form>
      </main>
    </Container>
  );
}
