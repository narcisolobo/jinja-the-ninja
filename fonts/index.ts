import { Bangers, Nunito_Sans } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

const nunito = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export { bangers, nunito };
