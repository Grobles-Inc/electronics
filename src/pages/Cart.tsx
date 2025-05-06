import { ArrowLeft, CreditCard, ShoppingBag, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Item from '../components/cart/Item';
import { useOrderStore } from '../stores/order';
import { formatWhatsappOrder } from '../utils/whatsapp';

export default function Cart() {
  const { items: products, removeFromCart, updateQuantity, clearCart } = useOrderStore()
  const navigate = useNavigate()

  const handleDelete = (productId: string) => {
    removeFromCart(productId)
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  };

  const totalPrice = products.reduce((sum, product) => sum + (product.acf.precio_descuento ? product.acf.precio_descuento : product.acf.precio_original) * product.quantity, 0);

  const handleFinalizarCompra = () => {
    if (products.length === 0) {
      alert('Tu carrito está vacío. Añade productos antes de finalizar la compra.');
      return;
    }

    const whatsappUrl = formatWhatsappOrder({
      items: products.map(product => ({
        name: product.title.rendered || 'Producto sin nombre',
        quantity: product.quantity,
        price: product.acf.precio_descuento ? product.acf.precio_descuento : product.acf.precio_original
      })),
      total: totalPrice
    });

    window.open(whatsappUrl, '_blank');
  };

  return (

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold mb-6">Menú</h2>
        <div className=" shadow rounded-lg p-4">
          <ul className="menu space-y-2">
            <li><a className="flex items-center gap-2"><CreditCard size={24} /> Mis tarjetas</a></li>
            <li><a className="flex items-center gap-2"><ShoppingBag size={24} /> Mis compras</a></li>
            <li><button className="btn btn-outline btn-error btn-sm" onClick={() => { clearCart(); navigate('/') }}>
              <Trash size={18} />
              Vaciar carrito</button></li>
          </ul>
        </div>
      </div>

      {/* Cart content */}
      <div className="lg:col-span-3">
        <div className=" shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Productos Agregados</h2>

          <div className="space-y-4">
            {products.map(product => (
              <Item
                key={product.id}
                product={product}
                onDelete={handleDelete}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <h3 className="text-xl font-bold">Total</h3>
            <div className="text-right">
              <div className="text-lg font-bold">S/. {totalPrice.toFixed(2)}</div>
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-2 my-10 btn-xl">
          <button 
            className="btn btn-accent btn-lg rounded-xl" 
            onClick={handleFinalizarCompra}
            disabled={products.length === 0}
          >
            Finalizar Compra
          </button>
          <button className="btn btn-link btn-sm" onClick={() => navigate('/')}>
            <ArrowLeft size={18} />
            Continuar comprando
          </button>
        </div>
      </div>
    </div>


  );
};

