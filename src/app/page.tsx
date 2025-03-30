import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/components/featured-products";
import { BenefitIcons } from "@/components/benefit-icons";
import { Newsletter } from "@/components/newsletter";
import { HandDrawnArrow } from "@/components/hand-drawn-elements";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-cream overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight relative">
              Transform your health with herbal tinctures
            </h1>

            <p className="font-serif text-lg md:text-xl text-brown-light mb-8 max-w-2xl">
              Handcrafted with care from organic ingredients, our tinctures
              harness the power of nature to support your wellbeing journey.
            </p>

            <div className="relative">
              <Button
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-dark text-cream font-medium px-8 py-6 rounded-full"
              >
                <Link href="/products">Shop All Tinctures</Link>
              </Button>
              <HandDrawnArrow className="absolute -right-16 bottom-0 text-brown-light w-12 h-12 hidden md:block" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-6 bg-[url('/wave-divider.svg')] bg-repeat-x bg-bottom"></div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* What are Herbal Tinctures Section */}
      <section className="w-full py-16 md:py-24 bg-cream-dark">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-cream shadow-md transform rotate-1">
                <Image
                  src="/images/about-image.jpeg"
                  width={500}
                  height={600}
                  alt="Herbal tincture making process"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-6 -left-6 w-full h-full bg-teal-light rounded-lg -z-10 transform -rotate-2"></div>
            </div>

            <div>
              <h2 className="font-display text-3xl md:text-4xl text-brown mb-6">
                What are Herbal Tinctures?
              </h2>
              <div className="font-serif text-brown-light space-y-4">
                <p>
                  Herbal tinctures are concentrated liquid extracts of medicinal
                  plants, carefully crafted to preserve their beneficial
                  properties. They&apos;re made by soaking herbs in alcohol or
                  glycerin to extract their active compounds.
                </p>
                <p>
                  Our tinctures are handcrafted in small batches using organic,
                  sustainably harvested herbs. Each drop contains the essence of
                  plants that have been used for centuries in traditional
                  healing practices.
                </p>
                <p>
                  Unlike mass-produced supplements, our tinctures maintain the
                  complex synergy of the whole plant, offering a holistic
                  approach to wellness that honors nature&apos;s wisdom.
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-8 border-brown text-brown hover:bg-brown hover:text-cream"
              >
                <Link href="/about">Learn More About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Icons */}
      <BenefitIcons />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
