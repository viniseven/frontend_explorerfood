import { Container } from "./styles";

import icon from "../../assets/icon_explorer.svg";

import { ButtonText } from "../ButtonText";
import { Sidebar } from "../Sidebar";

import { List, Receipt } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
  const [sidebar, setSideBar] = useState(false);

  function showSideBar() {
    setSideBar(!sidebar);
  }

  return (
    <Container>
      <ButtonText icon={List} onClick={showSideBar} />
      {sidebar && <Sidebar active={setSideBar} />}

      <div>
        <img src={icon} alt='' />
        <h1>food explorer</h1>
      </div>

      <div className='receipt'>
        <ButtonText icon={Receipt} />
        <span>0</span>
      </div>
    </Container>
  );
}
