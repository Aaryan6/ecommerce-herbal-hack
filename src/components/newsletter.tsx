"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HandDrawnUnderline } from "@/components/hand-drawn-elements";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-teal-light">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-brown mb-2 relative inline-block">
            Join Our Community
            <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal" />
          </h2>

          <p className="font-serif text-brown-light mt-6 mb-8">
            Subscribe to our newsletter for herbal wisdom, seasonal recipes, and
            exclusive offers.
          </p>

          {submitted ? (
            <div className="bg-cream p-6 rounded-lg">
              <p className="font-display text-xl text-teal mb-2">
                Thank you for subscribing!
              </p>
              <p className="font-serif text-brown-light">
                We&apos;ve sent a welcome email to your inbox. Keep an eye out
                for herbal goodness coming your way soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cream border-transparent focus:border-teal focus:ring-teal"
              />
              <Button
                type="submit"
                className="bg-brown hover:bg-brown-dark text-cream whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
