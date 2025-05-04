export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beltec Import</h3>
            <p className="text-gray-300">
              Tu tienda de confianza para electrónicos y más.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces útiles</h3>
            <ul className="space-y-2">
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/preguntas-frecuentes">Preguntas frecuentes</a></li>
              <li><a href="/politicas-privacidad">Políticas de privacidad</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <address className="not-italic text-gray-300">
              <p>Av. Principal #123</p>
              <p>Ciudad Ejemplo</p>
              <p>Tel: (123) 456-7890</p>
              <p>Email: info@beltecimport.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Beltec Import. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
