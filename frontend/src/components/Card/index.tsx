'use client'
import { Card } from "primereact/card";

type CardsProps = {
  className?: string
  header?: React.ReactNode
  title?: string
  subTitle?: string
  footer?: React.ReactNode
  children?: React.ReactNode
}

export default function Cards(props: CardsProps) {
  const { className, header, title, subTitle, footer, children } = props
  return (
    <Card
      header={header}
      className={className}
      title={title}
      subTitle={subTitle}
      footer={footer}
    >
      {children}
    </Card>
  )
}