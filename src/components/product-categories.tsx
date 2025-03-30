import Link from "next/link";
import Image from "next/image";

export function ProductCategories() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      image: "/placeholder.svg?height=240&width=320",
      itemCount: 42,
    },
    {
      id: "clothing",
      name: "Clothing",
      image: "/placeholder.svg?height=240&width=320",
      itemCount: 56,
    },
    {
      id: "home",
      name: "Home & Garden",
      image: "/placeholder.svg?height=240&width=320",
      itemCount: 38,
    },
    {
      id: "sports",
      name: "Sports & Outdoors",
      image: "/placeholder.svg?height=240&width=320",
      itemCount: 24,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Shop by Category
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Browse our collections by category
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-200">
                    {category.itemCount} items
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
