import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
      <ProductDetails product={product} />
      <RelatedProducts productId={params.id} />
    </div>
  );
}
