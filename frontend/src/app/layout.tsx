import { ProviderGlobal } from "@/provider";
import '@/assets/styles/globals.css';
import { Metadata } from 'next';
import 'primereact/resources/themes/soho-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Head from "./head";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Criado por Loan'
}

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <ProviderGlobal>
      <html lang="pt-BR">
        <Head />
        <body className="flex col-12 m-0 p-0">
          <Header />
          <div className="w-full">
            {children}
          </div>
        </body>
      </html>
    </ProviderGlobal>
  )
}
