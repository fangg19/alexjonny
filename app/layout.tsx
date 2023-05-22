import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "alexjonny",
  description: "alexjonny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
