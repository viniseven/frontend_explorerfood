import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { InputMarket } from '../../components/InputMarket';
import { TextArea } from '../../components/TextArea';

import { CaretLeft, UploadSimple, CaretDown } from '@phosphor-icons/react';

export function AddDishe() {
  return (
    <Container>
      <Header isAdmin={true} />

      <main>
        <ButtonText icon={CaretLeft} title="voltar" />

        <Form>
          <h1>Novo prato</h1>

          <fieldset>
            <div className="input-wrapper">
              <label htmlFor="image">
                Imagem do prato
                <div className="input-file">
                  <input type="file" id="image" />

                  <UploadSimple size={24} />
                  <span>Selecione imagem</span>
                </div>
              </label>
            </div>

            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Ex.: Salada Ceasar" id="name" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="category">Categoria</label>

              <select name="category" id="category">
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>

            <div className="input-wrapper">
              <label htmlFor="ingredient">Ingredientes</label>
              <div className="group-ingredients">
                <InputMarket value="Pão naam" />
                <InputMarket value="Novo marcador" isNew />
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <input type="text" placeholder="R$ 00,00" id="price" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="description">Descrição</label>
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>
          </fieldset>

          <div className="buttom-footer-form">
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
