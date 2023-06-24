import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";

import { ButtonText } from "../ButtonText";

import { List, Receipt } from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <ButtonText icon={List} />
      <img src={logoImg} alt='' />
      <ButtonText icon={Receipt} />
    </Container>
  );
}
