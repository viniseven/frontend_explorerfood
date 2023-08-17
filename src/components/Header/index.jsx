import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import icon from '../../assets/icon_explorer.svg';

import { ButtonText } from '../ButtonText';
import { Sidebar } from '../Sidebar';
import { Input } from '../Input';
import { Button } from '../Button';

import { List, Receipt, MagnifyingGlass, SignOut } from '@phosphor-icons/react';

export function Header({ isAdmin = true }) {
  let value = 0;

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

        {isAdmin ? <span>admin</span> : <></>}
      </div>

      <div className="search">
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>

      {isAdmin ? (
        <Link to="/new">
          <Button title="Novo prato" id="new-dishe" />
        </Link>
      ) : (
        <>
          <ButtonText icon={Receipt} id="btn-icon-receipt" />
          <Button
            icon={Receipt}
            title={`Pedidos (${value})`}
            id="btn-receipt"
          />
        </>
      )}

      <ButtonText icon={SignOut} id="logout" />
    </Container>
  );
}
