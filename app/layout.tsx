import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";
import { cls } from "./utils/utils";
import classes from "./components/styles/CustomCursor.module.scss";
import FooterProgress from "./components/FooterProgress";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "alexjonny",
  description:
    "I'm Jonny (or Alex) and I'm a front-end developer and a sucker for smooth and clean design.",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
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
      <body className={cls("px-4 md:px-20", robotoMono.className)}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <FooterProgress />
      </body>
    </html>
  );
}
