"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSidebarProps {
  className?: string;
}

export function ProductSidebar({ className }: ProductSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    ingredient: searchParams.get("ingredient") || "",
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  // Categories from the provided data
  const categories = [
    { id: "calm", name: "Calm", count: 5 },
    { id: "sleep", name: "Sleep", count: 3 },
    { id: "digest", name: "Digest", count: 4 },
    { id: "immune", name: "Immune", count: 6 },
    { id: "energy", name: "Energy", count: 3 },
  ];

  // Ingredients from the provided data
  const ingredients = [
    { id: "echinacea", name: "Echinacea" },
    { id: "ginger", name: "Ginger" },
    { id: "turmeric", name: "Turmeric" },
    { id: "valerian", name: "Valerian" },
    { id: "peppermint", name: "Peppermint" },
    { id: "lavender", name: "Lavender" },
  ];

  // Initialize price range from URL params
  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (minPrice && maxPrice) {
      setPriceRange([Number.parseInt(minPrice), Number.parseInt(maxPrice)]);
    }
  }, []);

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === categoryId ? "" : categoryId,
    }));
  };

  // Handle ingredient selection
  const handleIngredientChange = (ingredientId: string) => {
    setFilters((prev) => ({
      ...prev,
      ingredient: prev.ingredient === ingredientId ? "" : ingredientId,
    }));
  };

  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.category) {
      params.set("category", filters.category);
    }

    if (filters.ingredient) {
      params.set("ingredient", filters.ingredient);
    }

    if (priceRange[0] > 0) {
      params.set("minPrice", priceRange[0].toString());
    }

    if (priceRange[1] < 100) {
      params.set("maxPrice", priceRange[1].toString());
    }

    router.push(`/products?${params.toString()}`);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      category: "",
      ingredient: "",
    });
    setPriceRange([0, 100]);
    router.push("/products");
  };

  const hasActiveFilters =
    filters.category ||
    filters.ingredient ||
    priceRange[0] > 0 ||
    priceRange[1] < 100;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl text-brown">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-brown-light hover:text-brown"
          >
            <X className="h-4 w-4 mr-1" /> Clear all
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <Accordion type="single" collapsible defaultValue="categories">
          <AccordionItem value="categories" className="border-brown/20">
            <AccordionTrigger className="font-display text-brown">
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={filters.category === category.id}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                      className="border-brown/40 data-[state=checked]:bg-teal data-[state=checked]:border-teal"
                    />
                    <Label
                      htmlFor={`category-${category.id}`}
                      className="flex items-center justify-between w-full font-serif text-sm cursor-pointer"
                    >
                      {category.name}
                      <span className="text-brown-light text-xs">
                        {category.count}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Ingredients */}
        <Accordion type="single" collapsible defaultValue="ingredients">
          <AccordionItem value="ingredients" className="border-brown/20">
            <AccordionTrigger className="font-display text-brown">
              Ingredients
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`ingredient-${ingredient.id}`}
                      checked={filters.ingredient === ingredient.id}
                      onCheckedChange={() =>
                        handleIngredientChange(ingredient.id)
                      }
                      className="border-brown/40 data-[state=checked]:bg-teal data-[state=checked]:border-teal"
                    />
                    <Label
                      htmlFor={`ingredient-${ingredient.id}`}
                      className="font-serif text-sm cursor-pointer"
                    >
                      {ingredient.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Price range */}
        <Accordion type="single" collapsible defaultValue="price">
          <AccordionItem value="price" className="border-brown/20">
            <AccordionTrigger className="font-display text-brown">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <Slider
                  value={priceRange}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={setPriceRange}
                  className="[&>span]:bg-teal"
                />
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-brown">
                    ${priceRange[0]}
                  </span>
                  <span className="font-serif text-sm text-brown">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button
        onClick={applyFilters}
        className="w-full bg-teal hover:bg-teal-dark text-cream"
      >
        Apply Filters
      </Button>
    </div>
  );
}
