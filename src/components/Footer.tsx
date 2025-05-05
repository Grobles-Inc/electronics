
export default function Footer() {
  return (
    <footer className="bg-[#003c88] text-white py-10 text-[200px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm  px-4 sm:px-6 md:px-8 lg:px-10">
        <div>
          <h3 className="font-[1000] mb-8 ">Perú</h3>
          <p>(045) 3528-9053 - (045) 3528-8462</p>
          <p>(045) 3025-7072 - (045) 3025-7736</p>
          <div className="flex gap-2 mt-10">
            <a
              href="#"
              className="bg-blue-100/20 p-2 rounded-full "
              aria-label="Facebook"
            >
              <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" width={24} height={24} alt="Facebook" />
            </a>
            <a
              href="#"
              className="bg-blue-100/20  p-2 rounded-full "
              aria-label="WhatsApp"
            >
              <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" width={24} height={24} alt="WhatsApp" />
            </a>
            <a
              href="#"
              className="bg-blue-100/20 p-2 rounded-full"
              aria-label="TikTok"
            >
              <img src="https://img.icons8.com/?size=100&id=118638&format=png&color=FFFFFF" width={24} height={24} alt="TikTok" />
            </a>
            <a
              href="#"
              className="bg-blue-100/20  p-2 rounded-full"
              aria-label="Instagram"
            >
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" width={24} height={24} alt="Instagram" />
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
        <p>Mega Electrónicos de Importadora Américas S.A. Todos los derechos reservados 2025</p>
      </div>
    </footer>
  );
}
