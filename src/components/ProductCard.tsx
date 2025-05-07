import React from 'react';
import { Link } from 'react-router-dom';
import { type Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const hasDiscount = product?.acf?.precio_descuento && Number(product?.acf?.precio_descuento) > 0;
  const discountPercent = hasDiscount
    ? Math.round(((Number(product.acf.precio_original) - Number(product.acf.precio_descuento)) / Number(product.acf.precio_original)) * 100)
    : 0;

  return (
    <Link to={`/producto/${product?.id}`}>
      <div className="cursor-pointer border-[0.5px] border-gray-300 rounded-xl overflow-hidden p-4 text-center w-[230px] bg-white hover:shadow-lg transition-all active:opacity-70 hover:opacity-70 relative">
        {/* Badge de descuento */}
        {hasDiscount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow">
            -{discountPercent}%
          </span>
        )}
        <img src={product?.acf?.imagen_del_producto} alt={product?.title.rendered} className="w-full h-48 object-contain mb-4" />
        {hasDiscount ? (
          <>
            <p className="text-red-600 font-[1000] text-lg">S/. {Number(product.acf.precio_descuento).toFixed(2)}</p>
            <p className="text-gray-500 text-sm line-through">S/. {Number(product.acf.precio_original).toFixed(2)}</p>
          </>
        ) : (
          <p className="text-red-600 font-[1000] text-lg">S/. {Number(product.acf.precio_original).toFixed(2)}</p>
        )}
        <p className=" text-[13px] font-medium text-gray-800 mb-2">{product?.title.rendered}</p>
        <span className={`inline-block text-sm my-6 font-medium px-3 py-1 rounded ${product?.acf?.en_stock ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
          {product?.acf?.en_stock ? 'En stock' : 'Sin stock'}
        </span>
        <p className="text-gray-800 font-bold text-xs mt-2">Cód. {product?.id}</p>
      </div>
    </Link>
  );
};

export default ProductCard;