import { Loader } from 'lucide-react';
import { use } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProductStore } from '../stores/product';

async function fetchProducts(category: string, searchByCategoryID: (id: string) => Promise<void>) {
  await searchByCategoryID(category);
}

export default function Products() {
  const { category } = useParams();
  const { products, loading, error, searchByCategoryID } = useProductStore();

  use(fetchProducts(category!, searchByCategoryID));

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
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
