import { Container } from "./styles";

import { X } from "@phosphor-icons/react";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";

import { MagnifyingGlass } from "@phosphor-icons/react";

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className='header'>
        <ButtonText icon={X} onClick={closeSidebar} />
        <h1>Menu</h1>
      </div>

      <div className='content'>
        <Input
          placeholder='Busque por pratos ou ingredientes'
          icon={MagnifyingGlass}
        />

        <div>
          <ButtonText title='Novo prato' />
          <ButtonText title='Sair' />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
