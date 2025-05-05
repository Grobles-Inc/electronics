import Carousel from '../components/Carousel'
import { Tv, Smartphone, Home, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { FaClock, FaHeadset, FaShoppingBag } from 'react-icons/fa';

export default function HomePage() {

  const products = [
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity

    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },
    {
      image: 'https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp',
      priceGs: 3969802,
      priceUsd: 498.41,
      name: 'Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67" 64+8+2MP 16MP - Azul (Global)',
      stock: true,
      code: '1461879',
      id: Math.random(), // Assign a unique ID
      quantity: 1, // Default quantity
    },

    // Puedes agregar más productos...
  ];

  const categories = [
    { name: 'Belleza', icon: <Sparkles size={24} />, bg: '#fde2e2' },
    { name: 'Electrónica', icon: <Tv size={24} />, bg: '#e2f0fd' },
    { name: 'Informática', icon: <Home size={24} />, bg: '#e2fde6' },
    { name: 'Perfumería', icon: <Sparkles size={24} />, bg: '#f9e2fd' },
    { name: 'Telefonía', icon: <Smartphone size={24} />, bg: '#e2e6fd' },
    { name: 'Sonido y Audio', icon: <Tv size={24} />, bg: '#fdfde2' },
  ];
  return (
    <>
      <Carousel />
      {/* Categorías */}
      <div className="container mx-auto  py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-lg shadow bg-white hover:shadow-md cursor-pointer">
              <div className="p-4 rounded-full mb-2" style={{ backgroundColor: cat.bg }}>
                {cat.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ofertas del día */}
      <section className=" mx-auto  py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas del día</h2>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent no-scrollbar">
          {products.map((product, index) => (
            <div key={index} className="inline-block">
              <ProductCard 
                product={product} 
                onDelete={() => console.log(`Deleted product: ${product.code}`)} 
                onQuantityChange={(quantity) => console.log(`Quantity changed for product ${product.code}: ${quantity}`)} 
              />
            </div>
          ))}
        </div>
      </section>
      {/* Imágenes promocionales */} 
      <div className=" mx-auto py-6">
        <div className="grid grid-cols-2 gap-4">
          <img 
        src="https://xiaomiperu.com/media/MISTORE_Banner_Web_13T-13C_1.jpg" 
        alt="Promoción 1" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
          <img 
        src="https://tecstore.pe/media/amasty/bundle/frontend/TEC_STORE_Semana_3_Celulares_Banner_Web_Cat_Desktop.jpg" 
        alt="Promoción 2" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>
       {/* Ofertas del día */}
       <section className=" mx-auto  py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas del día</h2>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent no-scrollbar">
         {products.map((product, index) => (
            <div key={index} className="inline-block">
              <ProductCard 
                product={product} 
                onDelete={() => console.log(`Deleted product: ${product.code}`)} 
                onQuantityChange={(quantity) => console.log(`Quantity changed for product ${product.code}: ${quantity}`)} 
              />
            </div>
          ))}
        </div>
      </section>
      {/* Imágenes promocionales */} 
      <div className=" mx-auto py-6">
        <div className="grid grid-cols-2 gap-4">
          <img 
        src="https://xiaomiperu.com/media/MISTORE_Banner_Web_13T-13C_1.jpg" 
        alt="Promoción 1" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
          <img 
        src="https://tecstore.pe/media/amasty/bundle/frontend/TEC_STORE_Semana_3_Celulares_Banner_Web_Cat_Desktop.jpg" 
        alt="Promoción 2" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>
       {/* Ofertas del día */}
       <section className=" mx-auto  py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas del día</h2>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent no-scrollbar">
          {products.map((product, index) => (
            <div key={index} className="inline-block">
              <ProductCard 
                product={product} 
                onDelete={() => console.log(`Deleted product: ${product.code}`)} 
                onQuantityChange={(quantity) => console.log(`Quantity changed for product ${product.code}: ${quantity}`)} 
              />
            </div>
          ))}
        </div>
      </section>
      {/* Imágenes promocionales */} 
      <div className=" mx-auto py-6">
        <div className="grid grid-cols-2 gap-4">
          <img 
        src="https://xiaomiperu.com/media/MISTORE_Banner_Web_13T-13C_1.jpg" 
        alt="Promoción 1" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
          <img 
        src="https://tecstore.pe/media/amasty/bundle/frontend/TEC_STORE_Semana_3_Celulares_Banner_Web_Cat_Desktop.jpg" 
        alt="Promoción 2" 
        className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 py-8 bg-gray-100">
      {/* Horario de atención */}
      <div className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg w-full">
        <h3 className="font-semibold text-lg mb-4">Horario de atención</h3>
        <FaClock className="text-red-600 text-6xl mb-4" />
        <p className="text-sm text-gray-600">Lunes a Viernes:<br />De 06:30hs a 16:30hs.</p>
        <p className="text-sm text-gray-600">Sábados:<br />De 06:00hs a 15:00hs.</p>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg w-full">
        <h3 className="font-semibold text-lg mb-4">Atención</h3>
        <FaHeadset className="text-red-600 text-6xl mb-4" />
        <p className="text-sm text-gray-600">
          Las ventas online y delivery solo están habilitadas para Paraguay, no tenemos cuentas bancárias en Brasil.<br />
          No somos responsables por envíos de dinero a nuestros vendedores.
        </p>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg w-full">
        <h3 className="font-semibold text-lg mb-4">Retirar mi compra</h3>
        <FaShoppingBag className="text-red-600 text-6xl mb-4" />
        <p className="text-sm text-gray-600">
          El horario asignado para el retiro de compras realizadas a través de este sitio web es de:<br />
          Lunes a Viernes:<br />De 06:30hs a 16:30hs.<br />
          Sábados:<br />De 06:00hs a 15:00hs.
        </p>
      </div>
    </div>
    </>
  )
}
