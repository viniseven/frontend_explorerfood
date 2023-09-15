import { useState, useContext, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import AppContext from '../../context/AppContext';

import icon from '../../assets/icon_explorer.svg';

import { ButtonText } from '../ButtonText';
import { Sidebar } from '../Sidebar';
import { Input } from '../Input';
import { Button } from '../Button';
import Modal from 'react-modal';

import { List, Receipt, MagnifyingGlass, SignOut } from '@phosphor-icons/react';

export function Header() {
  const { signOut, user } = useAuth();
  const [sidebar, setSideBar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { setSearch } = useContext(AppContext);

  const { admin } = user;

  const styleModal = {
    content: {
      maxWidth: '40rem',
      height: '30rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'rgb(25, 34, 39)',
      border: 'none',
      top: '25%',
      margin: '0 auto'
    },
    overlay: {
      backgroundColor: 'rgba(25, 34, 39, 0.6)'
    }
  };

  function showSideBar() {
    setSideBar(!sidebar);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container>
      <div className="sidebar-menu">
        <ButtonText icon={List} onClick={showSideBar} />
        {sidebar && <Sidebar active={setSideBar} admin />}
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

      <ButtonText
        icon={SignOut}
        id="logout"
        onClick={() => setModalOpen(true)}
      />
      <Modal isOpen={modalOpen} style={styleModal}>
        <h1>Deseja sair?</h1>
        <div style={{ display: 'flex', gap: '5rem' }}>
          <Button title="Sair" onClick={signOut} />
          <Button title="Cancelar" onClick={() => closeModal()} />
        </div>
      </Modal>
    </Container>
  );
}
