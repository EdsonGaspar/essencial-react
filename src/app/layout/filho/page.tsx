import Link from "next/link";

export default function Filho() {
  return (
    <main>
      <h1>Filho</h1>
      <div className="flex gap-3">
        <Link href={"/"} className="botao">
          Início
        </Link>
        <Link href={"/layout"} className="botao">
          Layout
        </Link>
      </div>
    </main>
  );
}
