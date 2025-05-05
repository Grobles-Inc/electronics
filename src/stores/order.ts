import { create } from 'zustand';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
  id: string;
}

interface OrderStore {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,

  addToCart: (product: Product, quantity: number) => {
    const id = product.id;
    const existingItem = useOrderStore.getState().cartItems.find(item => item.id === id);

    if (existingItem) {
      set((state) => ({
        cartItems: state.cartItems.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }));
    } else {
      set((state) => ({
        cartItems: [...state.cartItems, { product, quantity, id }]
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== id)
    }));
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    }));
  },

  clearCart: () => {
    set({
      cartItems: [],
      totalItems: 0,
      totalPrice: 0
    });
  }
}));
