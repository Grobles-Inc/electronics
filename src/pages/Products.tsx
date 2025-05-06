import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';



export default function Products() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);


  async function getProductsByCategory() {
    setLoading(true);
    try {
      const response = await fetch(`https://beltecimport.store/wp-json/wp/v2/productos?per_page=20&acf_format=standard`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const productos = await response.json();
      const filteredProducts = productos.filter((product: Product) => product.acf?.categoria === category!);
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setError('Error al obtener productos');
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductsByCategory();
  }, [category]);

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category!}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
