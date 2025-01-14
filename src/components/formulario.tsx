export function Formulario() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <section className="p-4 ">
        <form className="flex  flex-col gap-3">
          <input
            type="text"
            placeholder="Insere nome"
            className="text-xl px-4 py-2 rounded-md border outline-none bg-transparent border-zinc-300 hover:bg-black/10"
          />
          <input
            type="email"
            placeholder="Insere email"
            className="text-xl px-4 py-2 rounded-md border outline-none bg-transparent border-zinc-300 hover:bg-black/10"
          />
          <input
            type="password"
            placeholder="Insere senha"
            className="text-xl px-4 py-2 rounded-md border outline-none bg-transparent border-zinc-300 hover:bg-black/10"
          />
          <div className="flex justify-center gap-8 mt-3">
            <button className="w-32 text-xl text-zinc-500 font-medium rounded-md p-2 bg-zinc-700 hover:bg-zinc-800">
              Salvar
            </button>
            <button className="w-32 text-xl text-zinc-500 font-medium rounded-md p-2 bg-zinc-700 hover:bg-zinc-800">
              Cancelar
            </button>
          </div>
        </form>
      </section>
      <section className="p-4 flex flex-col space-y-9 text-xl">
        <p>Nome: </p>
        <p>Email: </p>
        <p>Senha: </p>
      </section>
    </div>
  );
}
