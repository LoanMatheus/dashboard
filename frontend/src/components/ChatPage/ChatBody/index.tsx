import { getConversations } from "@/api/mocks";
import { Avatar } from "primereact/avatar";
import { BiDownload, BiFile, BiUser } from "react-icons/bi";
import { Image } from 'primereact/image';
import { Card } from "@/components/Card";
import { Button } from "primereact/button";
export default function ChatBody() {

  const msgBody = (msgType: string, message: string) => {
    switch (msgType) {
      case 'image':
        return (
          <div className="m-0 p-1">
            <Image
              src={message}
              imageClassName="border-1 border-round"
              className="border-round"
              width="150"
              alt=''
              preview
              downloadable
            />
          </div>
        )
      case 'text':
        return (
          <div className="m-0 p-1">
            {message}
          </div>
        )
      case 'file':
        return (
          <div className="m-0 p-1">
            <a href={message} download target="_blank">
              <Button className="surface-50 py-1" outlined >
                <div className="flex align-items-center">
                  <div className="p-3 surface-100 border-round mr-3">
                    <BiFile className="text-2xl" />
                  </div>
                  <div className="text-left">
                    <p>
                      Nome do Arquivo
                    </p>
                    <p>
                      12.5 MB
                    </p>
                  </div>
                  <BiDownload className="text-2xl ml-3" />
                </div>
              </Button>
            </a>
          </div>
        )
    }
  }

  const speechBubble = (sender: string, message: any, time: any, message_type: any) => {
    switch (sender) {
      case 'Client':
        return (
          <div className="flex justify-content-start my-2">
            <Avatar image={'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'} icon={<BiUser />} className="w-2rem h-2rem mx-2" shape="circle" />
            <div className="relative mx-2">
              <Card.Root className="sender-client">
                <div className={`flex flex-wrap card-container w-max max-w-${message_type == 'text' ? '24rem' : '20rem'}`}>
                  {msgBody(message_type, message)}
                </div>
                <span className="text-xs block w-full text-right pt-2">{time}</span>
              </Card.Root>
            </div>
          </div>
        )
      case 'User':
        return (
          <div className="flex flex-row-reverse justify-start-end my-2">
            <Avatar image={'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'} icon={<BiUser />} className="w-2rem h-2rem mx-2" shape="circle" />
            <div className="relative mx-2">
              <Card.Root className="sender-user">
                <div className={`flex flex-wrap card-container w-max max-w-${message_type == 'text' ? '24rem' : '20rem'}`}>
                  {msgBody(message_type, message)}
                </div>
                <span className="text-xs block w-full text-right pt-2">{time}</span>
              </Card.Root>
            </div>
          </div>
        )
    }
    return (
      <></>
    )
  }
  const [data] = getConversations

  return (
    <div className="flex flex-column lg:pl-0 pl-7">
      {data.data.map((chat, index) => {
        return (
          <div key={index}>
            {speechBubble(chat.sender, chat.content, chat.time, chat.message_type)}
          </div>
        )
      })}
    </div>
  )
}