import { MenuLateral } from "../aside";
import { ConteudoMenu } from "../content";
import { Rodape } from "../footer";
import { Cabecalho } from "../header";

export default function Pagina(props: any) {
  // console.log(props.children);
  return (
    <main className="flex flex-col w-screen h-screen bg-zinc-700">
      <Cabecalho />
      <section className="max-w-7xl w-full m-auto flex-1 flex bg-zinc-500 rounded-md overflow-hidden">
        <MenuLateral />
        <ConteudoMenu>{props.children}</ConteudoMenu>
      </section>
      <Rodape />
    </main>
  );
}
