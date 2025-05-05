import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, Tv, Smartphone, Home, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const categories = [
    { name: 'Electrónicos', path: '/categoria/electronicos', icon: <Tv size={18} className="mr-2" /> },
    { name: 'Telefonía', path: '/categoria/telefonia', icon: <Smartphone size={18} className="mr-2" /> },
    { name: 'Hogar y Cocina', path: '/categoria/hogar-cocina', icon: <Home size={18} className="mr-2" /> },
    { name: 'Perfumería y Cosméticos', path: '/categoria/perfumeria-cosmeticos', icon: <Sparkles size={18} className="mr-2" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full shadow-md">
      <div className='bg-[#ec3434]'>
        <div className="py-5 w-full">
          <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16">
            {/* Sección superior con logo, búsqueda y carrito */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Logo y botón de menú móvil */}
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="text-white font-bold text-2xl">
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

              <div className="relative w-full md:max-w-xl">
                <input 
                  type="text" 
                  className="bg-white rounded-full py-2 px-4 w-full text-black pr-10" 
                  placeholder="¿Qué estás buscando?" 
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>

              <div className="md:flex justify-end bg-white rounded-full p-2 hidden">
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
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 py-1">
            {categories.map((category) => (
              <li key={category.path} className="md:px-6">
                <Link 
                  to={category.path} 
                  className="flex items-center py-2 text-gray-800 hover:text-[#ec3434] font-medium transition-colors"
                >
                  {category.icon}
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
