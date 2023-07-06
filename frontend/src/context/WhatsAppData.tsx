'use client'
import { SetStateAction, createContext } from "react";

type ContextData = {
  whatsAppDataData: Array<Object>
  setWhatsAppData: React.Dispatch<React.SetStateAction<Array<Object>>>
}

const defaultValue: ContextData = {
  whatsAppDataData: [],
  setWhatsAppData: function (_value: SetStateAction<Array<Object>>): void { },
}

const ContextWhatsAppData = createContext<ContextData>(defaultValue);

export default ContextWhatsAppData;