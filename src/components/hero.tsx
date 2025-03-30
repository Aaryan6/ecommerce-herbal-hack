import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Discover Premium Products
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Explore our curated collection of high-quality products designed
              for modern living.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
