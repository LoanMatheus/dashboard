interface MainProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function BodyMain(props: MainProps) {
  const { children, footer, className } = props;
  return (
    <div className={`w-full h-full z-0 ${footer ? 'pt-7 pb-8' : 'pt-7'}`}>
      <div className={`h-full overflow-auto ${className} p-2`}>
        {children}
      </div>
    </div>
  )
}

