export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  altText: string;
  iconName?: string; // Nombre del icono de Lucide React
  tag?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  path: string;
}