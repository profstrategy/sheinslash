"use client";

import { createContext, useState, useContext, ReactNode, useCallback } from "react";
import { Product } from "@/components/products/ProductCard.tsx";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

export interface CartItem extends Product {
  quantity: number;
  unitPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
  onOpenCartDrawer?: () => void;
}

export const CartProvider = ({ children, onOpenCartDrawer }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const isMobile = useIsMobile();

  const addToCart = useCallback(
    (product: Product, quantityToAdd: number = 1) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantityToAdd }
              : item
          );
        }

        // Ensure quantity is at least the minimum order quantity
        const initialQuantity = Math.max(quantityToAdd, product.minOrderQuantity);

        return [
          ...prevItems,
          {
            ...product,
            quantity: initialQuantity,
            unitPrice: product.price,
          },
        ];
      });

      toast.success(`${product.name} added to cart`);

      if (!isMobile && onOpenCartDrawer) {
        onOpenCartDrawer();
      }
    },
    [isMobile, onOpenCartDrawer]
  );

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) => {
      const removedItem = prevItems.find(item => item.id === productId);
      if (removedItem) {
        toast.info(`${removedItem.name} removed from cart.`);
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  }, []);

  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== productId) return item;
        
        // Just update the quantity - let the UI handle MOQ enforcement
        return { ...item, quantity: Math.max(1, newQuantity) };
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    toast.info("Your cart has been cleared.");
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};