import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Laptop, Smartphone, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Slide, Category } from '../types/carousel';

export default function Carousel() {
  // Estado para manejar el slide actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos de ejemplo para los slides
  const slides: Slide[] = [
    {
      id: 1,
      title: 'PORTÁTILES',
      subtitle: 'ELECTRONICOS',
      buttonText: 'DESCUBRIR',
      buttonLink: '/categoria/aire-acondicionado',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=1280&auto=format&fit=crop',
      altText: 'Ofertas en Portátiles',
      iconName: 'laptop',
    },
    {
      id: 2,
      title: 'SMARTPHONES',
      subtitle: 'OFERTAS ESPECIALES',
      buttonText: 'VER OFERTAS',
      buttonLink: '/categoria/telefonia',
      image: 'https://images.unsplash.com/photo-1574675904801-eb2cca16af12?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Ofertas en smartphones',
      iconName: 'smartphone'
    },
    {
      id: 3,
      title: 'AUDIO PREMIUM',
      subtitle: 'CALIDAD DE SONIDO',
      buttonText: 'EXPLORAR',
      buttonLink: '/categoria/audio',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Equipos de audio premium',
      iconName: 'headphones'
    }
  ];

  // Función para obtener el icono correspondiente
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'laptop':
        return <Laptop size={36} className="mr-3 text-blue-600" />;
      case 'smartphone':
        return <Smartphone size={36} className="mr-3 text-blue-600" />;
      case 'headphones':
        return <Headphones size={36} className="mr-3 text-blue-600" />;
      default:
        return null;
    }
  };

  // Datos para las categorías
  const categories: Category[] = [
    {
      id: 1,
      name: 'Bebidas',
      image: 'https://images.unsplash.com/photo-1617122387493-34c22fc88560?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/bebidas'
    },
    {
      id: 2,
      name: 'Electrónicos',
      image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/electronicos'
    },
    {
      id: 3,
      name: 'Informática',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/informatica'
    },
    {
      id: 4,
      name: 'Perfumería',
      image: 'https://images.unsplash.com/photo-1618994492420-b4f4d6b4890c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/perfumeria'
    },
    {
      id: 5,
      name: 'Telefonía',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/telefonia'
    },
    {
      id: 6,
      name: 'Sonido & Audio',
      image: 'https://images.unsplash.com/photo-1703060802519-d294f34da766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/sonido-audio'
    }
  ];

  // Función para navegar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Función para navegar a la diapositiva anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Auto-reproducción del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Carrusel principal */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Slides */}
        <div className="relative h-[450px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Fondo de imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
              </div>

              {/* Contenido del slide */}
              <div className="relative h-full flex flex-col justify-center p-8 md:p-16">
                <div className="max-w-2xl text-white">
                  {slide.title && (
                    <div className="flex items-center mb-4">
                      {getIconComponent(slide.iconName)}
                      <span className="text-3xl font-bold">{slide.title}</span>
                    </div>
                  )}
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 uppercase">
                    {slide.subtitle}
                  </h2>
                  <Link
                    to={slide.buttonLink}
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    {slide.buttonText} 
                    <ChevronRight className="inline-block ml-2" size={20} />
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all"
          onClick={nextSlide}
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Categorías destacadas */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <Link
            to={category.path}
            key={category.id}
            className="relative overflow-hidden rounded-lg group"
          >
            <div
              className="h-36 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              <span className="text-white font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
