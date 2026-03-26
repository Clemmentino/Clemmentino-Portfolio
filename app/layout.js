import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

export const metadata = {
  title: "Clemmentino Portfolio | Frontend-Focused Full-Stack Developer",
  description:
    "A light, portrait-led portfolio for a frontend-focused full-stack developer interested in websites, frontend systems, and public-interest technology.",
  icons: {
    icon: "/svglogo.png",
    shortcut: "/svglogo.png",
    apple: "/svglogo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
