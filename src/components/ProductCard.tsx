import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product
  onDelete: (productId: number) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="cursor-pointer border-[0.5px] border-gray-300 rounded-xl overflow-hidden p-4 text-center w-[230px]  bg-white hover:shadow-lg transition-all">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <p className="text-red-600 font-[1000] text-lg">S/. {product.discountPrice ? product.discountPrice.toFixed(2) : product.originalPrice.toFixed(2)}</p>
      <p className=" text-[13px] font-medium text-gray-800 mb-2">{product.name}</p>
      <Link to={`/producto/${product.code}`} className={`inline-block text-sm my-6 font-medium px-3 py-1 rounded ${product.stock ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
        {product.stock ? 'En stock' : 'Sin stock'}
      </Link>
      <p className="text-gray-800 font-bold text-xs mt-2">Cód. {product.code}</p>
    </div>
  );
};

export default ProductCard;