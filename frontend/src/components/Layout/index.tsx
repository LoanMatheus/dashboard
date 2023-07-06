import Header from "@/components/Header"

export default function Layout(props: any) {
  const { children } = props
  return (
    <div >
      {children}
    </div>
  )
}
