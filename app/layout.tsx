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
    //     url: "opengraph-image.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // icons: {
  //   icon: [{ url: "/favicon.ico" }],
  //   shortcut: ["/shortcut-icon.png"],
  //   apple: [
  //     { url: "/apple-touch-icon.png" },
  //     { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  //   ],
  //   other: [
  //     {
  //       rel: "favicon-16x16",
  //       url: "/favicon-16x16.png",
  //     },
  //     {
  //       rel: "favicon-32x32",
  //       url: "/favicon-32x32.png",
  //     },
  //   ],
  // },
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body className={cls("px-4 md:px-20", ibmPlexMono.className)}>
        <Navbar />
        {children}
        <FooterProgress />
        <Analytics />
      </body>
    </html>
  );
}
