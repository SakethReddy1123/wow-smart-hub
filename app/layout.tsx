import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "WoW Smart Hub | Women Powered Smart Community Kiosks",
  description:
    "WoW Smart Hub is a women-led smart kiosk franchise model offering community-based retail services including cleaning, vending, and lifestyle utilities.",
  keywords: [
    "WoW Smart Hub",
    "women powered",
    "smart kiosk",
    "community services",
    "franchise",
    "BETAWOMEN LLP",
  ],
  openGraph: {
    title: "WoW Smart Hub | Women Powered Smart Community Kiosks",
    description:
      "WoW Smart Hub is a women-led smart kiosk franchise model offering community-based retail services including cleaning, vending, and lifestyle utilities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WoW Smart Hub | Women Powered Smart Community Kiosks",
    description:
      "WoW Smart Hub is a women-led smart kiosk franchise model offering community-based retail services.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
