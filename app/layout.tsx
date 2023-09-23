import Navbar from "./components/sections/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { cls } from "./utils/utils";
import FooterProgress from "./components/FooterProgress";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "alexjonny",
  description: "I'm Jonny and I like to code I think.",
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
    locale: "en_US",
    type: "website",
  },

  themeColor: "dark",
  robots: {
    follow: true,
    index: true,
    nocache: false,
    googleBot: "index,follow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(ibmPlexMono.className)}>
        <Navbar />
        {children}
        <FooterProgress />
        <Analytics />
      </body>
    </html>
  );
}
