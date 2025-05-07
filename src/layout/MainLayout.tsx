import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Clock, FileWarning, ShoppingBag } from 'lucide-react';
export default function MainLayout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow w-full mx-auto sm:px-10 md:px-12 lg:px-16 py-8'>
        <Outlet />
      </main>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 py-8 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        {/* Horario de atención */}
        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-xl mb-4 text-center">Horario de atención</h3>
          <Clock className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="font-light text-normal"><strong>Lunes a Viernes:</strong><br />De 06:30hs a 16:30hs.</p>
          <p className="font-light text-normal"><strong>Sábados:</strong><br />De 06:00hs a 15:00hs.</p>
        </div>

        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-xl mb-4 text-center">Atención</h3>
          <FileWarning className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="font-light text-normal">
            Las ventas online y delivery solo están habilitadas para Perú.<br />
            No somos responsables por envíos de dinero a nuestros vendedores.
          </p>
        </div>

        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-xl mb-4 text-center ">Costo de envío</h3>
          <ShoppingBag className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="font-light text-normal">
            A compras mayores a S/. 200.00 el envío es gratis.
            <br />
            Si desea que enviemos su pedido al interior del Perú, el costo del envío será de S/. 20.00 adicionales.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
