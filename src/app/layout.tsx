"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Cinzel } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@/components/ui/header";
import SlideMenu from "@/components/ui/slide-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Login sayfasında header ve menüyü gizle
  const hideHeaderAndMenu = pathname === '/login';

  return (
    <html lang="tr">
      <head>
        <title>Vacid & Köksal Foundation</title>
        <meta name="description" content="Vacid & Köksal Foundation resmi web sitesi" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cinzel.variable} antialiased bg-white`}
      >
        {/* Slide-out Menu - sadece login sayfası değilse göster */}
        {!hideHeaderAndMenu && (
          <SlideMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
          />
        )}
        
        <div 
          className={`transition-all duration-300 ${
            isMenuOpen && !hideHeaderAndMenu ? 'transform translate-x-4 blur-sm' : ''
          }`}
        >
          {/* Header - sadece login sayfası değilse göster */}
          {!hideHeaderAndMenu && (
            <Header 
              onMenuToggle={() => setIsMenuOpen(true)}
              isDark={false} 
            />
          )}
          
          {/* Sayfa içeriği */}
          {children}
        </div>
      </body>
    </html>
  );
}
