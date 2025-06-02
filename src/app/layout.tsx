"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Cinzel } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layouts/client-layout";

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
  return (
    <html lang="tr">
      <head>
        <title>Vacid & Köksal Foundation</title>
        <meta name="description" content="Vacid & Köksal Foundation resmi web sitesi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Performance ve Cache optimizasyonu */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta name="preload" content="auto" />
        
        {/* DNS prefetch - video hostları için */}
        <link rel="dns-prefetch" href="//me7aitdbxq.ufs.sh" />
        <link rel="dns-prefetch" href="//videos.pexels.com" />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//ik.imagekit.io" />
        
        {/* Video preconnect */}
        <link rel="preconnect" href="https://me7aitdbxq.ufs.sh" />
        <link rel="preconnect" href="https://videos.pexels.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cinzel.variable} antialiased bg-white`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
