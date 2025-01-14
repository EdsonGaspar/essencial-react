import Link from "next/link";

export function MenuLateral() {
  return (
    <aside className="w-60 bg-zinc-600 flex flex-col space-y-2">
      <Link href={"/"} className="p-2 hover:bg-black/10 hover:text-slate-200">
        Inicial
      </Link>
      <Link href={"/calculadora"}>Calculadora</Link>
      <Link href={"/formulario"}>Formulário</Link>
    </aside>
  );
}
