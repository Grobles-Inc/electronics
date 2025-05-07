// Product.tsx
import { Loader } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrderStore } from '../stores/order';
import { type Product } from '../types/index'


const Product: React.FC = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useOrderStore()
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  async function fetchProduct() {
    setIsLoading(true);
    try {
      const productUrl = `https://beltecimport.store/wp-json/wp/v2/productos/${id}?acf_format=standard`;
      const response = await fetch(productUrl);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Imágenes disponibles
  const images = [
    product?.acf?.imagen_del_producto,
    product?.acf?.imagen_del_producto_2,
    product?.acf?.imagen_del_producto_3,
    product?.acf?.imagen_del_producto_4,
  ].filter(Boolean);

  // Scroll al top del carrusel al cambiar de slide
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSlide]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <Loader className="animate-spin" size={24} />
    </div>;
  }


  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto p-4">
        {/* Product Main Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Product Image */}
            <div className="relative" ref={carouselRef}>
              <div className="w-full h-full relative">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={product?.title.rendered}
                    className={`w-full h-64 md:h-96 object-contain absolute left-0 top-0 transition-opacity duration-500 ${activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    style={{ background: '#fff' }}
                    draggable={false}
                  />
                ))}
                {/* Controles */}
                {images.length > 1 && (
                  <div className="absolute flex justify-between items-center w-full top-1/2 left-0 px-2 md:px-4 -translate-y-1/2 z-20 mt-32 md:mt-0">
                    <button
                      className="btn btn-circle btn-sm md:btn-md"
                      onClick={() => setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      aria-label="Anterior"
                    >❮</button>
                    <button
                      className="btn btn-circle btn-sm md:btn-md"
                      onClick={() => setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      aria-label="Siguiente"
                    >❯</button>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col mt-64 md:mt-0">
              <h1 className="text-2xl font-bold mb-4">{product?.title.rendered}</h1>

              {/* Discount Badge */}
              {product?.acf.precio_descuento && product?.acf.precio_descuento > 0 &&
                <div className="mb-4">
                  {product?.acf?.precio_original && product?.acf?.precio_descuento && (
                    <span className="badge badge-error text-white">
                      -{Math.round(((product.acf.precio_original - product.acf.precio_descuento) / product.acf.precio_original) * 100)}%
                    </span>
                  )}
                </div>
              }

              {/* Price Information */}
              <div className="mb-4">
                {product?.acf?.precio_descuento && product?.acf?.precio_descuento > 0 ? (
                  <>
                    <div className="line-through text-gray-500">
                      S/. {product?.acf?.precio_original}
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          src="https://img.icons8.com/?size=100&id=eofZXRmqHHir&format=png&color=000000"
                          alt="Peru"
                          className="w-5 h-4 mr-2"
                        />
                        <span className="text-red-500 text-2xl font-bold">
                          S/. {product?.acf?.precio_descuento}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        src="https://img.icons8.com/?size=100&id=eofZXRmqHHir&format=png&color=000000"
                        alt="Peru"
                        className="w-5 h-4 mr-2"
                      />
                      <span className="text-red-500 text-2xl font-bold">
                        S/. {product?.acf?.precio_original}
                      </span>
                    </div>
                  </div>
                )}
              </div>



              {/* Payment Options Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">MÉTODOS DE PAGO</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://productos.tribuexcel.com/wp-content/uploads/2020/12/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos-705x210-1.png"
                      alt="Itaú"
                      className="h-6"
                    />
                    <span className="text-xs ml-2">Pago con Tarjeta</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://logosenvector.com/logo/img/banco-de-credito-bcp-82.jpg"
                      alt="Banco Basa"
                      className="h-6"
                    />
                    <span className="text-xs ml-2">Transferencia Bancaria</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSpUKjC7Qx78v8bl-a1xcveAauYNHctMm7Q&s"
                      alt="Atlas"
                      className="h-6"
                    />
                    <span className="text-xs ml-2">Pago Contraentrega</span>
                  </div>
                  <div className="flex items-center border rounded p-2">
                    <img
                      src="https://logosenvector.com/logo/img/yape-bcp-4390.jpg"
                      alt="yape"
                      className="h-8"
                    />
                    <span className="text-xs ml-2">Yape o Plin</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="flex flex-col items-center p-2 border rounded text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-xs">Compras únicamente a través de nuestros canales oficiales.</span>
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
              <button className="btn btn-error text-white w-full mb-4" onClick={() => addToCart(product!, 1)}>
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
                  {product?.acf?.especificaciones_producto.split(',').map((spec: string, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>

                      <td className="py-3 px-4">{spec.trim()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>        </div>
      </div>
    </div>
  );
};

export default Product;