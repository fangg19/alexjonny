import Navbar from "./components/sections/Navbar";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { keywords } from "./utils/keywords";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "alexjonny",
  description: "I'm Jonny and I like to code I think.",
  authors: [{ name: "Serban Alexandru Jonny", url: "https://alexjonny.com" }],
  category: "Portfolio",
  metadataBase: new URL("https://alexjonny.com"),
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme: "dark",
  keywords: keywords.join(", "),
  themeColor: "dark",
  robots: {
    follow: true,
    index: true,
    nocache: false,
    googleBot: "index,follow",
  },
  openGraph: {
    title: "alexjonny",
    description: "I'm Jonny and I like to code I think.",
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
    emails: ["hello@alexjonny.com", "alexjohnny6@gmail.com"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
