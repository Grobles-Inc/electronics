// Product.tsx
import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useOrderStore } from '../stores/order';
import { type Product } from '../types';
import toast from "react-hot-toast";


const Product: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useOrderStore()

  const product = {
    id: "1",
    categoryId: "electronicos",
    code: "1461879",
    tags: ["Hidratante Corporal", "St Ives"],
    name: "Loción Hidratante St. Ives Soothing 200 ml",
    image: "https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp",
    discountPrice: 44,
    discount: 28,
    originalPrice: 50,
    stock: true,
    specifications: [
      { label: "MARCA", value: "St. Ives" },
      { label: "MODELO", value: "Soothing" },
      { label: "PESO LÍQUIDO", value: "200 ml" },
      { label: "CARACTERÍSTICAS", value: "Desarrollado con avena y manteca de karité - Libre de Parabenos" },
      { label: "PESO BRUTO (g)", value: "230" },
      { label: "DIMENSIONES DE EMBALAJE (cm)", value: "6.3 x 3.7 x 16.5" },
      { label: "INDICACIÓN", value: "Puede ser usado en todos los tipos de piel" }
    ]
  };




  // Productos de la misma categoría
  const sameCategoryProducts: Product[] = [
    {
      id: "8",
      categoryId: "electronicos",
      code: "1461879",
      name: "Smartphone Xiaomi POCO X6 5G NFC Dual SIM de 256GB 8GB RAM de 6.67\" 64+8+2MP 16MP - Azul (Global)",
      image: "https://resource.megaeletronicos.com/uploads/Product/new/1/4/1/6/6/9/141669/1725618551_1725618551.webp",
      originalPrice: 3969802,
      stock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto p-4">
        {/* Product Main Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

              {/* Discount Badge */}
              <div className="mb-4">
                <span className="badge badge-error text-white">-{product.discount}%</span>
              </div>

              {/* Price Information */}
              <div className="mb-4">
                <div className="line-through text-gray-500">
                  S/. {product.originalPrice.toFixed(2)}
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=eofZXRmqHHir&format=png&color=000000"
                      alt="Peru"
                      className="w-5 h-4 mr-2"
                    />
                    <span className="text-red-500 text-2xl font-bold">
                      S/. {product.discountPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>

              {/* Payment Options Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">TRANSFERENCIA & YAPE</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=11079&format=png&color=000000"
                      alt="Itaú"
                      className="h-8"
                    />
                    <span className="text-xs ml-2">hasta 18 cuotas</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=11079&format=png&color=000000"
                      alt="Banco Basa"
                      className="h-8"
                    />
                    <span className="text-xs ml-2">hasta 18 cuotas</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=11079&format=png&color=000000"
                      alt="Atlas"
                      className="h-8"
                    />
                    <span className="text-xs ml-2">hasta 12 cuotas</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=11081&format=png&color=000000"
                      alt="yape"
                      className="h-8"
                    />
                    <span className="text-xs ml-2">999 999 999</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="flex flex-col items-center p-2 border rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-xs">Compras únicamente con C.I. o pasaporte.</span>
                </div>

                <div className="flex flex-col items-center p-2 border rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">Consulte la cotización al momento de la compra.</span>
                </div>

                <div className="flex flex-col items-center p-2 border rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-xs">Impuestos incluidos - los precios pueden variar sin previo aviso.</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="btn btn-error text-white w-full mb-4" onClick={() => { addToCart(product, 1); toast.success("Producto agregado al carrito") }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Agregar al carrito
              </button>


            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Especificaciones</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-3 px-4 font-semibold">{spec.label}</td>
                      <td className="py-3 px-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>




        {/* Same Category Products */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Productos de la misma categoría</h2>
              <a href={`/#${product.categoryId}`} className="text-sm text-blue-500 hover:underline">Ver más ›</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {sameCategoryProducts.map((product) => (
                <ProductCard key={product.id} product={{ ...product, stock: true, originalPrice: product.originalPrice }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;