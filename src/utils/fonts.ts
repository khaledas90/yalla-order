import { Cairo, Cabin_Sketch } from "next/font/google";

export const cairoFont = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  preload: true,
  display: "swap",
});

export const cabinSketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["400", "700"],
});
