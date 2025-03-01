export interface ITabs {
  id: number;
  title: string;
  icon: string;
}

export const TabLink: ITabs[] = [
  {
    id: 1,
    title: "Edit Profile",
    icon: "mage:edit",
  },
  {
    id: 2,
    title: "My Order",
    icon: "material-symbols-light:order-approve-sharp",
  },
  //   {
  //     id: 3,
  //     title: "My reservations",
  //     icon: "fluent-mdl2:reservation-orders",
  //   },
  {
    id: 4,
    title: "Saved Address",
    icon: "mdi:address-marker-outline",
  },
];
