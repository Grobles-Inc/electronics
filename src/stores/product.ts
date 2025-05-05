import { create } from 'zustand';
import { Product, Category } from '../types';

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  searchResults: Product[];
  categories: Category[];
  searchProducts: (query: string) => Promise<void>;
  searchByCategoryID: (categoryId: string) => Promise<void>;
  fetchCategories: () => Promise<void>;
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
      const obtenerProductos = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}?consumer_key=${import.meta.env.VITE_CONSUMER_KEY}&consumer_secret=${import.meta.env.VITE_CONSUMER_SECRET}`);
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          const productos = await response.json();
          set({ 
            searchQuery: query,
            searchResults: productos,
          });
        } catch (error) {
          console.error('Error al obtener productos:', error);
          set({ error: 'Error al obtener productos', loading: false });
        }
      };
      obtenerProductos();
    } catch (error) {
      set({ error: 'Error searching products', loading: false });
      console.error('Search error:', error);
    }
  },

  searchByCategoryID: async (categoryId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wc/v3/products?category=${categoryId}&per_page=20`,
        {
          headers: {
            'Authorization': 'Basic ' + btoa(
              `${import.meta.env.VITE_CLAVE_CLIENTE}:${import.meta.env.VITE_CLAVE_SECRETA}`
            )
          }
        }
      );
      
      if (!response.ok) {
        throw new Error('Error fetching products by category');
      }
      
      const results = await response.json();
      set({ 
        products: results,
        loading: false 
      });
    } catch (error) {
      set({ error: 'Error fetching products by category', loading: false });
      console.error('Search error:', error);
    }
  },

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?consumer_key=${import.meta.env.VITE_CONSUMER_KEY}&consumer_secret=${import.meta.env.VITE_CONSUMER_SECRET}`
      );
      
      if (!response.ok) {
        throw new Error('Error fetching categories');
      }
      
      const categories = await response.json();
      set({ 
        categories,
        loading: false 
      });
    } catch (error) {
      set({ error: 'Error fetching categories', loading: false });
      console.error('Categories error:', error);
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