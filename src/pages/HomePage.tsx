import { Home, Smartphone, Sparkles, Tv } from 'lucide-react';
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
    <div >
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

    </div>
  )
}
