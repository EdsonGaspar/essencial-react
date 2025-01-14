import Link from "next/link";
interface MenuItemsProps {
  icone?: any;
  nomeItem?: string;
  caminho: string;
}
export function MenuItems({ caminho, nomeItem, icone }: MenuItemsProps) {
  return (
    <div className="p-3 hover:bg-black/10 hover:text-slate-200">
      <Link href={caminho} className="text-xl flex gap-2 items-center">
        {icone}
        {nomeItem}
      </Link>
    </div>
  );
}
