import { Clock, FileWarning, Home, ShoppingBag, Smartphone, Sparkles, Tv } from 'lucide-react';
import Carousel from '../components/Carousel';
import ProductsSection from '../components/Section';


const categories = [
  { name: 'Electrónicos', section: 'electronicos', icon: <Tv size={18} className="mr-2" /> },
  { name: 'Telefonía', section: 'telefonia', icon: <Smartphone size={18} className="mr-2" /> },
  { name: 'Casa, Hogar y Tendencias', section: 'hogar-cocina', icon: <Home size={18} className="mr-2" /> },
  { name: 'Perfumería y Cosméticos', section: 'perfumeria-cosmeticos', icon: <Sparkles size={18} className="mr-2" /> },
];
export default function HomePage() {
  return (
    <>
      <Carousel />
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=595981123456&text=Hola%21%20Quiero%20hacer%20un%20pedido"
        className="fixed bottom-4 right-4 z-10"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div className="bg-green-500 rounded-full p-3 shadow-lg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" className="w-8 h-8" />
        </div>
      </a>
      <ProductsSection section={{
        id: 'ofertas-del-dia',
        name: 'Ofertas del Día',
      }} />
      {categories.map(({ name, section }) => (
        <ProductsSection key={section} section={{
          id: section,
          name,
        }} />
      ))}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 py-8 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        {/* Horario de atención */}
        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-lg mb-4 text-center">Horario de atención</h3>
          <Clock className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="text-sm "><strong>Lunes a Viernes:</strong><br />De 06:30hs a 16:30hs.</p>
          <p className="text-sm "><strong>Sábados:</strong><br />De 06:00hs a 15:00hs.</p>
        </div>

        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-lg mb-4 text-center">Atención</h3>
          <FileWarning className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="text-sm ">
            Las ventas online y delivery solo están habilitadas para Paraguay, no tenemos cuentas bancárias en Brasil.<br />
            No somos responsables por envíos de dinero a nuestros vendedores.
          </p>
        </div>

        <div className="flex flex-col px-12  border border-gray-300 p-6 rounded-lg w-full min-h-[300px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <h3 className="font-semibold text-lg mb-4 text-center ">Retirar mi compra</h3>
          <ShoppingBag className="text-red-600 mb-4 mx-auto" size={44} />
          <p className="text-sm ">
            El horario asignado para el retiro de compras realizadas a través de este sitio web es de:<br />
            <strong>Lunes a Viernes:</strong><br />De 06:30hs a 16:30hs.<br />
            <strong>Sábados:</strong><br />De 06:00hs a 15:00hs.
          </p>
        </div>
      </div>
    </>
  )
}
