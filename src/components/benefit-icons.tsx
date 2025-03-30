import Image from "next/image";

export function BenefitIcons() {
  const benefits = [
    {
      icon: "/images/13c.jpeg",
      title: "100% Organic",
      description:
        "All ingredients are certified organic and sustainably harvested",
    },
    {
      icon: "/images/12a.jpeg",
      title: "Small Batch",
      description: "Handcrafted in small batches to ensure quality and potency",
    },
    {
      icon: "/images/14a.jpeg",
      title: "Alcohol-Free Options",
      description:
        "Available in both alcohol and glycerin bases for all preferences",
    },
    {
      icon: "/images/energy-boost-3.jpeg",
      title: "Eco-Friendly",
      description:
        "Packaged in recyclable materials with minimal environmental impact",
    },
  ];

  return (
    <section className="w-full py-16 bg-cream">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg text-brown mb-2">
                {benefit.title}
              </h3>
              <p className="font-serif text-sm text-brown-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
