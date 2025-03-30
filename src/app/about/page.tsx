import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/page-title";
import { HandDrawnUnderline } from "@/components/hand-drawn-elements";

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 mx-auto">
      <PageTitle>Our Story</PageTitle>

      {/* Hero Section */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden border-4 border-cream shadow-md">
            <Image
              src="/images/about.jpeg"
              width={500}
              height={600}
              alt="Herbal tincture making process"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-6 -left-6 w-full h-full bg-teal-light rounded-lg -z-10 transform -rotate-2"></div>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl md:text-3xl text-brown">
            Rooted in Tradition
          </h2>
          <div className="font-serif text-brown-light space-y-4">
            <p>
              Herbal Remedies began in 2015 when our founder, Sarah, started
              crafting tinctures in her kitchen to address her own health
              challenges. What started as a personal journey soon blossomed into
              a mission to share the healing power of plants with others.
            </p>
            <p>
              Drawing on traditional herbal wisdom passed down through
              generations and backed by modern research, we create tinctures
              that honor the complex synergy of whole plants and their
              remarkable ability to support the body&apos;s natural healing
              processes.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mt-16 md:mt-24 bg-cream-dark rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-brown mb-6 relative inline-block">
            Our Mission
            <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
          </h2>
          <p className="font-serif text-brown-light text-lg">
            We believe in the profound connection between humans and plants, and
            our mission is to create the highest quality herbal tinctures that
            help people reconnect with nature&apos;s wisdom and support their
            journey toward holistic wellbeing.
          </p>
        </div>
      </div>

      {/* Our Process */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
        <h2 className="font-display mx-auto text-2xl md:text-3xl text-brown text-center mb-12 relative w-fit">
          Our Process
          <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-cream p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-2xl text-brown">1</span>
            </div>
            <h3 className="font-display text-xl text-brown mb-3">
              Thoughtful Sourcing
            </h3>
            <p className="font-serif text-brown-light">
              We source organic, sustainably harvested herbs from trusted
              growers who share our commitment to environmental stewardship and
              quality.
            </p>
          </div>

          <div className="bg-cream p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-2xl text-brown">2</span>
            </div>
            <h3 className="font-display text-xl text-brown mb-3">
              Small-Batch Crafting
            </h3>
            <p className="font-serif text-brown-light">
              Each tincture is handcrafted in small batches to ensure optimal
              potency and quality, using traditional methods that honor the
              integrity of the plants.
            </p>
          </div>

          <div className="bg-cream p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-2xl text-brown">3</span>
            </div>
            <h3 className="font-display text-xl text-brown mb-3">
              Rigorous Testing
            </h3>
            <p className="font-serif text-brown-light">
              Every batch is tested for purity and potency to ensure you receive
              a product that meets our exacting standards for safety and
              effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
        <h2 className="font-display mx-auto text-2xl md:text-3xl text-brown text-center mb-12 relative w-fit">
          Our Values
          <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-brown mb-2">
                Quality & Integrity
              </h3>
              <p className="font-serif text-brown-light">
                We never compromise on quality and are transparent about our
                ingredients, sourcing, and processes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-brown mb-2">
                Sustainability
              </h3>
              <p className="font-serif text-brown-light">
                We are committed to environmentally responsible practices, from
                herb cultivation to packaging choices.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-brown mb-2">
                Community
              </h3>
              <p className="font-serif text-brown-light">
                We believe in building relationships with our customers,
                suppliers, and the broader herbal community.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-brown mb-2">
                Education
              </h3>
              <p className="font-serif text-brown-light">
                We are dedicated to sharing knowledge about herbal traditions
                and empowering people to take an active role in their wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
        <h2 className="font-display mx-auto text-2xl md:text-3xl text-brown text-center mb-12 relative w-fit">
          Meet Our Team
          <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/af_nova.jpeg"
                width={200}
                height={200}
                alt="Sarah Johnson - Founder & Herbalist"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-brown">Sarah Johnson</h3>
            <p className="font-serif text-teal">Founder & Herbalist</p>
            <p className="font-serif text-brown-light mt-2">
              With over 15 years of experience in herbalism, Sarah brings a deep
              knowledge of plant medicine and a passion for holistic wellness.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/bm_daniel.jpeg"
                width={200}
                height={200}
                alt="Michael Chen - Master Formulator"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-brown">Michael Chen</h3>
            <p className="font-serif text-teal">Master Formulator</p>
            <p className="font-serif text-brown-light mt-2">
              Michael combines traditional Chinese medicine knowledge with
              modern botanical science to create our effective tincture
              formulations.
            </p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/af_sky.jpeg"
                width={200}
                height={200}
                alt="Elena Rodriguez - Quality Assurance"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-xl text-brown">Elena Rodriguez</h3>
            <p className="font-serif text-teal">Quality Assurance</p>
            <p className="font-serif text-brown-light mt-2">
              With a background in biochemistry, Elena ensures that every batch
              of our tinctures meets the highest standards for purity and
              potency.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 md:mt-24 bg-teal-light rounded-lg p-8 md:p-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-brown mb-4">
          Ready to Experience the Difference?
        </h2>
        <p className="font-serif text-brown-light mb-6 max-w-2xl mx-auto">
          Discover our handcrafted herbal tinctures and start your journey
          toward natural wellness today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-teal hover:bg-teal-dark text-cream">
            <Link href="/products">Shop Our Tinctures</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-brown text-brown hover:bg-brown hover:text-cream"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
