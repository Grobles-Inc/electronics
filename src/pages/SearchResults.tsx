import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    async function searchProducts() {
      try {
        const response = await fetch(`https://beltecimport.store/wp-json/wp/v2/productos?per_page=20&acf_format=standard&search=${encodeURIComponent(query || '')}`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const productos = await response.json();
        setProducts(productos);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setError('Error al obtener productos');
        toast.error('Error al cargar los resultados de búsqueda');
        setLoading(false);
      }
    }

    searchProducts();
  }, [query]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <Loader className='animate-spin text-4xl' />
          <p className='text-center text-gray-600'>Cargando resultados...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center text-red-500'>
          <p>Error al cargar los resultados de búsqueda</p>
          <p>Por favor, intenta nuevamente.</p>
        </div>
      </div>
    );
  }

  if (!query || products.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center text-gray-600'>
          <p>No se encontraron productos para "{query || 'tu búsqueda'}"</p>
          <p>Intenta con diferentes palabras clave.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resultados de Búsqueda</h1>
        <p className="text-gray-600">{products.length} producto(s) encontrado(s)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
