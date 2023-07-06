'use client'
import AlertMessage from "@/components/AlertMessage"
import Cards from "@/components/Card"
import ThemeButton from "@/components/ThemeButton"
import { ContextGlobal } from "@/context"
import { LogFunctions } from "@/utils/LogFunctions"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export default function Login() {
  const { logged, setLogged, setToken, setRole } = useContext(ContextGlobal);

  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputError, setInputError] = useState(false);
  const [disable, setDisable] = useState(true);

  // valida inputs
  useEffect(() => {
    setInputError(false);
    const validateInputLength = (value: string, length: number) => {
      return value.length > length;
    };

    const validate =
      validateInputLength(email, 2) && validateInputLength(password, 3);
    validate ? setDisable(false) : setDisable(true);
  }, [password, email]);

  const router = useRouter();

  const login = async () => {
    const logsFunction = new LogFunctions();
    const validLogin = await logsFunction.login(email, password);
    if (validLogin.data.error) {
      setError(true);
      setErrorMessage(validLogin.data.error);
      /* if (validLogin.status == 401) {
        setInputError(true);
      } */
    } else {
      setLogged(validLogin.success);
      setToken(validLogin.data.token || '');
      setError(false);
      setErrorMessage("");
      setInputError(false);

      /* const getRole = await logsFunction.islogged()
      setRole(getRole.role) */

      router.push("/home");
    }
  };

  const cardFooter = (
    <Button
      label="Login"
      className="col-12"
      disabled={disable}
      onClick={login}
    />
  );

  return (
    <>
      <div className="absolute bottom-0 m-1">
        <ThemeButton />
      </div>
      <AlertMessage
        severity="error"
        summary="Error"
        detail={errorMessage}
        showToast={error}
        sticky={true}
      />

      <div className="flex justify-content-center align-items-center h-screen col-12">
        <Cards title="Bem Vindo" className="text-center col-4" footer={cardFooter}>
          <div className="flex flex-column gap-1 pb-2 text-left">
            <label htmlFor="UserName">E-mail</label>
            {<InputText
              id="UserName"
              className={inputError ? "p-invalid" : ""}
              placeholder="Usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />}
          </div>
          <div className="flex flex-column gap-1 pb-2 text-left">
            <label htmlFor="Password">Senha</label>
            {<Password
              id="Password"
              className={`${inputError ? "p-invalid" : ""}`}
              inputClassName={'w-full'}
              placeholder="Senha"
              feedback={false}
              toggleMask
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />}
          </div>
        </Cards>
      </div>
    </>
  )
}