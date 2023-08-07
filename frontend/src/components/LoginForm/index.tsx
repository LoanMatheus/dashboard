'use client'
import { Card } from "@/components/Card";
import InputText from "@/components/InputText";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  return (
    <Card.Root className="p-4">
      <Card.Header>
        <h2 className="mt-0 p-0 text-center">Bem Vindo!</h2>
      </Card.Header>
      <Card.Body>
        <InputText
          id="Username"
          label="Usuario"
          inputValue={handleEmailChange}
        />
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card.Root>
  )
}