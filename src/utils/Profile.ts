export interface ITabs {
  id: number;
  title: string;
  icon: string;
}

export const TabLink: ITabs[] = [
  {
    id: 1,
    title: "Edit Profile",
    icon: "stash:home",
  },
  {
    id: 2,
    title: "My Order",
    icon: "stash:home",
  },
  //   {
  //     id: 3,
  //     title: "My reservations",
  //     icon: "stash:home",
  //   },
  {
    id: 4,
    title: "Saved Address",
    icon: "stash:home",
  },
];
