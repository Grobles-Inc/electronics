import { Home, Menu, Search, ShoppingBag, Smartphone, Sparkles, Tv, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { useOrderStore } from '../stores/order';
import { useProductStore } from '../stores/product';

const categories = [
  { name: 'Electrónicos', section: '/#electronicos', icon: <Tv size={18} className="mr-2" /> },
  { name: 'Telefonía', section: '/#telefonia', icon: <Smartphone size={18} className="mr-2" /> },
  { name: 'Casa, Hogar y Tendencias', section: '/#hogar-cocina', icon: <Home size={18} className="mr-2" /> },
  { name: 'Perfumería y Cosméticos', section: '/#perfumeria-cosmeticos', icon: <Sparkles size={18} className="mr-2" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useOrderStore()
  const navigate = useNavigate();
  const { searchProducts } = useProductStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async (query: string) => {
    try {
      await searchProducts(query);
      navigate(`/search?query=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
    }
  };


  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      <div className='bg-[#FA7818]'>
        <div className="py-5 w-full">
          <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="text-white bg-orange-100 rounded-full font-bold text-2xl" data-aos="fade-down" data-aos-delay="100">
                  <img src={Logo} alt="Logo" className='size-16 md:size-24' />
                </Link>
                <button
                  className="md:hidden text-white"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              <div className="relative w-full md:max-w-xl" data-aos="fade-up" data-aos-delay="200">
                <form onSubmit={handleSearchSubmit} className="flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white rounded-full py-2 px-4 w-full text-black pr-10"
                    placeholder="¿Qué estás buscando?"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>

              <div className="md:flex justify-end  rounded-full p-2 hidden" data-aos="fade-right" data-aos-delay="300">
                <Link to="/carrito" className="relative">
                  <ShoppingBag color='white' size={36} />
                  {items.length > 0 && (
                    <span className="absolute top-[-5px] right-[-5px] bg-orange-300 text-black font-bold  text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
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
