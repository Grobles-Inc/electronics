import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type MainLayoutProps = {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flew-grow container mx-auto px-4 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
