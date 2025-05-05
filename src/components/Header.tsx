import { Home, Menu, Search, ShoppingBag, Smartphone, Sparkles, Tv, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const categories = [
  { name: 'Electrónicos', section: '#electronicos', icon: <Tv size={18} className="mr-2" /> },
  { name: 'Telefonía', section: '#telefonia', icon: <Smartphone size={18} className="mr-2" /> },
  { name: 'Casa, Hogar y Tendencias', section: '#hogar-cocina', icon: <Home size={18} className="mr-2" /> },
  { name: 'Perfumería y Cosméticos', section: '#perfumeria-cosmeticos', icon: <Sparkles size={18} className="mr-2" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      <div className='bg-[#ec3434]'>
        <div className="py-5 w-full">
          <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16">
            {/* Sección superior con logo, búsqueda y carrito */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Logo y botón de menú móvil */}
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="text-white font-bold text-2xl" data-aos="fade-down" data-aos-delay="100">
                  {/* <img src="/logo-mega-electronicos.png" alt="Mega Electrónicos" className="h-10" /> */}
                  Beltec Import
                </Link>
                <button
                  className="md:hidden text-white"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              <div className="relative w-full md:max-w-xl" data-aos="fade-up" data-aos-delay="200">
                <input
                  type="text"
                  className="bg-white rounded-full py-2 px-4 w-full text-black pr-10"
                  placeholder="¿Qué estás buscando?"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>

              <div className="md:flex justify-end bg-white rounded-full p-2 hidden" data-aos="fade-right" data-aos-delay="300">
                <Link to="/carrito">
                  <ShoppingBag className="text-black" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <nav className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16">
          <ul className="flex flex-col md:items-center md:flex-row md:justify-center space-y-2 md:space-y-0 md:py-1 py-4">
            {categories.map((category, index) => (
              <li key={category.section} className="md:px-6 ">
                <a
                  href={category.section}
                  className="flex py-2 text-gray-800 hover:text-[#ec3434] font-medium transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100 + 400}`}
                >
                  {category.icon}
                  {category.name}
                </a>
              </li>
            ))}
            <a href="#ofertas-del-dia" className="btn btn-error btn-sm" data-aos="zoom-in" data-aos-delay="500">
              Ofertas del Día
            </a>

          </ul>
        </nav>
      </div>
    </header>
  )
}
