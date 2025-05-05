// Cart.tsx
import { CreditCard, Heart, LogOut, ShoppingBag, Truck } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../components/cart/ProductCard';

export default function Cart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      code: "335782",
      name: "Pen Drive de 32GB SanDisk Cruzer Blade SDCZ50-032G-B35 USB 2.0 - Negro/Rojo",
      priceGs: 26434,
      priceUsd: 3.32,
      quantity: 1,
      image: "https://resource.megaeletronicos.com//uploads/Product/3/3/3/3/3/3/5/7/8/2/3333335782-thickbox_default.webp"
    },
    {
      id: 2,
      code: "1364781",
      name: "Receptor FTA Audisat K50 Revuelto Full HD IPTV con Wi-Fi - Negro/Rojo",
      priceGs: 549519,
      priceUsd: 68.99,
      quantity: 1,
      image: "https://resource.megaeletronicos.com//uploads/Product/3/3/3/3/3/3/5/7/8/2/3333335782-thickbox_default.webp"
    }
  ]);

  const handleDelete = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    ));
  };

  // Calculate total
  const totalGs = products.reduce((sum, product) => sum + (product.priceGs * product.quantity), 0);
  const totalUsd = products.reduce((sum, product) => sum + (product.priceUsd * product.quantity), 0);

  return (
    <div className="min-h-screen">
      <div className=" px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Menú</h2>
            <div className=" shadow rounded-lg p-4">
              <ul className="menu">
                <li><a className="flex items-center gap-2"><CreditCard size={24} /> Mis tarjetas</a></li>
                <li><a className="flex items-center gap-2"><ShoppingBag size={24} /> Mis compras</a></li>
                <li><a className="flex items-center gap-2"><Truck size={24} /> Seguimiento de pedido</a></li>
                <li><a className="flex items-center gap-2"><Heart size={24} /> Mis favoritos</a></li>
                <li><a className="flex items-center gap-2"><LogOut size={24} /> Cerrar sesión</a></li>
              </ul>
            </div>
          </div>

          {/* Cart content */}
          <div className="lg:col-span-3">
            <div className=" shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Información del producto</h2>

              <div className="space-y-4">
                {products.map(product => (
                  <ProductCard
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
                  <div className="text-lg font-bold">US$ {totalUsd.toFixed(2)}</div>
                  <div className="text-2xl font-bold text-red-500">Gs. {totalGs.toLocaleString()}</div>
                </div>
              </div>

              {/* Checkout buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
                <div className="text-lg self-center mr-4">Para comprar:</div>
                <button className="btn btn-primary">Ingresar</button>
                <div className="self-center">o</div>
                <button className="btn btn-info text-white">Registrarse ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

