import { Container } from "./styles";

import saladaRavanello from "../../assets/SaladaRavanello.svg";

import { Button } from "../Button";

export function Dishe({ ...rest }) {
  return (
    <Container {...rest}>
      <img src={saladaRavanello} alt='' />
      <h2>Salada Ravanello</h2>
      <p>Rabanetes, folhas verder e molho agridoce salpicados com gergelim.</p>
      <span>R$ 49,97</span>
      <Button title='incluir' />
    </Container>
  );
}
