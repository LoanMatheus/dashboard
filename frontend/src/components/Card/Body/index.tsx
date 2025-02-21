interface BodyProps {
  children?: React.ReactNode
  className?: string
}
export default function Body(props: BodyProps) {
  const {
    children,
    className = ''
  } = props

  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  )
}