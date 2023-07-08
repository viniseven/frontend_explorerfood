import { Container } from "./styles";

import { CaretLeft } from "@phosphor-icons/react";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { Minus, Plus, Receipt } from "@phosphor-icons/react";

import SaladaRavanello from "../../assets/SaladaRavanello.svg";

export function Details() {
  return (
    <Container>
      <Header />

      <div className='main'>
        <ButtonText icon={CaretLeft} title='voltar' />

        <img src={SaladaRavanello} alt='Imagem do prato' />
        <h1>Salada Ravanello</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>

        <div className='tag-ingredients'>
          <Tag title='alface' />
          <Tag title='cebola' />
          <Tag title='pão naan' />
          <Tag title='pepino' />
          <Tag title='rabanete' />
          <Tag title='tomate' />
        </div>

        <div className='quantity-order'>
          <div>
            <ButtonText icon={Minus} />
            01
            <ButtonText icon={Plus} />
          </div>

          <ButtonText icon={Receipt} title={`pedir - R$`} />
        </div>
      </div>

      <Footer />
    </Container>
  );
}
