import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';




export default function Products() {
  const { category } = useParams<{ category?: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(`https://beltecimport.store/wp-json/wp/v2/productos?&acf_format=standard`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const productos = await response.json();
      setAllProducts(productos);

      // Filter products only if category is provided
      if (category) {
        const filteredProducts = productos.filter((product: Product) => {
          const normalize = (str: string) =>
            str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

          const productCategory = product.acf?.categoria || '';
          return normalize(productCategory) === normalize(category);
        });
        setProducts(filteredProducts);
      } else {
        setProducts(productos);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setError('Error al obtener productos');
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <Loader className='animate-spin text-4xl text-primary' />
          <p className='text-center text-gray-600'>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    toast.error('Error al cargar los productos');
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-center text-red-500'>Error al cargar los productos. Por favor, intenta nuevamente.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{products[0].acf?.categoria.toUpperCase()}</h1>
        <p className="text-gray-600">{products.length} productos encontrados</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
