'use client'
import { ContextGlobal } from "@/context";
import { useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { useContext } from "react";

import { BsDot } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

export default function SideMenu(props: any) {
  const { role } = useContext(ContextGlobal)
  const { sideMenu } = props;
  const router = useRouter()

  const items = (label: string, route: string, _icon?: any) => {
    return (
      {
        label,
        icon: (_icon || <BsDot className="mr-2" />),
        className: 'text-sm',
        command: () => { router.push(route) },
      }
    )
  }

  const registration = [
    {
      label: 'Painel de Cadastros',
      className: 'text-color',
      items: [
        items('Conta de Usuarios', '/users'),
        items('Grupos', '/groups'),
        items('Setores', '/sectors'),
      ],
    },
  ]

  const link = [{
    label: 'Conectar API',
    className: 'text-color',
    items: [
      items('WhatsApp', '/link-api/whatsapp', <FaWhatsapp className="mr-2" />),
      items('Telegram', '/link-api/telegram', <TbBrandTelegram className="mr-2" />),
    ],
  }]

  const configuration = [{
    label: 'Painel de Configurações',
    className: 'text-color',
    items: [
      items('Configurações Gerais', '/system/general'),
    ],
  }]

  const clients = [{
    label: 'Painel de Clientes',
    className: 'text-color',
    items: [
      items('Adicionar Clientes', '/clients-add'),
      items('Grupos', '/clients-groups'),
      items('Agendamentos', '/schedules'),
      items('Importar Clientes', '/clientes-import'),
    ],
  },
  ]

  const api = [{
    label: 'Painel de Api',
    className: 'text-color',
    items: [
      items('Conectar API', '/clients-add'),
      items('Status', '/clients-groups'),
      items('Reiniciar API', '/schedules'),
      items('Webhook', '/schedules'),
    ],
  },
  ]



  switch (sideMenu) {
    case 1:
      return (<></>)
    case 2:
      return (
        <div className="">
          <Menu model={registration} className="xl:max-w-16rem col-12 xl:col-3" />
        </div>
      )
    case 3:
      return (
        <Menu model={link} className="xl:max-w-16rem col-12 xl:col-3" />
      )
    case 4:
      return (
        <></>
      )
    case 5:
      return (
        <Menu model={clients} className="xl:max-w-16rem col-12 xl:col-3" />
      )
    case 6:
      return (
        <Menu model={configuration} className="xl:max-w-16rem col-12 xl:col-3" />
      )
    default:
      return (<></>)
  }
}