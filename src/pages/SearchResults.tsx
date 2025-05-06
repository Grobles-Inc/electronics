import { Loader } from 'lucide-react';
import { use, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

async function fetchSearchResults(query: string | null, searchProducts: (query: string) => Promise<void>) {
  if (query) {
    await searchProducts(query);
  }
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  async function searchProducts(query: string) {
    setLoading(true);
    try {
      const response = await fetch(`https://beltecimport.store/wp-json/wp/v2/productos?per_page=20&acf_format=standard&search=${query}`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const productos = await response.json();
      const mappedProducts = productos.map((product: Product) => ({
        id: product.id,
        title: product.title.rendered,
        content: product.content.rendered,
        price: product.acf?.precio_original || 0,
        discountPrice: product.acf?.precio_descuento || 0,
        inStock: product.acf?.en_stock || false,
        images: product.acf?.imagen_del_producto || [],
        slug: product.slug,
      }));
      setProducts(mappedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setError('Error al obtener productos');
      setLoading(false);
    }
  }

  use(fetchSearchResults(query, searchProducts));

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
      <h1 className="text-3xl font-bold mb-8">Resultados de la búsqueda: {query}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
