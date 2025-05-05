import { create } from 'zustand';
import { Product } from '../types';

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

  searchProducts: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://beltecimport.store/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}&per_page=20`
      );
      
      if (!response.ok) {
        throw new Error('Error searching products');
      }
      
      const results = await response.json();
      set({ 
        searchQuery: query,
        searchResults: results,
        loading: false 
      });
    } catch (error) {
      set({ error: 'Error searching products', loading: false });
      console.error('Search error:', error);
    }
  },

  searchByCategoryID: async (categoryId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://beltecimport.store/wp-json/wc/v3/products?category=${categoryId}&per_page=20`
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

  clearSearch: () => {
    set({ 
      searchQuery: '',
      searchResults: [],
      error: null 
    });
  }
}));