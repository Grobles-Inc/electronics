import Logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-[200px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm  px-4 sm:px-6 md:px-8 lg:px-10">
        <div>
          <img src={Logo} alt="Logo" width={150} height={150} />
          <a href="https://wa.me/51995262244" className="hover:underline">(+51) 995 262 244</a>
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
