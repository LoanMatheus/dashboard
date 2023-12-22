'use client'

import { Avatar } from "primereact/avatar"

interface Props {
  image?: string;
  className?: string;
  icon?: React.ReactNode
}

export default function ImgAvatar(props: Props) {
  const { image, className, icon } = props;
  return (
    <Avatar image={image} icon={icon} className={className} shape="circle" />
  )
}