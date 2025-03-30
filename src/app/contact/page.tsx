"use client";

import type React from "react";

import { HandDrawnUnderline } from "@/components/hand-drawn-elements";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl px-4 md:px-6 py-8 md:py-12 mx-auto">
      <PageTitle>Contact Us</PageTitle>

      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-cream p-6 md:p-8 rounded-lg">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-cream" />
                </div>
                <h2 className="font-display text-2xl text-brown mb-4">
                  Thank You!
                </h2>
                <p className="font-serif text-brown-light mb-6">
                  Your message has been sent successfully. We&apos;ll get back
                  to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-teal hover:bg-teal-dark text-cream"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-brown mb-6">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-serif text-brown mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-brown/20 focus:border-teal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-serif text-brown mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-brown/20 focus:border-teal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-serif text-brown mb-1"
                    >
                      Subject
                    </label>
                    <Select
                      value={formState.subject}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="bg-white border-brown/20 focus:border-teal">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-question">
                          Product Question
                        </SelectItem>
                        <SelectItem value="order-status">
                          Order Status
                        </SelectItem>
                        <SelectItem value="wholesale">
                          Wholesale Inquiry
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-serif text-brown mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white border-brown/20 focus:border-teal resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-dark text-cream"
                  >
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl text-brown mb-6 relative inline-block">
              Contact Information
              <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-brown">Email</h3>
                  <p className="font-serif text-brown-light">
                    <a
                      href="mailto:hello@herbalremedies.com"
                      className="hover:text-teal transition-colors"
                    >
                      hello@herbalremedies.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-brown">Phone</h3>
                  <p className="font-serif text-brown-light">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-teal transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-brown">Address</h3>
                  <p className="font-serif text-brown-light">
                    123 Botanical Lane
                    <br />
                    Portland, OR 97205
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-teal rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-cream" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-brown">
                    Business Hours
                  </h3>
                  <p className="font-serif text-brown-light">
                    Monday - Friday: 9am - 5pm PST
                    <br />
                    Saturday: 10am - 4pm PST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-display text-2xl text-brown mb-6 relative inline-block">
              Connect With Us
              <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
            </h2>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-teal rounded-full flex items-center justify-center hover:bg-teal-dark transition-colors"
              >
                <Instagram className="h-6 w-6 text-cream" />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-teal rounded-full flex items-center justify-center hover:bg-teal-dark transition-colors"
              >
                <Facebook className="h-6 w-6 text-cream" />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-teal rounded-full flex items-center justify-center hover:bg-teal-dark transition-colors"
              >
                <Twitter className="h-6 w-6 text-cream" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-brown text-center mb-12 relative w-fit mx-auto">
          Frequently Asked Questions
          <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream p-6 rounded-lg">
            <h3 className="font-display text-xl text-brown mb-3">
              How long do tinctures last?
            </h3>
            <p className="font-serif text-brown-light">
              Our tinctures have a shelf life of approximately 2-3 years when
              stored properly in a cool, dark place. Once opened, we recommend
              using them within 12 months for optimal potency.
            </p>
          </div>

          <div className="bg-cream p-6 rounded-lg">
            <h3 className="font-display text-xl text-brown mb-3">
              Do you ship internationally?
            </h3>
            <p className="font-serif text-brown-light">
              Yes, we ship to most countries worldwide. International shipping
              rates and delivery times vary by location. Please note that
              customers are responsible for any customs fees or import taxes.
            </p>
          </div>

          <div className="bg-cream p-6 rounded-lg">
            <h3 className="font-display text-xl text-brown mb-3">
              What&apos;s your return policy?
            </h3>
            <p className="font-serif text-brown-light">
              We stand behind the quality of our products. If you&apos;re not
              satisfied with your purchase, please contact us within 30 days of
              receipt, and we&apos;ll be happy to provide a refund or exchange.
            </p>
          </div>

          <div className="bg-cream p-6 rounded-lg">
            <h3 className="font-display text-xl text-brown mb-3">
              Are your tinctures safe during pregnancy?
            </h3>
            <p className="font-serif text-brown-light">
              Some herbs are not recommended during pregnancy or nursing. We
              always recommend consulting with your healthcare provider before
              using any herbal products during these times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
