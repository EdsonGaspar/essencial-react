import {
  IconBrandSlack,
  IconCalculatorFilled,
  IconHomeFilled,
} from "@tabler/icons-react";
import { MenuItems } from "./menu-items";

export function MenuLateral() {
  return (
    <aside className="w-60 bg-zinc-600 flex flex-col space-y-1 ">
      <MenuItems caminho="/" nomeItem="Inicial" icone={<IconHomeFilled />} />
      <MenuItems
        caminho="/calculadora"
        nomeItem="Calculadora"
        icone={<IconCalculatorFilled />}
      />
      <MenuItems
        caminho="/formulario"
        nomeItem="Formulário"
        icone={<IconBrandSlack />}
      />
    </aside>
  );
}
