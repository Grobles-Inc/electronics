import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow container mx-auto px-8 sm:px-10 md:px-12 lg:px-16 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
