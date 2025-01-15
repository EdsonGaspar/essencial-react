"use client";
import Link from "next/link";
import { useState } from "react";

export default function PageLayout() {
  const [data] = useState(new Date());

  return (
    <main className="border border-blue-500 px-4 flex flex-col gap-3">
      <span>{data.toLocaleString()}</span>
      <h1>Pagina Layout</h1>
      <div className="flex gap-2">
        <Link href={"/"} className="botao">
          Início
        </Link>
        <Link href={"/layout/filho"} className="botao">
          Filho
        </Link>
      </div>
    </main>
  );
}
