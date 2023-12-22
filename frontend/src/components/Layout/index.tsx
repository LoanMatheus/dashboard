import BodyHeader from './Header';
import BodyMain from './Main';
import BodyFooter from './Footer';

interface BodyProps {
  header?: boolean;
  title?: string;
  head_start?: React.ReactNode;
  head_end?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Body(props: BodyProps) {
  const { header, title, head_start, head_end, children, footer, className } = props
  return (
    <main className='absolute lg:relative shadow-1 surface-card w-full h-screen'>
      {header ? <BodyHeader start={head_start} title={title} end={head_end} /> : <></>}

      <BodyMain footer={footer} className={className}>
        {children}
      </BodyMain>

      {footer ? <BodyFooter>{footer}</BodyFooter> : <></>}

    </main >
  )
}