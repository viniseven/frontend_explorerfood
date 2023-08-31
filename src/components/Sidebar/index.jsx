import { Link } from 'react-router-dom';

import { Container, ContentMenu } from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';
import { Footer } from '../Footer';

import { MagnifyingGlass, X } from '@phosphor-icons/react';

export function Sidebar({ active, sidebarValueInput }) {
  const { user, signOut } = useAuth();

  const { admin } = user;

  function handleValueInputSidebar(value) {
    sidebarValueInput(value);
  }

  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className="topo-menu">
        <ButtonText icon={X} onClick={closeSidebar} />
        <h1>Menu</h1>
      </div>

      <ContentMenu>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => handleValueInputSidebar(e.target.value)}
        />

        <div className="btn-actions">
          {admin ? (
            <Link to="/new">
              <ButtonText title="Novo prato" />
            </Link>
          ) : null}
          <ButtonText title="Sair" onClick={signOut} />
        </div>
      </ContentMenu>
      <Footer />
    </Container>
  );
}
