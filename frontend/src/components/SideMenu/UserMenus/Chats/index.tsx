import Cards from "@/components/Card";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import { AiOutlineSearch } from "react-icons/ai";

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ChatsMenu() {
  const router = useRouter()
  const items = (label: string, route: string, _icon?: any) => {
    return (
      {
        command: () => { router.push(route) },
        template: () => { }
      }
    )
  }

  const menuItem = [
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
    <div className="flex flex-column xl:max-w-24rem col-12 xl:col-3 surface-card h-screen">
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
      <div className="overflow-y-auto">
        <Menu model={menuItem} className="w-full surface-0 border-0" />
      </div>
    </div>
  )
}