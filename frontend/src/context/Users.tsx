'use client'
import { SetStateAction, createContext } from "react";

type ContextData = {
  usersData: Array<Object>
  setUsersData: React.Dispatch<React.SetStateAction<Array<Object>>>
}

const defaultValue: ContextData = {
  usersData: [],
  setUsersData: function (_value: SetStateAction<Array<Object>>): void { },
}

const ContextUsers = createContext<ContextData>(defaultValue);

export default ContextUsers;