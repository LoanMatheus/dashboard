'use client'
import { ContextGlobal } from "@/context"
import { useContext } from "react"

export default function Head() {
  const { theme } = useContext(ContextGlobal)
  const light = <link rel="stylesheet" href={"/themes/soho-light/theme.css"} />
  const dark = <link rel="stylesheet" href={"/themes/soho-dark/theme.css"} />

  return (
    <head>
      <link rel="icon" href="/favicon.ico" />
      {theme == 'light' ? light : dark}
    </head>
  )
}