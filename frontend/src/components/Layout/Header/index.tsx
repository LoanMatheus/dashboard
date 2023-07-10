'use client'
import { Button } from 'primereact/button';

interface HeaderProps {
  title?: string;
  start?: React.ReactNode
  end?: React.ReactNode
}

export default function BodyHeader(props: HeaderProps) {
  const { title, start, end } = props
  return (
    <header className='flex justify-content-between align-items-center surface-card absolute px-3 top-0 w-full h-4rem shadow-1 z-2'>
      <div className=''>
        <Button className='lg:hidden' />
        {start}
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {end}
      </div>
    </header>
  )
}

