import { MenuItems } from "./menu-items";

export function MenuLateral() {
  return (
    <aside className="w-60 bg-zinc-600 flex flex-col space-y-1">
      <MenuItems caminho="/" nomeItem="Inicial" />
      <MenuItems caminho="/calculadora" nomeItem="Calculadora" />
      <MenuItems caminho="/formulario" nomeItem="Formulário" />
    </aside>
  );
}
