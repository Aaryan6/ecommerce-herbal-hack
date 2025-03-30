import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
      <ProductDetails product={product} />
      <RelatedProducts productId={id} />
    </div>
  );
}
