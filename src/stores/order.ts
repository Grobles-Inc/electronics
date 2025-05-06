import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartItem, Product } from "../types";
import { toast } from "react-hot-toast";


interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
}

const getInitialCartItems = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useOrderStore = create<CartState>()(
  devtools((set, get) => ({
    items: getInitialCartItems(),
    addToCart: (product, quantity = 1) => {
      set((state: CartState) => {
        const existing = state.items.find((item) => item.id === product.id);
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
                : item
            ),
          };
        }
        toast.success("Producto agregado al carrito");
        return {
          items: [
            ...state.items,
            {
              ...product,
              quantity: Number(quantity) || 1,
            },
          ],
        };
      });
    },
    removeFromCart: (productId) => {
      set((state: CartState) => ({ items: state.items.filter((item) => item.id !== Number(productId)) }));
    },
    clearCart: () => set({ items: [] }),
    updateQuantity: (productId, quantity) => {
      set((state: CartState) => ({
        items: state.items.map((item) =>
          item.id === Number(productId) ? { ...item, quantity } : item
        ),
      }));
    },
    get totalItems() {
      return get().items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    },
    get totalPrice() {
      return get().items.reduce(
        (sum, item) =>
          sum +
          (Number(item.acf?.precio_descuento) || Number(item.acf?.precio_original)) *
            (item.quantity || 1),
        0
      );
    }
  }))
);

// Persistencia en localStorage
if (typeof window !== "undefined") {
  useOrderStore.subscribe((state) => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    } catch { 
      console.error("Error al guardar el carrito en localStorage");
    }
  });
}
