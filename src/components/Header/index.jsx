import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';

import icon from '../../assets/icon_explorer.svg';

import { ButtonText } from '../ButtonText';
import { Sidebar } from '../Sidebar';
import { Input } from '../Input';
import { Button } from '../Button';

import { List, Receipt, MagnifyingGlass, SignOut } from '@phosphor-icons/react';

export function Header({ admin, sendData }) {
  const { signOut } = useAuth();
  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);

  let value = 0;

  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(
        `/dishes?name=${search}&ingredients=${search}`
      );
      setDishes(response.data);
      sendData(dishes);

      console.log(dishes);
    }

    fetchDishes();
  }, [, search]);

  function showSideBar() {
    setSideBar(!sidebar);
  }

  return (
    <Container>
      <div className="sidebar-menu">
        <ButtonText icon={List} onClick={showSideBar} />
        {sidebar && <Sidebar active={setSideBar} admin={admin} />}
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {!admin ? (
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

      <ButtonText icon={SignOut} id="logout" onClick={signOut} />
    </Container>
  );
}
