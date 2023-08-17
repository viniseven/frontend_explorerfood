import { Container } from './styles';

import icon from '../../assets/icon_explorer.svg';

import { ButtonText } from '../ButtonText';
import { Sidebar } from '../Sidebar';
import { Input } from '../Input';
import { Button } from '../Button';

import { List, Receipt, MagnifyingGlass, SignOut } from '@phosphor-icons/react';
import { useState } from 'react';

export function Header({ isAdmin }) {
  const [sidebar, setSideBar] = useState(false);

  function showSideBar() {
    setSideBar(!sidebar);
  }

  return (
    <Container>
      <div className="sidebar-menu">
        <ButtonText icon={List} onClick={showSideBar} />
        {sidebar && <Sidebar active={setSideBar} />}
      </div>

      <div className="logo">
        <img src={icon} alt="" />
        <h1>food explorer</h1>
        <span>admin</span>
      </div>

      <div className="search">
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>

      {isAdmin ? (
        <div className="view-receipt">
          <ButtonText icon={Receipt} />
          <ButtonText icon={Receipt} title={`Pedidos (0)`} />
          <span>0</span>
        </div>
      ) : (
        <Button title="Novo prato" id="new-dishe" />
      )}

      <ButtonText icon={SignOut} />
    </Container>
  );
}
