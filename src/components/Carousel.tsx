import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Laptop, Smartphone, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Slide, Category } from '../types/carousel';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'PORTÁTILES',
      subtitle: 'ELECTRONICOS',
      buttonText: 'DESCUBRIR',
      buttonLink: '/categoria/electronicos',
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
      buttonLink: '/categoria/informatica',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Equipos de audio premium',
      iconName: 'headphones'
    }
  ];

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'laptop':
        return <Laptop size={36} className="mr-3 text-white" />;
      case 'smartphone':
        return <Smartphone size={36} className="mr-3 text-white" />;
      case 'headphones':
        return <Headphones size={36} className="mr-3 text-white" />;
      default:
        return null;
    }
  };

  const categories: Category[] = [
    {
      id: 1,
      name: 'Electrónicos',
      image: 'https://images.unsplash.com/photo-1703060802519-d294f34da766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/electronicos'
    },
    {
      id: 2,
      name: 'Telefonía',
      image: 'https://beltecimport.store/wp-content/uploads/2025/04/Doble-linterna-VERYKOOL-T800.webp',
      path: '/categoria/telefonia'
    },
    {
      id: 3,
      name: 'Informática',
      image: 'https://resource.megaeletronicos.com/uploads/Category/1739559279_1739559279_67af916f6d21b.webp',
      path: '/categoria/informatica'
    },
    {
      id: 4,
      name: 'Hogar y Cocina',
      image: 'https://img.freepik.com/foto-gratis/interiores-cocina-hogarena_53876-146777.jpg?ga=GA1.1.161279814.1746637218&semt=ais_hybrid&w=740',
      path: '/categoria/hogar-cocina'
    },
    {
      id: 5,
      name: 'Perfumería y Cosméticos',
      image: 'https://img.freepik.com/foto-gratis/bodegon-kit-carrera-modelo_23-2150217985.jpg?ga=GA1.1.161279814.1746637218&semt=ais_hybrid&w=740',
      path: '/categoria/perfumeria-cosmeticos'
    },
    {
      id: 6,
      name: 'Salud y Belleza',
      image: 'https://images.unsplash.com/photo-1620905969379-74c206d60543?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/categoria/salud-belleza'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 md:px-0" >
      <div className="relative overflow-hidden rounded-xl shadow-lg" data-aos="fade" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
        <div className="relative h-[450px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="relative h-full flex flex-col justify-center md:ml-16 ml-2 py-8 md:p-16">
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
                    className="inline-block mt-6  bg-[#FA7818] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                  >
                    {slide.buttonText}
                    <ChevronRight className="inline-block ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className=" cursor-pointer absolute left-4 md:top-1/2 top-10 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-lg transition-all"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button
          className="cursor-pointer absolute right-4 md:top-1/2 top-10 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-lg transition-all"
          onClick={nextSlide}
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" >
        {categories.map(category => (
          <Link
            to={category.path}
            key={category.id}

          >
            <div className="relative overflow-hidden rounded-lg group shadow-lg hover:shadow-xl transition-shadow aspect-square">
              <div
                className="h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${category.image})` }}
              >

              </div>
            </div>
            <div className=" text-gray-900 font-stretch-50% text-center py-2">
              <span className="font-medium">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
