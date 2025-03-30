import type { Product } from "@/lib/types";

// Product data with actual data from JSON and additional products
const products: Product[] = [
  {
    id: "1",
    name: "Calm Mind Tincture",
    description: "A blend of herbs to help you reduce stress and anxiety.",
    fullDescription:
      "Our Calm Mind Tincture is a carefully crafted blend of nervine herbs known for their ability to soothe the nervous system and promote a sense of tranquility. Perfect for those moments when you need to find your center amidst the chaos of daily life.",
    price: 24.99,
    images: [
      "/images/products/calm-mind-1.jpeg",
      "/images/products/calm-mind-2.jpeg",
      "/images/products/calm-mind-3.jpeg",
      "/images/products/calm-mind-4.jpeg",
    ],
    category: "Calm",
    ingredients: ["Lavender", "Chamomile", "Skullcap", "Valerian Root"],
    benefits: ["Reduces stress", "Promotes relaxation", "Eases anxiety"],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2-3 times daily or as needed. For best absorption, hold under tongue for 30 seconds before swallowing.",
    featured: true,
    createdAt: "2023-01-15",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.5,
    reviewCount: 150,
  },
  {
    id: "2",
    name: "Deep Sleep Tincture",
    description: "A soothing blend of herbs to help you drift off to sleep.",
    fullDescription:
      "Our Deep Sleep Tincture combines traditional sleep-supporting herbs to help you gently drift into restorative sleep. Unlike synthetic sleep aids, this formula works with your body's natural rhythms to promote healthy sleep cycles without morning grogginess.",
    price: 28.99,
    images: [
      "/images/products/deep-sleep-1.jpeg",
      "/images/products/deep-sleep-2.jpeg",
      "/images/products/deep-sleep-3.jpeg",
      "/images/products/deep-sleep-4.jpeg",
    ],
    category: "Sleep",
    ingredients: ["Valerian Root", "Lavender", "California Poppy"],
    benefits: ["Promotes sleep", "Reduces insomnia", "Calming effect"],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea 30 minutes before bedtime. For enhanced effects, pair with a calming bedtime ritual.",
    featured: true,
    createdAt: "2023-02-10",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.8,
    reviewCount: 200,
  },
  {
    id: "3",
    name: "Digest Ease Tincture",
    description:
      "A digestive aid to ease bloating, gas, and stomach discomfort.",
    fullDescription:
      "Our Digest Ease Tincture combines traditional carminative herbs that have been used for centuries to support digestive health. This balanced formula helps ease bloating, indigestion, and occasional stomach discomfort while promoting healthy digestive function.",
    price: 26.99,
    images: [
      "/images/products/digest-ease-1.jpeg",
      "/images/products/digest-ease-2.jpeg",
      "/images/products/digest-ease-3.jpeg",
      "/images/products/digest-ease-4.jpeg",
    ],
    category: "Digest",
    ingredients: ["Peppermint", "Ginger", "Fennel Seed"],
    benefits: ["Relieves bloating", "Supports digestion", "Reduces nausea"],
    usage:
      "Take 1-2 droppers (30-60 drops) in water before or after meals, or as needed for digestive support.",
    featured: true,
    createdAt: "2023-03-05",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.2,
    reviewCount: 100,
  },
  {
    id: "4",
    name: "Immune Boost Tincture",
    description:
      "Strengthens your immune system with a powerful blend of herbs.",
    fullDescription:
      "Our Immune Boost Tincture is formulated with potent immune-supporting herbs that have been used in traditional medicine systems for centuries. This synergistic blend helps fortify your body's natural defenses and provides support during seasonal challenges.",
    price: 29.99,
    images: [
      "/images/products/immune-boost-1.jpeg",
      "/images/products/immune-boost-2.jpeg",
      "/images/products/immune-boost-3.jpeg",
      "/images/products/immune-boost-4.jpeg",
    ],
    category: "Immune",
    ingredients: ["Elderberry", "Echinacea", "Astragalus"],
    benefits: [
      "Boosts immunity",
      "Reduces cold symptoms",
      "Antiviral properties",
    ],
    usage:
      "For daily immune support, take 1 dropper (30 drops) in water or tea, 1-2 times daily. During times of increased need, take 2 droppers, 3-4 times daily.",
    featured: true,
    createdAt: "2023-01-20",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.7,
    reviewCount: 180,
  },
  {
    id: "5",
    name: "Energy Boost Tincture",
    description: "A revitalizing blend to enhance energy and mental clarity.",
    fullDescription:
      "Our Energy Boost Tincture combines adaptogenic herbs known for their ability to increase energy and focus without the crash of caffeine. This balanced formula helps improve mental clarity, physical stamina, and overall vitality.",
    price: 27.99,
    images: [
      "/images/products/energy-boost-1.jpeg",
      "/images/products/energy-boost-2.jpeg",
      "/images/products/energy-boost-3.jpeg",
      "/images/products/energy-boost-4.jpeg",
    ],
    category: "Energy",
    ingredients: ["Ginseng", "Ginkgo Biloba", "Peppermint"],
    benefits: [
      "Increases energy naturally",
      "Enhances mental clarity",
      "Improves stamina",
      "Supports adrenal health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea in the morning or early afternoon. Not recommended in the evening as it may interfere with sleep.",
    featured: false,
    createdAt: "2023-04-15",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.6,
    reviewCount: 120,
  },
  {
    id: "6",
    name: "Stress Relief Tincture",
    description: "A calming blend to help manage daily stress and anxiety.",
    fullDescription:
      "Our Stress Relief Tincture is formulated with adaptogenic herbs that help your body respond to stress in a healthy way. This balanced formula supports your nervous system during times of tension and helps restore a sense of calm and balance.",
    price: 25.99,
    images: [
      "/images/products/stress-relief-1.jpeg",
      "/images/products/stress-relief-2.jpeg",
      "/images/products/stress-relief-3.jpeg",
      "/images/products/stress-relief-4.jpeg",
    ],
    category: "Calm",
    ingredients: ["Lavender", "Lemon Balm", "Passionflower"],
    benefits: [
      "Reduces feelings of stress and anxiety",
      "Supports adrenal function",
      "Promotes mental clarity under pressure",
      "Helps balance mood",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2-3 times daily or as needed during stressful situations.",
    featured: false,
    createdAt: "2023-02-28",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.4,
    reviewCount: 95,
  },
  {
    id: "7",
    name: "Liver Detox Tincture",
    description:
      "A cleansing blend to support your body's natural detoxification processes.",
    fullDescription:
      "Our Liver Detox Tincture combines traditional hepatoprotective herbs known for their ability to support liver health and detoxification. This balanced formula helps cleanse and protect your liver, promoting its vital role in filtering toxins from your body.",
    price: 28.99,
    images: [
      "/images/products/liver-detox-1.jpeg",
      "/images/products/liver-detox-2.jpeg",
      "/images/products/liver-detox-3.jpeg",
      "/images/products/liver-detox-4.jpeg",
    ],
    category: "Digest",
    ingredients: ["Milk Thistle", "Dandelion Root", "Turmeric"],
    benefits: [
      "Supports healthy liver function",
      "Promotes natural detoxification",
      "Provides antioxidant protection",
      "Helps cleanse the blood",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2 times daily. For a deeper cleanse, take for 2-4 weeks consecutively.",
    featured: false,
    createdAt: "2023-03-20",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.3,
    reviewCount: 85,
  },
  {
    id: "8",
    name: "Women's Balance Tincture",
    description:
      "A harmonizing blend to support women's hormonal health and wellbeing.",
    fullDescription:
      "Our Women's Balance Tincture is thoughtfully formulated with herbs traditionally used to support women's hormonal health throughout the monthly cycle. This balanced blend helps ease PMS symptoms, promote emotional wellbeing, and support overall hormonal balance.",
    price: 32.99,
    images: [
      "/images/products/women-balance-1.jpeg",
      "/images/products/women-balance-2.jpeg",
      "/images/products/women-balance-3.jpeg",
      "/images/products/women-balance-4.jpeg",
    ],
    category: "Calm",
    ingredients: ["Red Raspberry Leaf", "Dong Quai", "Motherwort"],
    benefits: [
      "Supports hormonal balance",
      "Helps ease PMS symptoms",
      "Promotes emotional wellbeing",
      "Supports reproductive health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2 times daily throughout the month for best results.",
    featured: false,
    createdAt: "2023-02-28",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.7,
    reviewCount: 110,
  },
  {
    id: "9",
    name: "Sleep Deep Tincture",
    description: "Our strongest formula for deep, restorative sleep.",
    fullDescription:
      "Sleep Deep Tincture is our most potent sleep formula, designed for those who struggle with persistent sleep issues. This powerful blend helps you fall asleep faster and stay asleep longer, promoting the deep restorative sleep your body needs.",
    price: 34.99,
    images: [
      "/images/products/sleep-deep-1.jpeg",
      "/images/products/sleep-deep-2.jpeg",
      "/images/products/sleep-deep-3.jpeg",
      "/images/products/sleep-deep-4.jpeg",
    ],
    category: "Sleep",
    ingredients: ["Valerian Root", "Passionflower", "Hops", "California Poppy"],
    benefits: [
      "Promotes deep, restorative sleep",
      "Helps with falling asleep faster",
      "Reduces nighttime waking",
      "Supports healthy sleep cycles",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea 30-45 minutes before bedtime. For best results, establish a consistent sleep routine.",
    featured: false,
    createdAt: "2023-05-15",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.9,
    reviewCount: 75,
  },
  {
    id: "10",
    name: "Immune Defense Plus",
    description: "Extra-strength immune support with echinacea and elderberry.",
    fullDescription:
      "Our Immune Defense Plus is an extra-strength formula designed to provide robust support for your immune system. This potent blend combines traditional immune-supporting herbs with powerful antioxidants to help your body's natural defenses, especially during seasonal challenges.",
    price: 36.99,
    images: [
      "/images/products/immune-defense-1.jpeg",
      "/images/products/immune-defense-2.jpeg",
      "/images/products/immune-defense-3.jpeg",
      "/images/products/immune-defense-4.jpeg",
    ],
    category: "Immune",
    ingredients: [
      "Echinacea",
      "Elderberry",
      "Reishi Mushroom",
      "Ginger",
      "Zinc",
    ],
    benefits: [
      "Strengthens immune response",
      "Provides antioxidant support",
      "Helps fight seasonal threats",
      "Supports respiratory health",
    ],
    usage:
      "For daily maintenance, take 1 dropper (30 drops) in water or tea, 1-2 times daily. During times of increased need, take 2 droppers, 3-4 times daily.",
    featured: false,
    createdAt: "2023-06-10",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.8,
    reviewCount: 95,
  },
  {
    id: "11",
    name: "Digest Complete",
    description: "Comprehensive digestive support with ginger and peppermint.",
    fullDescription:
      "Digest Complete is our most comprehensive digestive formula, designed to address multiple aspects of digestive health. This balanced blend helps soothe digestive discomfort, support healthy gut function, and promote optimal nutrient absorption.",
    price: 32.99,
    images: [
      "/images/products/digest-complete-1.jpeg",
      "/images/products/digest-complete-2.jpeg",
      "/images/products/digest-complete-3.jpeg",
      "/images/products/digest-complete-4.jpeg",
    ],
    category: "Digest",
    ingredients: [
      "Ginger",
      "Peppermint",
      "Fennel",
      "Chamomile",
      "Marshmallow Root",
    ],
    benefits: [
      "Relieves digestive discomfort",
      "Reduces bloating and gas",
      "Supports healthy gut flora",
      "Improves nutrient absorption",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water before meals or as needed for digestive support. Can be used daily for ongoing digestive health.",
    featured: false,
    createdAt: "2023-07-05",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.6,
    reviewCount: 88,
  },
  {
    id: "12",
    name: "Focus Formula",
    description:
      "Enhance mental clarity and concentration with herbal nootropics.",
    fullDescription:
      "Our Focus Formula combines traditional herbal nootropics to support cognitive function, mental clarity, and sustained focus. This balanced blend helps improve concentration and memory without the jitters or crash associated with caffeine.",
    price: 29.99,
    images: [
      "/images/products/focus-formula-1.jpeg",
      "/images/products/focus-formula-2.jpeg",
      "/images/products/focus-formula-3.jpeg",
      "/images/products/focus-formula-4.jpeg",
    ],
    category: "Energy",
    ingredients: [
      "Ginkgo Biloba",
      "Bacopa Monnieri",
      "Lion's Mane Mushroom",
      "Peppermint",
    ],
    benefits: [
      "Enhances mental clarity and focus",
      "Supports memory and cognitive function",
      "Improves concentration",
      "Promotes brain health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea in the morning or early afternoon. Not recommended in the evening as it may interfere with sleep.",
    featured: false,
    createdAt: "2023-08-20",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.5,
    reviewCount: 65,
  },
  {
    id: "13",
    name: "Allergy Relief Tincture",
    description:
      "Natural support for seasonal allergies and respiratory health.",
    fullDescription:
      "Our Allergy Relief Tincture is specially formulated to provide natural support for seasonal allergies and respiratory health. This balanced blend helps modulate the body's histamine response and supports clear breathing during allergy season.",
    price: 27.99,
    images: [
      "/images/products/allergy-relief-1.jpeg",
      "/images/products/allergy-relief-2.jpeg",
      "/images/products/allergy-relief-3.jpeg",
      "/images/products/allergy-relief-4.jpeg",
    ],
    category: "Immune",
    ingredients: [
      "Nettle Leaf",
      "Eyebright",
      "Quercetin",
      "Elderberry",
      "Echinacea",
    ],
    benefits: [
      "Supports healthy histamine response",
      "Promotes clear breathing",
      "Soothes irritated tissues",
      "Supports respiratory health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2-3 times daily during allergy season or as needed for symptom relief.",
    featured: false,
    createdAt: "2023-09-15",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.4,
    reviewCount: 72,
  },
  {
    id: "14",
    name: "Joint Relief Tincture",
    description: "Herbal support for joint comfort and mobility with turmeric.",
    fullDescription:
      "Our Joint Relief Tincture combines traditional anti-inflammatory herbs known for their ability to support joint health and comfort. This balanced formula helps ease occasional joint discomfort while promoting long-term joint health and mobility.",
    price: 31.99,
    images: [
      "/images/products/joint-relief-1.jpeg",
      "/images/products/joint-relief-2.jpeg",
      "/images/products/joint-relief-3.jpeg",
      "/images/products/joint-relief-4.jpeg",
    ],
    category: "Immune",
    ingredients: [
      "Turmeric",
      "Ginger",
      "Boswellia",
      "Devil's Claw",
      "Black Pepper",
    ],
    benefits: [
      "Supports joint comfort and mobility",
      "Helps ease occasional joint discomfort",
      "Promotes healthy inflammatory response",
      "Supports overall joint health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea, 2-3 times daily. Best results when used consistently over time.",
    featured: false,
    createdAt: "2023-10-05",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Contains alcohol",
    reviewStars: 4.6,
    reviewCount: 85,
  },
  {
    id: "15",
    name: "Brain Boost Tincture",
    description:
      "Support cognitive function and memory with herbal nootropics.",
    fullDescription:
      "Our Brain Boost Tincture is formulated with traditional herbs known for their cognitive-enhancing properties. This balanced blend helps support memory, focus, and overall brain health, making it ideal for students, professionals, and anyone looking to maintain cognitive function as they age.",
    price: 33.99,
    images: [
      "/images/products/brain-boost-1.jpeg",
      "/images/products/brain-boost-2.jpeg",
      "/images/products/brain-boost-3.jpeg",
      "/images/products/brain-boost-4.jpeg",
    ],
    category: "Energy",
    ingredients: [
      "Bacopa Monnieri",
      "Ginkgo Biloba",
      "Lion's Mane Mushroom",
      "Rosemary",
      "Peppermint",
    ],
    benefits: [
      "Enhances memory and recall",
      "Supports focus and concentration",
      "Promotes healthy brain circulation",
      "Supports long-term brain health",
    ],
    usage:
      "Take 1-2 droppers (30-60 drops) in water or tea in the morning or early afternoon. Not recommended in the evening as it may interfere with sleep.",
    featured: false,
    createdAt: "2023-11-10",
    sizeOptions: ["1 oz", "2 oz"],
    alcoholContent: "Alcohol-free",
    reviewStars: 4.7,
    reviewCount: 60,
  },
];

// Get all products
export function getProducts(): Product[] {
  return products;
}

// Get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

// Get product by id
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

// Get related products
export function getRelatedProducts(id: string): Product[] {
  const currentProduct = getProductById(id);
  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.id !== id && product.category === currentProduct.category
    )
    .slice(0, 3);
}

// Search products
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm)
      )
  );
}
