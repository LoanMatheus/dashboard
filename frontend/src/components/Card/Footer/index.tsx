interface FooterProps {
  children?: React.ReactNode
  className?: string
}
export default function Footer(props: FooterProps) {
  const {
    children,
    className = ''
  } = props

  return (
    <div className={`card-footer ${className}`}>
      {children}
    </div>
  )
}