import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata, Viewport } from "next";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "SECURICO Zimbabwe | 25+ Years of Quality & Professional Security Services",
  description:
    "Securico Zimbabwe provides trusted security solutions including guarding services, rapid response, smart monitoring and risk prevention for businesses and homes across Zimbabwe.",
  keywords: [
    "security services Zimbabwe",
    "guarding services",
    "smart monitoring",
    "rapid response security",
    "corporate security Zimbabwe",
    "home security Zimbabwe"
  ],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "SECURICO Zimbabwe | 25+ Years of Quality & Professional Security Services",
    description:
      "Trusted security solutions including rapid response, guarding services and smart monitoring across Zimbabwe.",
    url: "https://securico.co.zw",
    siteName: "Securico Zimbabwe",
    images: [
      {
        url: "https://securico.co.zw/wp-content/uploads/2024/07/how-we-make_-1024x682.jpg",
        width: 1200,
        height: 630,
        alt: "Securico Zimbabwe – Trusted Security Services"
      }
    ],
    locale: "en_ZW",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
