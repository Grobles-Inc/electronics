import { create } from 'zustand';
import { Product } from '../types';

interface WordPressProduct {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    precio_original: number;
    precio_descuento: number;
    en_stock: boolean;
    imagen_del_producto: number;
    especificaciones_producto: string;
    categoria: string;
  };
  slug: string;
  link: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  searchResults: Product[];
  searchProducts: (query: string) => Promise<void>;
  searchByCategoryID: (categoryId: string) => Promise<void>;
  clearSearch: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  searchResults: [],
  categories: [],

  searchProducts: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/productos?search=${query}&per_page=20`);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const productos = await response.json();
      
      // Map WordPress response to our Product type
      const mappedProducts = productos.map((product: WordPressProduct) => ({
        id: product.id,
        title: product.title.rendered,
        content: product.content.rendered,
        price: product.acf?.precio_original || 0,
        discountPrice: product.acf?.precio_descuento || 0,
        inStock: product.acf?.en_stock || false,
        productImage: product.acf?.imagen_del_producto || 0,
        specifications: product.acf?.especificaciones_producto || '',
        category: product.acf?.categoria || '',
        slug: product.slug,
        link: product.link
      }));

      set({ 
        searchQuery: query,
        searchResults: mappedProducts,
        loading: false
      });
    } catch (error) {
      console.error('Error al obtener productos:', error);
      set({ error: 'Error al obtener productos', loading: false });
    }
  },

  searchByCategoryID: async (category: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/productos?acf[categoria]=${category}`);
      if (!response.ok) {
        throw new Error('Error fetching products by category');
      }
      const results = await response.json();
      
      // Map WordPress response to our Product type
      const mappedProducts = results.map((product: WordPressProduct) => ({
        id: product.id,
        title: product.title.rendered,
        content: product.content.rendered,
        price: product.acf?.precio_original || 0,
        discountPrice: product.acf?.precio_descuento || 0,
        inStock: product.acf?.en_stock || false,
        productImage: product.acf?.imagen_del_producto || 0,
        specifications: product.acf?.especificaciones_producto || '',
        category: product.acf?.categoria?.[0] || '',
        slug: product.slug,
        link: product.link
      }));

      set({ 
        products: mappedProducts,
        loading: false 
      });
    } catch (error) {
      set({ error: 'Error fetching products by category', loading: false });
      console.error('Search error:', error);
    }
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/productos?per_page=20`);
      if (!response.ok) {
        throw new Error(`Error fetching products: ${response.status}`);
      }
      const productos = await response.json();
      
      // Map WordPress response to our Product type
      const mappedProducts = productos.map((product: WordPressProduct) => ({
        id: product.id,
        title: product.title.rendered,
        content: product.content.rendered,
        price: product.acf?.precio_original || 0,
        discountPrice: product.acf?.precio_descuento || 0,
        inStock: product.acf?.en_stock || false,
        productImage: product.acf?.imagen_del_producto || 0,
        specifications: product.acf?.especificaciones_producto || '',
        category: product.acf?.categoria || '',
        slug: product.slug,
        link: product.link
      }));

      set({ 
        products: mappedProducts,
        loading: false 
      });
    } catch (error) {
      set({ error: 'Error fetching products', loading: false });
      console.error('Products error:', error);
    }
  },

  clearSearch: () => {
    set({ 
      searchQuery: '',
      searchResults: [],
      error: null 
    });
  }
}));