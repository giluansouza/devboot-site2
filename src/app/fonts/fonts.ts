import { Playfair_Display, Roboto } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair-display",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
