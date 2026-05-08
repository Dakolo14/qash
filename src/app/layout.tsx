import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <BackToTopButton />
      </body>
    </html>
  );
}
