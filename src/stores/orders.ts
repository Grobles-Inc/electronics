import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CartItem } from "../types";

interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
}

interface OrdersState {
  orders: Order[];
  addOrder: (items: CartItem[], total: number) => void;
  getOrders: () => Order[];
}

const getInitialOrders = (): Order[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useOrdersStore = create<OrdersState>()(
  devtools((set, get) => ({
    orders: getInitialOrders(),
    addOrder: (items, total) => {
      const newOrder: Order = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        items,
        total,
        status: 'pending'
      };
      
      set((state) => ({
        orders: [newOrder, ...state.orders]
      }));
    },
    getOrders: () => get().orders
  }))
);

if (typeof window !== "undefined") {
  useOrdersStore.subscribe((state) => {
    try {
      localStorage.setItem("orders", JSON.stringify(state.orders));
    } catch {
      console.error("Error al guardar las órdenes en localStorage");
    }
  });
} 