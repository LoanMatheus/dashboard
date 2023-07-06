'use client'
import React, { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ContextGlobal } from "@/context";
import { LogFunctions } from "@/utils/LogFunctions";
import Navbar from "../NavBar";
import SideMenu from "../SideMenu";


export default function Header() {
  const {
    logged,
    role,
    setLogged,
    setRole,
    setToken,
  } = useContext(ContextGlobal)

  const [menu, setMenu] = useState(0)
  const [sideMenu, setSideMenu] = useState(0)
  const [mounted, setMounted] = useState(false);

  // monta a pagina e verifica se esta logado
  const router = useRouter();
  const path = usePathname()

  useEffect(() => {
    const logsFunction = new LogFunctions
    const verifyLog = async () => {
      const response = await logsFunction.islogged()
      setLogged(response.success)
      response.success ?
        setRole(response.data.role) : setRole(0)
      setMounted(true)
    }
    verifyLog()
    if (mounted && !logged) {
      router.push('/login')
    }
  }, [logged, mounted, router, setLogged, setRole])


  if (path !== '/login' && mounted) {
    return (
      <>
        <Navbar
          menu={menu}
          setMenu={setMenu}
          setSideMenu={setSideMenu}
        />
        <SideMenu
          sideMenu={sideMenu}
        />
      </>
    )
  }

  return (<></>)
}