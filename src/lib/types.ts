export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price: number;
  images: string[];
  category: string;
  ingredients: string[];
  benefits: string[];
  usage?: string;
  featured?: boolean;
  createdAt?: string;
  sizeOptions?: string[];
  alcoholContent?: string;
  reviewStars?: number;
  reviewCount?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}
