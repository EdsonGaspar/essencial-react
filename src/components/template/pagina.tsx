import { MenuLateral } from "../aside";
import { ConteudoMenu } from "../content";
import { Rodape } from "../footer";
import { Cabecalho } from "../header";

export default function Pagina(props: any) {
  // console.log(props.children);
  return (
    <main className="flex flex-col w-screen h-screen">
      <Cabecalho />
      <section className="flex-1 flex bg-zinc-500">
        <MenuLateral />
        <ConteudoMenu>{props.children}</ConteudoMenu>
      </section>
      <Rodape />
    </main>
  );
}
