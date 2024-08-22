import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LIO",
  description: "Personalized portfoLIO builder",
};

import NavBarDesktop from "@/components/navBars/navBarDesktop";
import NavBarMobile from "@/components/navBars/navBarMobile";
import BottomGrad from "@/components/home/bottomGrad";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} selection:bg-orange-500 selection:text-black mb-[100px]`}
      >
        <NavBarDesktop />
        <NavBarMobile />
        <BottomGrad />
        {children}
      </body>
    </html>
  );
}
