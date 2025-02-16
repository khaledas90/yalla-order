export interface Links {
  id: number;
  name: string;
  href: string;
}

export const links: Links[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Restaurants", href: "/restaurants" },
  { id: 3, name: "Clinics", href: "/clinics" },
  { id: 4, name: "Become-a-Partner", href: "/become-a-partner" },
  { id: 5, name: "About", href: "/about-us" },
];
