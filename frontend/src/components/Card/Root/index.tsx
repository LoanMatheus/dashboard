interface RootProps {
  children?: React.ReactNode
  className?: string;
}

export default function Root(props: RootProps) {
  const {
    className,
    children = ''
  } = props
  return (
    <div className={`p-card p-component p-2 relative ${className}`}>
      {children}
    </div>
  )
}