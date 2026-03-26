import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata = {
  title: "Clemmentino | Frontend-Focused Full-Stack Developer",
  description:
    "A light, interactive portfolio for a frontend-focused full-stack developer with a designer-led eye for motion, composition, and thoughtful interfaces."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
