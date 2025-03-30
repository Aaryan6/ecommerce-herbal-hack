"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { Minus, Plus, X } from "lucide-react";

export function ShoppingCart() {
  const { items, updateItemQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="font-display text-2xl text-brown mb-4">
          Your cart is empty
        </h2>
        <p className="font-serif text-brown-light mb-8">
          Looks like you haven&apos;t added any tinctures to your cart yet.
        </p>
        <Button asChild className="bg-teal hover:bg-teal-dark text-cream">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 pb-6 border-b border-cream-dark/20"
          >
            <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-grow">
              <div className="flex justify-between">
                <Link
                  href={`/products/${item.id}`}
                  className="font-display text-lg text-brown hover:text-teal transition-colors"
                >
                  {item.name}
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-brown-light hover:text-brown"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center border border-brown/20 rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-brown"
                    onClick={() =>
                      updateItemQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-8 text-center font-serif">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-brown"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>

                <div className="font-serif text-brown">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-1">
        <div className="bg-cream-dark p-6 rounded-lg">
          <h2 className="font-display text-xl text-brown mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 font-serif">
            <div className="flex justify-between">
              <span className="text-brown-light">Subtotal</span>
              <span className="text-brown">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brown-light">Shipping</span>
              <span className="text-brown">${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-brown/20 pt-2 mt-2 flex justify-between font-medium">
              <span className="text-brown">Total</span>
              <span className="text-brown">${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full mt-6 bg-teal hover:bg-teal-dark text-cream">
            Proceed to Checkout
          </Button>

          <div className="mt-4 text-center">
            <Link
              href="/products"
              className="font-serif text-sm text-brown-light hover:text-teal transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
