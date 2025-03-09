export interface Links {
  id: number;
  name: string;
  href: string;
  icon?: string;
}

export const links: Links[] = [
  { id: 1, name: "Home", icon: "tabler:home", href: "/" },
  {
    id: 2,
    name: "Restaurants",
    icon: "hugeicons:restaurant-01",
    href: "/restaurants",
  },
  {
    id: 3,
    name: "Clinics",
    icon: "healthicons:ambulatory-clinic-outline",
    href: "/clinic/all",
  },
  {
    id: 4,
    name: "Become-a-Partner",
    icon: "material-symbols-light:partner-exchange-rounded",
    href: "/be-partner",
  },
  {
    id: 5,
    name: "About",
    icon: "ix:about",
    href: "/about-us",
  },
];