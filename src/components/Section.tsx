import { type Section } from '../types';
import ProductCard from './ProductCard'
import products from '../data/products.json'
export default function ProductsSection({ section }: { section: Section }) {
  return (
    <>
      <section id={section.id} className=" mx-auto  py-6" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        <h2 className="text-2xl font-bold  mb-6">{section.name}</h2>
        <div className="overflow-x-auto  flex gap-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
          {products.map((product, index) => (
            <div key={index} className="inline-block">
              <ProductCard
                product={product}
                onDelete={() => console.log(`Deleted product: ${product.code}`)}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Imágenes promocionales */}
      <div className=" mx-auto py-6" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://xiaomiperu.com/media/MISTORE_Banner_Web_13T-13C_1.jpg"
            alt="Promoción 1"
            className="w-full h-auto object-cover rounded-lg shadow"
          />
          <img
            src="https://tecstore.pe/media/amasty/bundle/frontend/TEC_STORE_Semana_3_Celulares_Banner_Web_Cat_Desktop.jpg"
            alt="Promoción 2"
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </>
  )
}
