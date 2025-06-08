import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qash Capital",
  description: "Unlock Your Financial Potential with Qash Capital: Flexible loans, smart savings, and expert financial services.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <CookieConsent />
        <BackToTopButton />
      </body>
    </html>
  );
}
