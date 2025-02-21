'use client'
import { useContext } from "react";
import { ContextGlobal } from "@/context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from '@/assets/img/Logo_model.jpg'
import ThemeButton from "@/components/ThemeButton";
import { LogFunctions } from "@/utils/LogFunctions";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiPlayListAddLine } from "react-icons/ri";
import { PiGearSix, PiLink, PiRobot, PiUserCircle, PiUserList, PiUsers, PiUsersThree, PiWechatLogoLight } from "react-icons/pi";

export default function Navbar(props: any) {
  const { menu, setMenu, setSideMenu } = props;
  const { role, setLogged } = useContext(ContextGlobal)

  const router = useRouter();

  const logout = () => {
    const logsFunction = new LogFunctions
    logsFunction.logout()
    setLogged(false)
  }

  const handleMenu = (menu: number, sideMenu: number) => {
    setMenu(menu);
    if (menu === 0) {
      router.push('/home')
    }
    setSideMenu(sideMenu)
  }

  const menusData = () => {
    switch (role) {
      case 1:
        return ([
          {
            target: 'dashboard-btn',
            icon: (<AiOutlineDashboard />),
            menuNumber: 1,
            sideMenuNumber: 0,
            tooltip: 'Dashboard'
          },
          {
            target: 'records-btn',
            icon: (<RiPlayListAddLine />),
            menuNumber: 2,
            sideMenuNumber: 2,
            tooltip: 'Cadastros'
          },
          {
            target: 'link-api-btn',
            icon: (<PiLink />),
            menuNumber: 3,
            sideMenuNumber: 3,
            tooltip: 'Conexão de Api'
          },
          {
            target: 'chatbot-btn',
            icon: (<PiRobot />),
            menuNumber: 4,
            sideMenuNumber: 0,
            tooltip: 'ChatBot'
          },
          {
            target: 'clients-btn',
            icon: (<PiUsers />),
            menuNumber: 5,
            sideMenuNumber: 5,
            tooltip: 'Clientes'
          },
          {
            target: 'configuration-btn',
            icon: (<PiGearSix />),
            menuNumber: 6,
            sideMenuNumber: 6,
            tooltip: 'Configurações'
          },
        ]);
      case 2:
        return ([
          {
            target: 'profile-btn',
            icon: (<PiUserCircle />),
            menuNumber: 1,
            sideMenuNumber: 1,
            tooltip: 'Perfil'
          },
          {
            target: 'chats-btn',
            icon: (<PiWechatLogoLight />),
            menuNumber: 2,
            sideMenuNumber: 2,
            tooltip: 'Chats'
          },
          {
            target: 'groups-btn',
            icon: (<PiUsersThree />),
            menuNumber: 3,
            sideMenuNumber: 3,
            tooltip: 'Grupos'
          },
          {
            target: 'contacts-btn',
            icon: (<PiUserList />),
            menuNumber: 4,
            sideMenuNumber: 4,
            tooltip: 'Contatos'
          },
          {
            target: 'settings-btn',
            icon: (<PiGearSix />),
            menuNumber: 5,
            sideMenuNumber: 5,
            tooltip: 'Configurações'
          },
        ]);
      default:
        return ([
          {
            target: 'home-btn',
            icon: (<BiHomeAlt2 />),
            menuNumber: 1,
            sideMenuNumber: 0,
            tooltip: 'Home'
          }
        ]);
    }
  }

  const butons = (target: string, icon: any, menuNumber: number, sideMenuNumber: number, tooltip: string, key?: number | null) => {
    return (
      <div key={key}>
        <Tooltip target={`#${target}`} />
        <Button
          id={target}
          className={`m-1 text-xl`}
          icon={icon}
          text={menu != menuNumber}
          raised={menu == menuNumber}
          data-pr-tooltip={`${tooltip}`}
          onClick={() => handleMenu(menuNumber, sideMenuNumber)}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-column justify-content-between surface-card z-1 col-1 m-0 h-screen shadow-1 max-w-5rem">
      <div className="col-12">
        <Image src={logo} alt="" className="w-full h-auto" priority={true} />
      </div>

      <div className="flex flex-column align-items-center">
        {
          menusData().map((menu, key) => butons(menu.target, menu.icon, menu.menuNumber, menu.sideMenuNumber, menu.tooltip, key))
        }
      </div>

      <div className="flex flex-column align-items-center">
        <ThemeButton />
        <Button className="m-2" icon={<FiLogOut />} text onClick={logout} />
      </div>
    </div>
  )
}