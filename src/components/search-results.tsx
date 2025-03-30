"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { searchProducts } from "@/lib/products";
import { Loader2 } from "lucide-react";
import type { Product } from "@/lib/types";
interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulate API call with timeout
    const timer = setTimeout(() => {
      try {
        const searchResults = searchProducts(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Error searching products:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-2">No products found</h2>
        <p className="text-gray-500">Try searching with different keywords</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
