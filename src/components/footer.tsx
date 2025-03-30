import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl mb-4">Herbal Remedies</h3>
            <p className="font-serif text-cream/80 mb-6">
              Handcrafted tinctures made with organic ingredients to support
              your natural wellness journey.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-cream/80 hover:text-teal transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-cream/80 hover:text-teal transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-cream/80 hover:text-teal transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Shop</h3>
            <ul className="font-serif space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=calm"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Calm Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sleep"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Sleep Support
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=digest"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Digestive Health
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=immune"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Immune Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Information</h3>
            <ul className="font-serif space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-cream/80 hover:text-teal transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Stay Connected</h3>
            <p className="font-serif text-cream/80 mb-4">
              Subscribe to our newsletter for herbal wisdom and exclusive
              offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-brown-light border-cream/20 text-cream placeholder:text-cream/50"
              />
              <Button className="w-full bg-teal hover:bg-teal-dark text-cream">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-6 text-center font-serif text-cream/60 text-sm">
          <p>
            © {new Date().getFullYear()} Herbal Remedies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
