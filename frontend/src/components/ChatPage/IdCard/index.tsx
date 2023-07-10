'use client'
import Cards from "@/components/Card";
import ImgAvatar from "@/components/ImgAvatar";
import { Button } from "primereact/button";
import { BiDownload, BiImages, BiUser, BiX } from "react-icons/bi";
import { Divider } from 'primereact/divider';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from "primereact/avatar";

export default function IdClient(props: any) {
  const { open, close } = props;
  return (
    <Cards className={`col-3 ${open ? '' : 'hidden'} m-0 p-0`}>
      <div className="flex justify-content-end">
        <Button icon={<BiX className="text-1xl" />} text outlined onClick={() => close(false)} />
      </div>
      <div className="mb-2 border-bottom-1 border-200 pb-3">
        <div className="flex flex-column align-items-center">
          <ImgAvatar
            icon={<BiUser />}
            className="w-7rem h-7rem"
          />
          <h3 className="mb-1">Jane Doe</h3>
          <span className="text-color-secondary">Num de Atendimento - Status</span>
        </div>
      </div>
      <Divider className="mb-1" />

      <div className="text-color-secondary overflow-auto h-24rem px-3" >
        <span className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate harum soluta quae velit pariatur ut ullam adipisci illum nostrum dolore neque, debitis quibusdam consequatur eaque vel, veritatis possimus natus?
        </span>

        <div >

          <Accordion activeIndex={0} >
            <AccordionTab header={
              <div className="flex align-items-center">
                <BiUser className="mr-2" />
                <h5 className="m-0 p-0">Sobre</h5>
              </div>
            }
            >
              <div className="mb-3">
                <h5 className="m-0 p-0">Nome</h5>
                <span className="text-sm m-0 p-0">Jane Doe</span>
              </div>
              <div className="mb-3">
                <h5 className="m-0 p-0">Tefone</h5>
                <span className="text-sm m-0 p-0">+55 11 55878-5654</span>
              </div>
            </AccordionTab>
            <AccordionTab header={
              <div className="flex align-items-center">
                <BiImages className="mr-2" />
                <h5 className="m-0 p-0">Arquivos de Midia</h5>
              </div>
            }
            >
              <Button onClick={(e) => console.log(e)} outlined className="flex align-items-stretch col-12 p-2 my-2">
                <div className="col-2 p-0 m-0">
                  <Avatar icon={<BiImages />} className="w-3rem h-3rem" />
                </div>
                <div className="flex flex-column align-items-start justify-content-evenly col mx-2 py-0">
                  <h5 className="font-bold text-color m-0">Nome_do_arquivo.teste</h5>
                  <span className="text-sm text-color-secondary">100kb</span>
                </div>
                <div className="flex align-items-center col-2">
                  <BiDownload />
                </div>
              </Button>
              <Button onClick={(e) => console.log(e)} outlined className="flex align-items-stretch col-12 p-2 my-2">
                <div className="col-2 p-0 m-0">
                  <Avatar icon={<BiImages />} className="w-3rem h-3rem" />
                </div>
                <div className="flex flex-column align-items-start justify-content-evenly col mx-2 py-0">
                  <h5 className="font-bold text-color m-0">Nome_do_arquivo.jpg</h5>
                  <span className="text-sm text-color-secondary">100kb</span>
                </div>
                <div className="flex align-items-center col-2">
                  <BiDownload />
                </div>
              </Button>
            </AccordionTab>

          </Accordion>
        </div>
      </div>
    </Cards>
  )
}