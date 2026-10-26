import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bihar Builders | Architects & Turnkey Civil Engineers",
  description: "Premier architectural design, turnkey civil engineering, and interior design studio led by Ar. Imran Ahmad (B.Arch, Jamia Millia Islamia). Luxury residences, commercial complexes, and bespoke interiors in Bihar and Delhi NCR.",
  keywords: [
    "Bihar Builders",
    "Ar. Imran Ahmad Architect",
    "Architects in Araria Bihar",
    "Turnkey Construction Bihar",
    "Luxury Villa Architecture",
    "Commercial Building Construction Patna",
    "Interior Designers Bihar"
  ],
  authors: [{ name: "Ar. Imran Ahmad" }],
  openGraph: {
    title: "Bihar Builders | Quality Construction, Honest Services, Great Value",
    description: "Turnkey architectural design, civil engineering, and bespoke interiors across Bihar and Delhi NCR.",
    siteName: "Bihar Builders",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
