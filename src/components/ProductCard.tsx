import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    code: string;
    name: string;
    priceGs: number;
    priceUsd: number;
    quantity: number;
    image: string;
  };
  onDelete: (productId: number) => void;
  onQuantityChange: (productId: number, newQuantity: number) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product: { image, priceGs, priceUsd, name, quantity: stock, code } }) => {
  return (
    <div className="cursor-pointer border-[0.5px] border-gray-300 rounded-xl overflow-hidden p-4 text-center w-[230px]  bg-white hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
      <p className="text-red-600 font-[1000] text-lg">Gs. {priceGs.toLocaleString()}</p>
      <p className=" font-black text-sm mb-2">U$ {priceUsd.toFixed(2)}</p>
      <p className=" text-[13px] font-medium text-gray-800 mb-2">{name}</p>
      <span className={`inline-block text-sm my-6 font-medium px-3 py-1 rounded ${stock ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
        {stock ? 'En stock' : 'Sin stock'}
      </span>
      <p className="text-gray-800 font-bold text-xs mt-2">Cód. {code}</p>
    </div>
  );
};

export default ProductCard;