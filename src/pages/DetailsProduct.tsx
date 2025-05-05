import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 font-sans">
      {/* Primera sección (segunda imagen) - Especificaciones */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Especificaciones</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 uppercase">VÍDEO</h3>
            <p className="text-gray-600 mt-1">Cedited máximo de captura: 4K Ultra HD a 24 fps</p>
            
            <h3 className="font-semibold text-gray-700 uppercase mt-4">CÁMARA</h3>
            <p className="text-gray-600 mt-1">
              Principal Triple: Wide de 50MP I/1.5, Ultra Wide de 8MP I/2.2 y Macro 2MP I/2.4 *<br />
              Cámara Frontal de 20MP I/2.2
            </p>
            
            <h3 className="font-semibold text-gray-700 uppercase mt-4">MARCA</h3>
            <p className="text-gray-600 mt-1">Xiaomi</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700 uppercase">MODELO</h3>
            <p className="text-gray-600 mt-1">POCO X7 (Global)</p>
            
            <h3 className="font-semibold text-gray-700 uppercase mt-4">BATERÍA</h3>
            <p className="text-gray-600 mt-1">S.ID mAh</p>
            
            <h3 className="font-semibold text-gray-700 uppercase mt-4">PROCESADOR CPU</h3>
            <p className="text-gray-600 mt-1">
              Medial de Dimensión 7300 Ultra (4 nm) Octa Core (Quad Core de 2.5GHz + Quad Core de 2.0GHz)
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 uppercase">GPU</h3>
          <p className="text-gray-600 mt-1">ABM Multi-6BIS MC2</p>
          
          <h3 className="font-semibold text-gray-700 uppercase mt-4">FRECUENCIA 2G</h3>
          <p className="text-gray-600 mt-1">GSM: 850, 900, 1800, 1900 MHz</p>
          
          <h3 className="font-semibold text-gray-700 uppercase mt-4">SISTEMA OPERATIVO</h3>
          <p className="text-gray-600 mt-1">Android 14 + HyperOS L0</p>
          
          <h3 className="font-semibold text-gray-700 uppercase mt-4">PANTALLA</h3>
          <p className="text-gray-600 mt-1">
            Crystallites de 6.87" LSK, AMOLED con Tecnología Dolby Vision, HDR10+ y protección Corning Gorilla Glass Victus 2
          </p>
          
          <h3 className="font-semibold text-gray-700 uppercase mt-4">TAXA DE ATUALIZACIÓN</h3>
          <p className="text-gray-600 mt-1">120Hz</p>
          
          <h3 className="font-semibold text-gray-700 uppercase mt-4">FRECUENCIA 3G</h3>
          <p className="text-gray-600 mt-1">WCDMA: 1(200), 2(1900), 4(1700), 5(850), 6(900), 10(800) MHz</p>
        </div>
      </section>

      {/* Segunda sección (primera imagen) - Cotización */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Cotizaciones</h1>
        
        <div className="flex gap-3 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">7,965</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">5.78</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">1,800</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">0.90</span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Smartphone Xiaomi POCO X7 NFC Dual SIM 256GB 8GB RAM de 6.67" 50+8+2MP 20MP – Plata (Global)
        </h2>
        
        <div className="mb-6">
          <p className="text-3xl font-bold text-red-600">Gs. 2.032.273</p>
          <p className="text-lg text-gray-600">US 255.15</p>
        </div>
        
        <div className="bg-green-100 border-l-4 border-green-500 p-3 mb-6">
          <h3 className="font-bold text-green-800">¡CUOTAS SIN INTERES!</h3>
        </div>
        
        <div className="bg-blue-50 p-4 rounded mb-6">
          <p className="font-medium text-gray-700">Configuración del documento con CL a pasaporte.</p>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Consulta la extensión al momento de la compra.</li>
            <li>Impuestos incluidos una práctica pueden variar sin previo aviso.</li>
          </ul>
        </div>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded transition-colors mb-6">
          Agregar al carrito
        </button>
        
        <div className="border-t pt-4">
          <p className="text-gray-700 font-medium">Calcule tu envía:</p>
          {/* Espacio para el selector/calculadora de envío */}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;