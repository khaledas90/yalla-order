import { User } from "./user";

export interface Restaurant {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface OrderItem {
  id: string;
  // order: Order;
  orderId: string;
  // product: Product;
  productId: string;
  quantity: string;
  size: string;
  user: User;
  userId: string;
  extras: string[];
  sauces: string[];
  createdAt: string;
  updatedAt: string;
}
