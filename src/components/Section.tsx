import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../stores/product';
import { type Section } from '../types';
import ProductCard from './ProductCard';

export default function ProductsSection({ section }: { section: Section }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { searchByCategoryID, products } = useProductStore();

  const fetchProductsByCategory = useCallback(async () => {
    if (!section.id || section.id === 'telefonos') return;
    setIsLoading(true);
    try {
      await searchByCategoryID(section.id);
    } catch (error) {
      console.error(`Error loading products for category ${section.name}:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [section.id, section.name, searchByCategoryID]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [section.id]);

  const handleSeeAll = () => {
    navigate(`/${section.id}`);
  };

  return (
    <div>
      <section id={section.id} className=" mx-auto  py-6" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl  font-bold  pl-4 md:px-0">{section.name}</h2>
          <button className="btn btn-link btn-sm btn-success" onClick={handleSeeAll}>Ver todos</button>
        </div>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-24">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : products.length > 0 ? (
            products.slice(0, 5).map((product) => (
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
