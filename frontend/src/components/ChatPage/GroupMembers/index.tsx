'use client'
import { Card } from "@/components/Card";
import ImgAvatar from "@/components/ImgAvatar";
import { useRouter } from "next/navigation";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { BiUser, BiX } from "react-icons/bi";

export default function GroupMembers(props: any) {
  const router = useRouter();
  const { open, close } = props;
  return (
    <Card.Root className={`col-3 ${open ? '' : 'hidden'} m-0 p-0 max-h-screen max-h-screen overflow-auto`}>
      <div className="flex justify-content-end">
        <Button icon={<BiX className="text-1xl" />} text outlined onClick={() => close(false)} />
      </div>
      <div className="mb-2 border-bottom-1 border-200 pb-3">
        <div className="flex flex-column align-items-center">
          <ImgAvatar
            icon={<BiUser />}
            className="w-7rem h-7rem"
          />
          <h3 className="mb-1">Nome do Grupo</h3>
          <span className="text-color-secondary">XX Membros</span>
        </div>
      </div>
      <Divider className="mb-1" />
      <span className="">
        Descricao do grupo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate harum soluta quae velit pariatur ut ullam adipisci illum nostrum dolore neque, debitis quibusdam consequatur eaque vel, veritatis possimus natus
      </span>
      <h4>Membros</h4>
      <Card.Root className='surface-0'>
        <Button outlined text className="flex align-items-center col-12 p-2" onClick={() => router.push('/chat/1')}>
          <div className="col-2 p-0 m-0">
            <Avatar icon={<BiUser />} className="w-2rem h-2rem" shape="circle" />
          </div>
          <div className="flex flex-column align-items-start justify-content-evenly col-8 m-0 py-0">
            <h4 className="font-bold text-color m-0">Membro 1</h4>
            <span className="text-sm text-color">xx-xxxx-xxxx</span>
          </div>
          <div className="flex flex-column align-items-end justify-content-between col-2 m-0 py-2">
            <h6 className="text-color m-0"></h6>
          </div>
        </Button>
      </Card.Root>
    </Card.Root>
  )
}