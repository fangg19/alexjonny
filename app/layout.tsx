import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";
import { cls } from "./utils/utils";

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
      <body className={cls("px-4 md:px-20", robotoMono.className)}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
