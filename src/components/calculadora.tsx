export function Calculadora() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-5 text-zinc-100 ">
        Calculadora
      </h1>
      <div className="max-w-xl m-auto  p-4">
        <section className="flex flex-col  items-center  justify-center gap-2">
          <input
            type="number"
            placeholder="Numero 1"
            className="p-2 text-xl rounded-md outline-none w-64"
          />
          <input
            type="number"
            placeholder="Numero 2"
            className="p-2 text-xl rounded-md outline-none w-64"
          />
        </section>
        <section className="flex justify-center gap-2 mt-6">
          <div className="grid grid-cols-2 gap-2">
            <button className="text-3xl font-bold bg-zinc-700 p-2 rounded-md w-20 hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200">
              +
            </button>
            <button className="text-3xl font-bold bg-zinc-700 p-2 rounded-md w-20 hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200">
              -
            </button>
            <button className="text-3xl font-bold bg-zinc-700 p-2 rounded-md w-20 hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200">
              /
            </button>
            <button className="text-3xl font-bold bg-zinc-700 p-2 rounded-md w-20 hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200">
              X
            </button>
          </div>
          <button className="text-3xl font-bold bg-zinc-700 p-2 rounded-md w-20 hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200">
            C
          </button>
        </section>
      </div>
    </div>
  );
}
