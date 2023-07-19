import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import { AiOutlineSearch } from "react-icons/ai";
import { } from "@/api/mocks";
import { Avatar } from 'primereact/avatar';
import { BiUser, BiUserPlus } from "react-icons/bi";
import { useState } from "react";

export default function Contacts() {
  const [status, setStatus] = useState({ name: 'Abertos' })

  const router = useRouter()

  const items = (body: any, route: string) => {
    return (
      {
        command: () => { router.push(`/chat/${route}`) },
        template: (items: any, options: any) => (
          <Button onClick={(e) => options.onClick(e)} outlined text className="flex align-items-center col-12 p-2">
            <div className="col-2 p-0 m-0">
              <Avatar image={body.userImg} icon={<BiUser className="text-xl" />} className="w-2rem h-2rem" shape="circle" />
            </div>
            <div className="flex flex-column align-items-start justify-content-evenly col-8 m-0 py-0">
              <h4 className="font-bold text-color m-0">{body.name}</h4>
            </div>
          </Button>
        )
      }
    )
  }

  const dados = [
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),
    items({ name: 'Jane', userImg: 'jj' }, '1'),

  ]

  return (
    <div className="flex flex-column xl:max-w-24rem col-12 xl:col-3 surface-ground h-screen">
      <div className="flex justify-content-between align-items-center m-2">
        <h3 className="py-0 m-1">Contatos</h3>
        <Button icon={<BiUserPlus className="text-xl" />} text rounded />
      </div>
      <div className="px-2">
        <div className="p-inputgroup col-12">
          <Button icon={<AiOutlineSearch />} outlined />
          <InputText placeholder="Procurar Contato" className="col-12" />
        </div>
      </div>

      <div className="overflow-y-auto p-1">
        <Menu model={dados} className="w-full surface-ground shadow-none border-none" />
      </div>
    </div>
  )
}