import { Container, ContentMenu } from "./styles";

import { X } from "@phosphor-icons/react";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { Header } from "../Header";
import { Footer } from "../Footer";

import { MagnifyingGlass } from "@phosphor-icons/react";

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className='topo-menu'>
        <ButtonText icon={X} onClick={closeSidebar} />
        <h1>Menu</h1>
      </div>

      <ContentMenu>
        <Input
          icon={MagnifyingGlass}
          placeholder='Busque por pratos ou ingredientes'
        />

        <div className='btn-actions'>
          <ButtonText title='Novo prato' />
          <ButtonText title='Sair' />
        </div>
      </ContentMenu>
    </Container>
  );
}
