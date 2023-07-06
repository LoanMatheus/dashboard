'use client'
import { Button } from 'primereact/button'
import { ContextGlobal } from '@/context'
import { useContext } from 'react'

import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ContextGlobal)
  const newTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <>
      <Button
        icon={theme === 'light' ? <FiMoon /> : <FiSun />}
        rounded text
        onClick={() => setTheme(newTheme)}
        className=""
      />
    </>
  )
}