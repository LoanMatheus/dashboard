'use client'
import { SetStateAction, createContext } from "react";

type ContextData = {
  sectorsData: Array<Object>
  setSectorsData: React.Dispatch<React.SetStateAction<Array<Object>>>
}

const defaultValue: ContextData = {
  sectorsData: [],
  setSectorsData: function (_value: SetStateAction<Array<Object>>): void { },
}

const ContextSectors = createContext<ContextData>(defaultValue);

export default ContextSectors;