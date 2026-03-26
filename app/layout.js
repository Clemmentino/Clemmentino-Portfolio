import { Cormorant_Garamond, Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata = {
  title: "Clemmentino | Light Motion Portfolio",
  description:
    "A light, editorial portfolio for a creative frontend developer focused on refined motion, image-led storytelling, and Vercel-ready performance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
