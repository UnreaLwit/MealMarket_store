import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MealMarket - доставка продуктов",
  description:
    "Ваш персональный супермаркет! Доставляем свежие и качественные продукты прямо к вашей двери. Удобство, скорость и отличный выбор — всё для вашего комфорта!",
  openGraph: {
    title: "MealMarket - доставка продуктов",
    description:
      "Ваш персональный супермаркет! Доставляем свежие и качественные продукты прямо к вашей двери. Удобство, скорость и отличный выбор — всё для вашего комфорта!",
    url: "https://unrealwit.github.io/MealMarket/",
    images: [
      {
        url: "/public/ShopIcon.webp",
        alt: "MealMarket",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container max-w-7xl mx-auto min-h-screen flex flex-col select-none`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
