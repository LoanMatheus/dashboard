import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Cards from "@/components/Cards";

export default function Teste() {
  return (
    <div className="flex justify-content-center align-items-center h-screen col-12">
      <Card.Root>
        <Card.Header>
          <h3 className="m-0 p-0">titulo</h3>
        </Card.Header>
        <h3 className="m-0 p-0">titulo</h3>
        <Button>

        </Button>
        <h3 className="m-0 p-0">titulo</h3>
        <Card.Footer>

          <h3 className="m-0 p-0">titulo</h3>
        </Card.Footer>
      </Card.Root>
      <Cards
        header='teste'
        footer='s'
      >
        conteudo
      </Cards>
    </div>
  )
}