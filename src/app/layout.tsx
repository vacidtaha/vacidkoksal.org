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
    <html lang="en">
      <head>
        <title>Vacid & Köksal Foundation - Healthcare, Information, Food & Energy</title>
        <meta name="description" content="Vacid & Köksal Foundation is a leading organization operating in healthcare, information technology, food security, and sustainable energy sectors, driving innovation and social impact." />
        <meta name="keywords" content="Vacid, Köksal, Foundation, Healthcare, Health Technology, Information Technology, IT, Food Security, Sustainable Energy, Renewable Energy, Innovation, Social Impact, Turkey" />
        <meta name="author" content="Vacid & Köksal Foundation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vacidkoksal.org" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vacid & Köksal Foundation - Healthcare, Information, Food & Energy" />
        <meta property="og:description" content="Leading organization in healthcare innovation, information technology, food security, and sustainable energy. Driving social impact through cutting-edge solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://vacidkoksal.org" />
        <meta property="og:site_name" content="Vacid & Köksal Foundation" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vacid & Köksal Foundation - Healthcare, Information, Food & Energy" />
        <meta name="twitter:description" content="Pioneering innovations in healthcare, IT, food security, and sustainable energy. Transforming communities through technology and social impact." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@vacidkoksal" />
        <meta name="twitter:creator" content="@vacidkoksal" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicons - V.png logonuzdan oluşturulan */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        
        {/* Diğer platform destekleri */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        
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
