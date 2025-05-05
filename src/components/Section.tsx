import { type Section } from '../types';
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../stores/product';

export default function ProductsSection({ section }: { section: Section }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { products, loading, error } = useProductStore();
  const [categoryProducts, setCategoryProducts] = useState([]);
  
  const handleSeeAll = () => {
    navigate(`/${section.id}`);
  };

  // Función para obtener productos por categoría directamente desde WordPress
  const fetchProductsByCategory = async () => {
    if (!section.id || section.id === 'ofertas-del-dia') return;
    
    setIsLoading(true);
    try {
      // Verificar que la URL termina correctamente
      const baseUrl = import.meta.env.VITE_WORDPRESS_URL.endsWith('/') 
        ? import.meta.env.VITE_WORDPRESS_URL 
        : `${import.meta.env.VITE_WORDPRESS_URL}/`;
        
      const response = await fetch(
        `${baseUrl}wp-json/wc/v3/products?category=${section.id}&per_page=10`,
        {
          headers: {
            'Authorization': 'Basic ' + btoa(
              `${import.meta.env.VITE_CLAVE_CLIENTE}:${import.meta.env.VITE_CLAVE_SECRETA}`
            ),
            'Accept': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Error fetching products for category ${section.id}`);
      }
      
      const data = await response.json();
      
      // Transformar los datos al formato que espera ProductCard
      const formattedProducts = data.map(product => ({
        id: product.id.toString(),
        name: product.name,
        code: product.sku || product.id.toString(),
        categoryId: section.id,
        originalPrice: parseFloat(product.regular_price || product.price || '0'),
        discountPrice: product.sale_price ? parseFloat(product.sale_price) : undefined,
        stock: product.stock_status === 'instock',
        image: product.images && product.images.length > 0 ? product.images[0].src : 'https://via.placeholder.com/150',
      }));
      
      setCategoryProducts(formattedProducts);
    } catch (error) {
      console.error(`Error loading products for category ${section.name}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para obtener ofertas del día
  const fetchDealsOfDay = async () => {
    if (section.id !== 'ofertas-del-dia') return;
    
    setIsLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_WORDPRESS_URL.endsWith('/') 
        ? import.meta.env.VITE_WORDPRESS_URL 
        : `${import.meta.env.VITE_WORDPRESS_URL}/`;
        
      const response = await fetch(
        `${baseUrl}wp-json/wc/v3/products?on_sale=true&per_page=10`,
        {
          headers: {
            'Authorization': 'Basic ' + btoa(
              `${import.meta.env.VITE_CLAVE_CLIENTE}:${import.meta.env.VITE_CLAVE_SECRETA}`
            ),
            'Accept': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error("Error fetching deals of the day");
      }
      
      const data = await response.json();
      
      // Transformar los datos de ofertas
      const formattedDeals = data.map(product => ({
        id: product.id.toString(),
        name: product.name,
        code: product.sku || product.id.toString(),
        categoryId: 'ofertas',
        originalPrice: parseFloat(product.regular_price || product.price || '0'),
        discountPrice: product.sale_price ? parseFloat(product.sale_price) : undefined,
        stock: product.stock_status === 'instock',
        image: product.images && product.images.length > 0 ? product.images[0].src : 'https://via.placeholder.com/150',
      }));
      
      setCategoryProducts(formattedDeals);
    } catch (error) {
      console.error("Error loading deals of the day:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (section.id === 'ofertas-del-dia') {
      fetchDealsOfDay();
    } else {
      fetchProductsByCategory();
    }
  }, [section.id]);

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
          ) : categoryProducts.length > 0 ? (
            categoryProducts.map((product) => (
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
