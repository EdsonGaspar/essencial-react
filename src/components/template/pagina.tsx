import { MenuLateral } from "../aside";
import { ConteudoMenu } from "../content";
import { Rodape } from "../footer";
import { Cabecalho } from "../header";

export default function Pagina(props: any) {
  // console.log(props.children);
  return (
    <main className="flex flex-col">
      <Cabecalho />
      <div className="flex-1 flex bg-red-500 border-white outline-zinc-300">
        <MenuLateral />
        <ConteudoMenu>{props.children}</ConteudoMenu>
      </div>
      <Rodape />
    </main>
  );
}
