"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/types";
import { Minus, Plus, Star } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.sizeOptions?.[0] || ""
  );
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      <div className="space-y-4">
        {/* Main product image */}
        <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-cream-dark">
          <Image
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnail gallery */}
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square overflow-hidden rounded border-2 ${
                selectedImage === index ? "border-teal" : "border-cream-dark"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} - View ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          {product.category && (
            <div className="inline-block bg-cream-dark px-3 py-1 rounded-full mb-2">
              <span className="font-serif text-sm text-brown">
                {product.category}
              </span>
            </div>
          )}

          <h1 className="font-display text-3xl md:text-4xl text-brown">
            {product.name}
          </h1>

          {/* Reviews */}
          {product.reviewStars && (
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.reviewStars || 0)
                        ? "fill-teal text-teal"
                        : "fill-cream-dark text-cream-dark"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-brown-light">
                ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="mt-2 font-serif text-2xl text-brown">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <div className="font-serif text-brown-light space-y-4">
          <p>{product.description}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-lg text-brown">Key Benefits:</h3>
          <ul className="font-serif text-brown-light space-y-1 list-disc pl-5">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Size options */}
        {product.sizeOptions && product.sizeOptions.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-display text-lg text-brown">Size:</h3>
            <div className="flex gap-2">
              {product.sizeOptions.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md font-serif ${
                    selectedSize === size
                      ? "bg-teal text-cream border-teal"
                      : "bg-cream-dark text-brown border-cream-dark hover:border-teal"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Alcohol content */}
        {product.alcoholContent && (
          <div className="inline-block bg-cream-dark px-3 py-1 rounded-full">
            <span className="font-serif text-sm text-brown">
              {product.alcoholContent}
            </span>
          </div>
        )}

        <div className="pt-4 border-t border-cream-dark/20">
          <div className="flex items-center space-x-4">
            <span className="font-display text-brown">Quantity</span>
            <div className="flex items-center border border-brown/20 rounded">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-brown"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-8 text-center font-serif">{quantity}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-brown"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full mt-6 bg-teal hover:bg-teal-dark text-cream py-6 rounded-full"
          >
            Add to Cart
          </Button>
        </div>

        <Tabs defaultValue="description" className="pt-6">
          <TabsList className="grid w-full grid-cols-3 bg-cream-dark">
            <TabsTrigger
              value="description"
              className="font-display data-[state=active]:text-teal"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="ingredients"
              className="font-display data-[state=active]:text-teal"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger
              value="how-to-use"
              className="font-display data-[state=active]:text-teal"
            >
              How to Use
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="pt-4">
            <div className="font-serif text-brown-light space-y-4">
              <p>{product.fullDescription || product.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="ingredients" className="pt-4">
            <div className="space-y-4">
              <p className="font-serif text-brown-light">
                All ingredients are organic and sustainably sourced:
              </p>
              <ul className="font-serif text-brown-light space-y-1 list-disc pl-5">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="how-to-use" className="pt-4">
            <div className="font-serif text-brown-light space-y-4">
              <p>
                {product.usage ||
                  "Take 1-2 droppers (30-60 drops) in water or tea, 2-3 times daily or as needed."}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
