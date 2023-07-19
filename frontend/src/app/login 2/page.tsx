import ThemeButton from "@/components/ThemeButton"

import LoginForm from "@/components/LoginForm"

export default function Login() {


  return (
    <>
      <div className="absolute bottom-0 m-1">
        <ThemeButton />
      </div>

      <div className="flex justify-content-center align-items-center h-screen col-12">
        <LoginForm />
      </div>
    </>
  )
}