import { IconBrandBlackberry } from "@tabler/icons-react";

export function Cabecalho() {
  return (
    <div className="bg-zinc-700">
      <header className="flex items-center justify-between max-w-7xl w-full m-auto px-6 py-8 text-white">
        <h2 className="cursor-pointer ">
          {
            <IconBrandBlackberry
              size={40}
              className="hover:text-zinc-900 transition-colors duration-300"
            />
          }
        </h2>
        <h2 className="text-2xl font-bold bg-zinc-600 p-2 rounded-full cursor-pointer hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-300">
          EG
        </h2>
      </header>
    </div>
  );
}
