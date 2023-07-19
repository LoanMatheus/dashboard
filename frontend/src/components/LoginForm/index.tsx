import { Card } from "@/components/Card";
import InputText from "@/components/InputText";

export default function LoginForm() {

  return (
    <Card.Root className="p-4">
      <Card.Header>
        <h2 className="mt-0 p-0 text-center">Bem Vindo!</h2>
      </Card.Header>
      <Card.Body>
        <InputText />
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card.Root>
  )
}