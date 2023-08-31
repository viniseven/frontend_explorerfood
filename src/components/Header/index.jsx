import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import icon from '../../assets/icon_explorer.svg';

import { ButtonText } from '../ButtonText';
import { Sidebar } from '../Sidebar';
import { Input } from '../Input';
import { Button } from '../Button';

import { List, Receipt, MagnifyingGlass, SignOut } from '@phosphor-icons/react';

export function Header(props) {
  const { signOut, user } = useAuth();
  const [sidebar, setSideBar] = useState(false);

  const { admin } = user;

  function handleSidebarValueInput(value) {
    props.valueInput(value);
  }

  function showSideBar() {
    setSideBar(!sidebar);
  }

  return (
    <Container>
      <div className="sidebar-menu">
        <ButtonText icon={List} onClick={showSideBar} />
        {sidebar && (
          <Sidebar
            active={setSideBar}
            admin
            sidebarValueInput={handleSidebarValueInput}
          />
        )}
      </div>

      <div className="logo">
        <img src={icon} alt="" />
        <h1>food explorer</h1>

        {admin ? <span>admin</span> : <></>}
      </div>

      <div className="search">
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => handleSidebarValueInput(e.target.value)}
        />
      </div>

      {admin ? (
        <Link to="/new">
          <Button title="Novo prato" id="new-dishe" />
        </Link>
      ) : (
        <>
          <ButtonText icon={Receipt} id="btn-icon-receipt" />
          <Button icon={Receipt} title={`Pedidos ()`} id="btn-receipt" />
        </>
      )}

      <ButtonText icon={SignOut} id="logout" onClick={signOut} />
    </Container>
  );
}
