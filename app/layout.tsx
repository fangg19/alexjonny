import Navbar from "./components/sections/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { cls } from "./utils/utils";
import FooterProgress from "./components/FooterProgress";
import { Analytics } from "@vercel/analytics/react";

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "alexjonny",
  description: "I'm Jonny and I like to play with code.",
  openGraph: {
    title: "alexjonny",
    description: "I'm Jonny and I like to play with code.",
    url: "https://alexjonny.com",
    siteName: "alexjonny",
    images: [
      {
        url: "/assets/images/og_twitter.png",
        width: 800,
        height: 600,
      },
      {
        url: "/assets/images/og_twitter.png",
        width: 1800,
        height: 1600,
        alt: "alt og image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.png" }, new URL("/icon.png", "https://example.com")],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={cls("px-4 md:px-20", ibmPlexMono.className)}>
        <Navbar />
        {children}
        <FooterProgress />
        <Analytics />
      </body>
    </html>
  );
}
