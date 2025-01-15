import Pagina from "@/components/template/pagina";

export default function Layout(props: any) {
  return (
    <Pagina>
      <main className="p-4 border border-red-500">
        <div>{props.children}</div>
      </main>
    </Pagina>
  );
}
