import Cards from "@/components/Cards";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import { AiOutlineSearch } from "react-icons/ai";
import { getChats } from "@/api/mocks";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { BiUser } from "react-icons/bi";

type ChatData = {
  id?: number,
  name?: string,
  userImg?: string,
  phone?: string,
  message?: string,
  status?: string,
  sector?: number,
  chatId?: number,
  created_at?: string,
  updated_at?: string,
  read?: boolean,
}
export default function ChatsMenu() {
  const router = useRouter()

  const items = (body: ChatData, route: string) => {
    const lastMsgTime = new Date().getTime() - new Date(body.updated_at || '2023-07-06T00:00:00.000Z').getTime()
    const seconds = Math.floor(lastMsgTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
      {
        command: () => { router.push(`/chat/${route}`) },
        template: (items: any, options: any) => (
          <Button onClick={(e) => options.onClick(e)} outlined text className="flex align-items-stretch col-12 p-2">
            <div className="col-2 p-0 m-0">
              <Avatar image={body.userImg} icon={<BiUser />} className="w-2rem h-2rem" shape="circle" />
            </div>
            <div className="flex flex-column align-items-start justify-content-evenly col-8 m-0 py-0">
              <h4 className="font-bold text-color m-0">{body.name}</h4>
              <span className="text-sm text-color">{body.message}</span>
            </div>
            <div className="flex flex-column align-items-end justify-content-between col-2 m-0 py-2">
              <h6 className="text-color m-0">{days} dia</h6>
              {body.read ? <></> : <Badge value="2" severity={'danger'}></Badge>}
            </div>
          </Button>
        )
      }
    )
  }

  const [dados] = getChats.map((i) => {
    const newData = i.data.map((chat) => {
      return (
        items({ ...chat, read: false }, `${chat.id}`)
      )
    })
    return newData
  })

  const menuItem = [
    items({
      id: 1,
      name: "Jane Doe",
      userImg: "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      message: "Hello",
      phone: "55454891919",
      status: "Atendimento",
      sector: 3,
      chatId: 155,
      created_at: "2021-01-01T00:00:00.000Z",
      updated_at: "2023-07-06T00:00:00.000Z",
      read: false
    },
      '1'
    ),
    {
      command: () => { console.log('rota') },
      template: (item: any, options: any) => {
        return (
          <Button onClick={(e) => options.onClick(e)} outlined text className="flex align-items-stretch col-12 p-2">
            <div className="col-2 p-0 m-0">
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="w-3rem h-3rem" shape="circle" />
            </div>
            <div className="flex flex-column align-items-start justify-content-evenly col-8 m-0 py-0">
              <h4 className="font-bold text-color m-0">Amy Elsner</h4>
              <span className="text-sm text-color">Ultima mensagem enviada</span>
            </div>
            <div className="flex flex-column align-items-end justify-content-evenly col-2 m-0 py-0">
              <h6 className="text-color m-0">05 min</h6>
              <Badge value="2" severity={'danger'}></Badge>
            </div>
          </Button>
        )
      }
    },
  ]

  return (
    <div className="flex flex-column xl:max-w-24rem col-12 xl:col-3 surface-ground h-screen">
      <h3 className="py-0 m-3">Chats</h3>
      <div className="px-2">
        <div className="p-inputgroup col-12">
          <Button icon={<AiOutlineSearch />} outlined />
          <InputText placeholder="Procurar Conversa" className="col-12" />
        </div>
      </div>

      <div className="flex col-12 px-3">
        <div className="col-3 px-2">
          <Cards
            className="col-12"
          >

          </Cards>

        </div>
        <div className="col-3 px-2">
          <Cards
            className="col-12"
          >

          </Cards>

        </div>
        <div className="col-3 px-2">
          <Cards
            className="col-12"
          >

          </Cards>

        </div>
        <div className="col-3 px-2">
          <Cards
            className="col-12"
          >

          </Cards>

        </div>
      </div>

      <h4 className="py-0 mx-3 mb-2">Atendimentos</h4>
      <div className="overflow-y-auto p-1">
        <Menu model={dados} className="w-full surface-ground shadow-none border-none" />
      </div>
    </div>
  )
}