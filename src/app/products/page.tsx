import { ProductGrid } from "@/components/product-grid";
import { ProductSidebar } from "@/components/product-sidebar";
import { PageTitle } from "@/components/page-title";

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
      <PageTitle>Our Herbal Tinctures</PageTitle>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <ProductSidebar className="w-full lg:w-64 shrink-0" />
        <ProductGrid />
      </div>
    </div>
  );
}
