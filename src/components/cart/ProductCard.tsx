// ProductCard.tsx

import { Product } from "../../types";


interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const ProductCard = ({ product, onDelete, onQuantityChange }: ProductCardProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-4 gap-4">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />

        <div className="flex-1">
          <div className="text-sm text-gray-600">Cód.: {product.code}</div>
          <h3 className="font-medium">{product.name}</h3>
          <div className="text-red-500 font-bold mt-2">
            Gs. {product.priceGs.toLocaleString()}
            <span className="text-gray-700 ml-2">US$ {product.priceUsd.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button
            className="btn btn-sm btn-outline"
            onClick={() => onQuantityChange(product.id, Math.max(1, product.quantity - 1))}
          >
            -
          </button>
          <input
            type="text"
            className="input input-bordered w-16 mx-1 text-center"
            value={product.quantity}
            readOnly
          />
          <button
            className="btn btn-sm btn-outline"
            onClick={() => onQuantityChange(product.id, product.quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-sm btn-error text-white rounded-full flex items-center"
          onClick={() => onDelete(product.id)}
        >
          Eliminar <span className="ml-1">✕</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;