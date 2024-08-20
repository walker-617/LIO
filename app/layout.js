import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LIO",
  description: "Personalized portfoLIO builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} selection:bg-orange-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
