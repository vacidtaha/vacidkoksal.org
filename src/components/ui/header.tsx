"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  onMenuToggle: () => void;
  isDark?: boolean;
}

export default function Header({ onMenuToggle, isDark = false }: HeaderProps) {
  return (
    <header 
      className={`sticky top-0 z-40 w-full border-b shadow-sm py-4 ${
        isDark 
          ? 'bg-black/80 border-gray-800/50' 
          : 'bg-white/50 border-gray-100/50'
      }`}
      style={{
        backdropFilter: 'blur(60px)',
        WebkitBackdropFilter: 'blur(60px)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Spacer for balance */}
        <div className="w-10"></div>
        
        {/* Logo */}
        <a href="/">
          <Image
            src="/logo.png" 
            alt="Vacid & Köksal Foundation Logo"
            width={300}
            height={75}
            priority
            style={isDark ? { filter: 'invert(1)' } : {}}
          />
        </a>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={onMenuToggle}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 group ${
            isDark 
              ? 'hover:bg-white/10 text-gray-300 group-hover:text-white' 
              : 'hover:bg-gray-100/80 text-gray-600 group-hover:text-gray-900'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 