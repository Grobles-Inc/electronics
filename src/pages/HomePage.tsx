import Carousel from '../components/Carousel';
import ProductsSection from '../components/Section';
const categories = [
  { name: 'Electrónicos', section: '#electronicos', id: 'electronicos' },
  { name: 'Telefonía', section: '#telefonia', id: 'telefonia' },
  { name: 'Informatica', section: '#informatica', id: 'informatica' },
  { name: 'Hogar y Cocina', section: '#hogar', id: 'hogar' },
  { name: 'Perfumería y Cosméticos', section: '#perfumeria-cosmeticos', id: 'perfumeria-cosmeticos' },
  { name: 'Salud y Belleza', section: '#salud-belleza', id: 'salud-belleza' },
] as const; // Ensure type safety with const assertion


export default function HomePage() {

  return (
    <div >
      <Carousel />
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=51910959065&text=Hola%21%20Quiero%20hacer%20un%20pedido"
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
      {categories.map(({ name, section, id }) => (
        <ProductsSection key={section} section={{
          id,
          name,
        }} />
      ))}

    </div>
  )
}
