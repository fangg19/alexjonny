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
    // images: [
    //   {
    //     url: "public/assets/images/og_twitter.png",
    //     width: 1012,
    //     height: 506,
    //   },
    //   {
    //     url: "public/assets/images/og_twitter.png",
    //     width: 1012,
    //     height: 506,
    //     alt: "alt og image",
    //   },
    // ],
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
  themeColor: "dark",
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
