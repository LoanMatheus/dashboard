

export default function Card(props: any) {
  const { className, children } = props
  return (
    <div className={`border-round shadow-3 m-1 p-3 relative ${className}`}>
      {children}
    </div>
  )
}