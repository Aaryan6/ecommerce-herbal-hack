"use client";

import type { Product, CartItem, Cart } from "@/lib/types";

const CART_STORAGE_KEY = "product_catalog_cart";

// Get cart from localStorage
export function getCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [], subtotal: 0 };
  }

  const storedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return { items: [], subtotal: 0 };
  }

  try {
    const cart = JSON.parse(storedCart);
    return {
      items: cart.items || [],
      subtotal: calculateSubtotal(cart.items || []),
    };
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return { items: [], subtotal: 0 };
  }
}

// Save cart to localStorage
function saveCart(cart: CartItem[]): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify({
      items: cart,
    })
  );
}

// Calculate subtotal
function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Add this function to dispatch a custom event when cart changes
function notifyCartChange() {
  if (typeof window !== "undefined") {
    // Create and dispatch a custom event
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  }
}

// Add product to cart
export function addToCart(
  product: Product,
  quantity = 1,
  color?: string,
  size?: string
): void {
  const cart = getCart();

  // Check if item is already in cart
  const existingItemIndex = cart.items.findIndex(
    (item) =>
      item.id === product.id && item.color === color && item.size === size
  );

  if (existingItemIndex >= 0) {
    // Update quantity if item exists
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      color,
      size,
    });
  }

  saveCart(cart.items);
  notifyCartChange(); // Notify components that cart has changed
}

// Update cart item quantity
export function updateCartItemQuantity(itemId: string, quantity: number): void {
  const cart = getCart();

  const updatedItems = cart.items.map((item) => {
    if (item.id === itemId) {
      return { ...item, quantity };
    }
    return item;
  });

  saveCart(updatedItems);
  notifyCartChange(); // Notify components that cart has changed
}

// Remove item from cart
export function removeFromCart(itemId: string): void {
  const cart = getCart();

  const updatedItems = cart.items.filter((item) => item.id !== itemId);

  saveCart(updatedItems);
  notifyCartChange(); // Notify components that cart has changed
}

// Clear cart
export function clearCart(): void {
  saveCart([]);
  notifyCartChange(); // Notify components that cart has changed
}
