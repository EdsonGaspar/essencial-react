import { MenuLateral } from "../aside";
import { ConteudoMenu } from "../content";
import { Rodape } from "../footer";
import { Cabecalho } from "../header";

export default function Pagina() {
  return (
    <main>
      <Cabecalho />
      <div className="flex flex-1">
        <MenuLateral />
        <ConteudoMenu />
      </div>
      <Rodape />
    </main>
  );
}
