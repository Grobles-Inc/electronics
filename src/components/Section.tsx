import { useNavigate } from 'react-router-dom';
import { type Section } from '../types';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import toast from 'react-hot-toast';
import { Loader } from 'lucide-react';

export default function ProductsSection({ section }: { section: Section }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(`https://beltecimport.store/wp-json/wp/v2/productos?per_page=20&acf_format=standard`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const productos = await response.json();
      setProducts(productos);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setError('Error al obtener productos');
      setLoading(false);
    }
  }
  const handleSeeAll = () => {
    navigate(`/${section.id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <Loader className='animate-spin' size={24} />
        <p className='text-center text-gray-600'>Cargando productos...</p>
      </div>
    </div>;
  }

  if (error) {
    return toast.error(error);
  }

  return (
    <div>
      <section id={section.id} className=" mx-auto  py-6" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl  font-bold  pl-4 md:px-0">{section.name}</h2>
          <button className="btn btn-link btn-sm btn-success" onClick={handleSeeAll}>Ver todos</button>
        </div>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
          {products.length > 0 ? (
            products.slice(0, 5).map((product: Product) => (
              <div key={product.id} className="inline-block">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-24">
              <p className="text-gray-500">No hay productos disponibles en esta categoría</p>
            </div>
          )}
        </div>
      </section>
      {/* Imágenes promocionales */}
      <div className=" mx-auto py-6" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
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
    </div>
  )
}
