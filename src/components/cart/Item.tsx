
import { Minus, Plus, Trash } from "lucide-react";
import { CartItem } from "../../types";

interface ItemProps {
  product: CartItem;
  onDelete: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}
const Item = ({ product, onDelete, onQuantityChange }: ItemProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4 shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow duration-200 mb-4">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <img src={product.acf.imagen_del_producto} alt={product.title.rendered} className="w-24 h-24 object-contain" />
        <div className="flex-1">
          <div className="text-sm text-gray-600">Cód.: {product.id}</div>
          <h3 className="font-medium">{product.title.rendered}</h3>
          <div className="text-red-500 font-bold mt-2">
            {product.acf.precio_descuento > 0 ? (
              <>
                S/. {Number(product.acf.precio_descuento).toFixed(2)}
                <span className="text-gray-500 text-sm line-through ml-2">
                  S/. {Number(product.acf.precio_original).toFixed(2)}
                </span>
              </>
            ) : (
              <>
                S/. {Number(product.acf.precio_original).toFixed(2)}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-4">
        <div className="flex items-center">
          <button
            className="btn btn-sm btn-outline"
            disabled={product.quantity <= 1}
            onClick={() => onQuantityChange(product.id.toString(), product.quantity - 1)}
          >
            <Minus size={20} />
          </button>
          <input
            type="text"
            className="w-12 mx-1 text-2xl font-bold text-center"
            value={product.quantity}
            readOnly
          />
          <button
            className="btn btn-sm btn-outline"
            onClick={() => onQuantityChange(product.id.toString(), product.quantity + 1)}
          >
            <Plus size={20} />
          </button>
        </div>

        <button
          className="btn btn-sm btn-error text-white rounded-full flex items-center"
          onClick={() => onDelete(product.id.toString())}
        >
          <Trash size={18} />
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Item;