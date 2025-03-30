import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";
import { HandDrawnUnderline } from "@/components/hand-drawn-elements";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="w-full py-16 md:py-24 bg-cream">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-brown mb-2 relative">
            Our Bestselling Tinctures
            <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
          </h2>
          <p className="font-serif text-brown-light max-w-2xl mt-4">
            Discover our most loved herbal formulations, carefully crafted to
            support your wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/products"
            className="font-display text-brown border-b-2 border-teal hover:text-teal transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
