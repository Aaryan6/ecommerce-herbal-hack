"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import type { Product } from "@/lib/types";
export function ProductGrid() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all products immediately without artificial delay
    let filtered = getProducts();

    // Apply filters from URL params
    const category = searchParams.get("category");
    const ingredient = searchParams.get("ingredient");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (ingredient) {
      filtered = filtered.filter((p) =>
        p.ingredients.some((i) =>
          i.toLowerCase().includes(ingredient.toLowerCase())
        )
      );
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setProducts(filtered);
    setLoading(false);
  }, [searchParams, sortBy]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <p className="font-serif text-brown-light">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>

        <div className="w-[180px]">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-cream border-brown/20">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-teal" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="font-display text-xl text-brown mb-2">
            No products found
          </h2>
          <p className="font-serif text-brown-light">
            Try adjusting your filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
