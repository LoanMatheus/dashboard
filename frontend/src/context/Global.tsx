'use client'
import { SetStateAction, createContext } from "react";

type ContextData = {
  logged: boolean
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
  role: number
  setRole: React.Dispatch<React.SetStateAction<number>>
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: ContextData = {
  logged: false,
  setLogged: function (_value: SetStateAction<boolean>): void { },
  token: '',
  setToken: function (_value: SetStateAction<string>): void { },
  role: 2,
  setRole: function (_value: SetStateAction<number>): void { },
  theme: 'light',
  setTheme: function (_value: SetStateAction<string>): void { },
}

const ContextGlobal = createContext<ContextData>(defaultValue);

export default ContextGlobal;