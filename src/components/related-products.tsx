import { getRelatedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { HandDrawnUnderline } from "@/components/hand-drawn-elements";

interface RelatedProductsProps {
  productId: string;
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
  const products = getRelatedProducts(productId);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 md:mt-24">
      <h2 className="font-display text-2xl md:text-3xl text-brown mb-8 text-center relative inline-block">
        You Might Also Like
        <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
