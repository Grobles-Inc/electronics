import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';



export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flew-grow container mx-auto px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
