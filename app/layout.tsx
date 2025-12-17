import "./global.css";
import Navbar from "./components/sections/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { keywords } from "./utils/keywords";
import { GeistMono } from "geist/font/mono";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "alexjonny",
  description: "i'm Jonny and i think i like code",
  authors: [
    { name: "Serban Alexandru Jonny", url: "https://alexjonny.com" },
    { name: "fangg19", url: "https://alexjonny.com" },
  ],
  category: "Portfolio",
  metadataBase: new URL("https://alexjonny.com"),
  keywords: keywords.join(", "),
  robots: {
    follow: true,
    index: true,
    nocache: false,
    googleBot: "index,follow",
  },
  openGraph: {
    title: "alexjonny",
    description: "i'm Jonny and i think i like code",
    url: "https://alexjonny.com",
    siteName: "alexjonny",
    images: [
      {
        url: "opengraph-image.png",
        width: 900,
        height: 450,
      },
    ],
    locale: "en_GB",
    alternateLocale: ["en_US"],
    countryName: "Romania",
    emails: ["hello@alexjonny.com"],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "width=device-width, initial-scale=1.0",
  colorScheme: "dark",
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>
        <Navbar />
        {children}
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
