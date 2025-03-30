"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className={cn(
        "group block relative rounded-lg overflow-hidden transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark rounded-lg">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />

        {product.category && (
          <div className="absolute top-3 left-3 bg-cream/90 px-3 py-1 rounded-full">
            <span className="font-serif text-xs text-brown">
              {product.category}
            </span>
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0 bg-brown/20 flex items-end justify-center pb-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            onClick={handleQuickAdd}
            className="bg-cream text-brown hover:bg-teal hover:text-cream transition-colors"
          >
            Quick Add
          </Button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-display text-lg text-brown group-hover:text-teal transition-colors">
          {product.name}
        </h3>
        <p className="font-serif text-brown-light mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
