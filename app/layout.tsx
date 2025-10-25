import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Chanel Mack | Actress & Creative",
  description:
    "The official one-page experience for actress Chanel Mack — bio, imagery, reel, and contact."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
