import Logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-[200px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm  px-4 sm:px-6 md:px-8 lg:px-10">
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
            <li><a href="/categoria/electronicos" className="hover:underline">Electrónicos</a></li>
            <li><a href="/categoria/telefonia" className="hover:underline">Telefonía</a></li>
            <li><a href="/categoria/informatica" className="hover:underline">Informática</a></li>
            <li><a href="/categoria/hogar-cocina" className="hover:underline">Hogar y Cocina</a></li>
            <li><a href="/categoria/perfumeria-cosmeticos" className="hover:underline">Perfumería y Cosméticos</a></li>
            <li><a href="/categoria/salud-belleza" className="hover:underline">Salud y Belleza</a></li>
          </ul>
        </div>

        {/* Cliente */}
        <div>
          <h3 className="font-bold mb-8">Área del cliente</h3>
          <ul className="space-y-1">
            <li><a href="/politica-de-privacidad" className="hover:underline">Política de privacidad</a></li>
          </ul>
          <ul className="space-y-1">
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-15 text-sm">
        <p>Beltec Import S.A. Todos los derechos reservados 2025</p>
      </div>
      <div className="text-center mt-5 text-sm">
        Desarrollado por <a href="https://grobles.framer.website/" className="hover:underline text-[#fa7818]">Grobles S.A.</a>
      </div>
    </footer>
  );
}
