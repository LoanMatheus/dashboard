interface HeaderProps {
  children?: React.ReactNode
  className?: string
}
export default function Header(props: HeaderProps) {
  const {
    children,
    className = ''
  } = props

  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  )
}