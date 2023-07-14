import { Container } from './styles';

import polygon from '../../assets/polygon.svg';

export function Footer() {
  return (
    <Container>
      <div className="brand">
        <img src={polygon} alt="Logo Brand" />
        <p>food explorer</p>
      </div>

      <div className="copyright">
        <p>&copy; 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}
