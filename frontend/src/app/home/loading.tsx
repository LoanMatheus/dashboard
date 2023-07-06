import Cards from "@/components/Card";

export default function Loading() {
  return (
    <div className="flex justify-content-center align-items-center h-screen col-12">
      <Cards title="Carregando Pagina" className="text-center col-2">
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }} />
      </Cards>
    </div>
  )
}