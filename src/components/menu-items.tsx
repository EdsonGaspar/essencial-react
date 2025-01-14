import Link from "next/link";
interface MenuItemsProps {
  nomeItem: string;
  caminho: string;
}
export function MenuItems({ caminho, nomeItem }: MenuItemsProps) {
  return (
    <div className="p-3 hover:bg-black/10 hover:text-slate-200">
      <Link href={caminho} className="text-xl">
        {nomeItem}
      </Link>
    </div>
  );
}
