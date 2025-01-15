import Image from "next/image";
import explorador from "@/assets/explorador.webp";
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="bg-black text-white text-xl flex flex-col items-center justify-center w-screen h-screen gap-4">
      <h1 className="font-bold text-3xl">Pagina não encontrada!</h1>
      <div className="w-[300px] h-[300px] relative">
        <Image src={explorador} alt="Pagina não encontrada" fill />
      </div>
      <p className="max-w-80 text-center">
        Parece um pouco perdido, mas não se preocupa até os melhores
        esploradores as vezes ficam perdidos
      </p>
      <Link href={"/"} className="botao">
        Voltar
      </Link>
    </main>
  );
}
