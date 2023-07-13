interface FooterProps {
  children?: React.ReactNode
}

export default function BodyFooter(props: FooterProps) {
  const { children } = props
  return (
    <footer className='flex align-items-end surface-card absolute bottom-0 shadow-1 z-2 max-h-10rem col-12 m-0 p-1'>
      {children}
    </footer>
  )
}

