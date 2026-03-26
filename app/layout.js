import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const themeInitScript = `
(() => {
  const storageKey = "clemmentino-theme-preference";
  const root = document.documentElement;

  const getAutoTheme = (date = new Date()) => {
    const hour = date.getHours();

    if (hour >= 17 || hour < 5) {
      return "dark";
    }

    if (hour < 6) {
      return "dawn";
    }

    return "light";
  };

  try {
    const preference = localStorage.getItem(storageKey) || "auto";
    const theme = preference === "auto" ? getAutoTheme() : preference;

    root.dataset.themePreference = preference;
    root.dataset.theme = theme;
  } catch {
    root.dataset.themePreference = "auto";
    root.dataset.theme = getAutoTheme();
  }
})();
`;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const metadataBase =
  process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL("http://localhost:3000");

export const metadata = {
  metadataBase,
  title: "Clemmentino Portfolio | Frontend-Focused Full-Stack Developer",
  description:
    "A light, portrait-led portfolio for a frontend-focused full-stack developer interested in websites, frontend systems, and public-interest technology.",
  openGraph: {
    title: "Clemmentino Portfolio",
    description:
      "Frontend-focused full-stack developer building websites, interfaces, and public-interest systems with a clear visual eye.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clemmentino Portfolio",
    description:
      "Frontend-focused full-stack developer building websites, interfaces, and public-interest systems with a clear visual eye."
  },
  icons: {
    icon: "/svglogo.png",
    shortcut: "/svglogo.png",
    apple: "/svglogo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
