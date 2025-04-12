import { OrderItem } from "./restaurant";

export enum Role {
  User = "User",
  Admin = "Admin",
}

export interface User {
  id: number | string;
  name: string;
  email: string;
  password: string;
  image: string | null;
  phone: string | null;
  streetAddress: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  orders: OrderItem[];
  accounts: Account[];
  sessions: Session[];
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: string;
  token_type: string;
  scope: string;
  id_token: string;
  session_state: string;
}
