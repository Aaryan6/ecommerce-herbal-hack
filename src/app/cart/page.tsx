import { ShoppingCart } from "@/components/shopping-cart";
import { PageTitle } from "@/components/page-title";

export default function CartPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto space-y-12">
      <PageTitle>Your Cart</PageTitle>
      <ShoppingCart />
    </div>
  );
}
