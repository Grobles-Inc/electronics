import { FaFacebookF, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003c88] text-white py-10 text-[200px]">
      <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center">
        <div>
          <h3 className="font-[1000] mb-8 ">Perú</h3>
          <p>(045) 3528-9053 - (045) 3528-8462</p>
          <p>(045) 3025-7072 - (045) 3025-7736</p>
          <div className="flex justify-between mt-10">
            <a
              href="#"
              className="bg-white text-[#003c88] p-3 rounded-full hover:bg-gray-200 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-[#003c88] p-3 rounded-full hover:bg-gray-200 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-[#003c88] p-3 rounded-full hover:bg-gray-200 transition"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="#"
              className="bg-white text-[#003c88] p-3 rounded-full hover:bg-gray-200 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        

        {/* Institucional */}
        <div>
          <h3 className="font-bold mb-8">Institucional</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Sobre Mega</a></li>
            <li><a href="#" className="hover:underline">Políticas de privacidad</a></li>
            <li><a href="#" className="hover:underline">Políticas de garantía</a></li>
            <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
            <li><a href="#" className="hover:underline">Políticas de devolución</a></li>
            <li><a href="#" className="hover:underline">Trabaje con nosotros</a></li>
          </ul>
        </div>

        {/* Páginas */}
        <div>
          <h3 className="font-bold mb-8">Páginas</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Refurbished</a></li>
            <li><a href="#" className="hover:underline">Nuestras Marcas</a></li>
          </ul>
        </div>

        {/* Cliente */}
        <div>
          <h3 className="font-bold mb-8">Área del cliente</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">¿Qué es el RTU?</a></li>
            <li><a href="#" className="hover:underline">¿Cómo comprar?</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-15 text-xs">
        <p>Todos los derchos reservados 2025 </p>
      </div>
    </footer>
  );
}
