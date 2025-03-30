"use client";

import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  const cartItemsCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-cream shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-cream border-r border-brown/20"
            >
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="font-display text-2xl text-brown hover:text-teal transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="font-display text-2xl text-brown hover:text-teal transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="font-display text-2xl text-brown hover:text-teal transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="font-display text-2xl text-brown hover:text-teal transition-colors"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl text-brown">
              Herbal Remedies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "font-serif text-brown hover:text-teal transition-colors",
                pathname === "/" && "text-teal font-medium"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                "font-serif text-brown hover:text-teal transition-colors",
                pathname.startsWith("/products") && "text-teal font-medium"
              )}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-serif text-brown hover:text-teal transition-colors",
                pathname === "/about" && "text-teal font-medium"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-serif text-brown hover:text-teal transition-colors",
                pathname === "/contact" && "text-teal font-medium"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-brown hover:text-teal"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-brown hover:text-teal relative"
              asChild
            >
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-teal text-cream text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
