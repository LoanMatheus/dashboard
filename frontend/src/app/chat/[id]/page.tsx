'use client'
import ChatBody from "@/components/ChatPage/ChatBody";
import ChatFooter from "@/components/ChatPage/Footer";
import IdClient from "@/components/ChatPage/IdCard";
import ImgAvatar from "@/components/ImgAvatar";
import Body from "@/components/Layout";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { useRef, useState } from "react";
import { BiDotsHorizontalRounded, BiUser } from "react-icons/bi";
import { TbPhoneOff, TbUserCancel, TbUserShare } from "react-icons/tb";

export default function Chat() {
  const [show, setshow] = useState(false);
  const menu = useRef<any>(null);

  const items = [
    {
      label: 'Transferir Atendimento',
      icon: <TbUserShare className="mr-3 text-2xl" />,
    },
    {
      label: 'Encerrar Atendimento',
      icon: <TbPhoneOff className="mr-3 text-2xl" />,
    },
    {
      label: `Bloquear Cliente`,
      icon: <TbUserCancel className="mr-3 text-2xl" />,
    },
  ]

  return (
    <>
      <Body
        header
        head_start={
          <div className="flex align-items-center" onClick={() => setshow(true)}>
            <ImgAvatar
              icon={<BiUser />}
              className="w-2rem h-2rem"
            />
            <h4 className="ml-2">Jane Doe</h4>

          </div>
        }
        head_end={
          <div>
            <Menu model={items} popup ref={menu} id="popup_menu_right" popupAlignment="right" className="" />
            <Button
              icon={<BiDotsHorizontalRounded className="text-2xl" />}
              onClick={(e) => menu.current.toggle(e)} text
              aria-controls="popup_menu_right"
              aria-haspopup
            />
          </div>
        }
        footer={
          <ChatFooter />
        }
      >
        <ChatBody />
      </Body>
      <IdClient open={show} close={setshow} />
    </>
  )
}