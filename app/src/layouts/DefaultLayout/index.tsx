import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />

        {/* É um espaço para ser inserido um conteúdo*/}
        <Outlet />
      </LayoutContainer>
    </div>
  );
}
