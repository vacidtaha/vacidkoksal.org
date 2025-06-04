"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface FooterProps {
  theme?: 'light' | 'dark';
}

export default function Footer({ theme = 'light' }: FooterProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [mounted, setMounted] = useState(false);
  
  // Hydration sorununu önlemek için sabit yıl kullanıyoruz
  const currentYear = 2024;
  
  const isDark = theme === 'dark';

  // Component mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  // Dil tercihini localStorage'dan oku
  useEffect(() => {
    if (!mounted) return;

    try {
      const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setSelectedLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to read language preference:', error);
    }
  }, [mounted]);

  // Dil değişikliği event listener'ı
  useEffect(() => {
    if (!mounted) return;

    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && (event.detail === 'en' || event.detail === 'tr')) {
        setSelectedLanguage(event.detail);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, [mounted]);

  // Mount edilmeden önce basit footer döndür
  if (!mounted) {
    return (
      <footer className={`w-full border-t py-8 md:py-16 ${
        isDark 
          ? 'bg-black border-gray-800 text-white' 
          : 'bg-gray-50 border-gray-200 text-gray-900'
      }`}>
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              © {currentYear} Vacid & Köksal Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Türkçe içerik
  if (selectedLanguage === 'tr') {
    return (
      <footer className={`w-full border-t py-8 md:py-16 ${
        isDark 
          ? 'bg-black border-gray-800 text-white' 
          : 'bg-gray-50 border-gray-200 text-gray-900'
      }`}>
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-12 mb-6 md:mb-12">
            {/* Logo and Foundation Info */}
            <div className="lg:col-span-1">
              <div className="mb-4 md:mb-6">
                <Image
                  src="/logo.png" 
                  alt="Vacid & Köksal Vakfı Logosu"
                  width={160}
                  height={40}
                  className="md:w-[200px] md:h-[50px] mb-3 md:mb-4"
                  style={isDark ? { filter: 'invert(1)' } : {}}
                />
                <p className={`text-xs md:text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  İnsanlık için teknoloji geliştiren, sağlık, eğitim, gıda ve enerji sektörlerinde 
                  çığır açan çözümler yaratan bir vakıf.
                </p>
              </div>
              
              <div className="mb-4 md:mb-6">
                <p className={`text-sm md:text-lg italic font-[family-name:var(--font-cinzel)] ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  "Aut inveniam viam aut faciam"
                </p>
                <p className={`text-xs mt-1 ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Ya bir yol bulacağım ya da yapacağım
                </p>
              </div>
            </div>

            {/* Main Pages */}
            <div>
              <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ana Alanlar
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <Link 
                  href="/" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/healthcare" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sağlık Teknolojileri
                </Link>
                <Link 
                  href="/knowledge" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Bilgi ve Eğitim
                </Link>
                <Link 
                  href="/food" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Gıda Sistemleri
                </Link>
                <Link 
                  href="/energy" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Temiz Enerji
                </Link>
              </nav>
            </div>

            {/* Support and Contact */}
            <div>
              <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Destek ve İletişim
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <Link 
                  href="/funding" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Fon Başvurusu
                </Link>
                <Link 
                  href="/contact" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  İletişim
                </Link>
                <Link 
                  href="/faq" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sık Sorulan Sorular
                </Link>
                <Link 
                  href="/careers" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Kariyer Fırsatları
                </Link>
                <Link 
                  href="/login" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Giriş Yap
                </Link>
              </nav>
            </div>

            {/* Foundation Information */}
            <div>
              <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Vakıf Bilgileri
              </h3>
              <nav className="space-y-2 md:space-y-3">
                <Link 
                  href="/yonetim" 
                  className={`block text-sm md:text-base hover:underline transition-colors ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Vakıf Yönetimi
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section - Copyright and Social Media */}
          <div className={`border-t pt-4 md:pt-8 ${
            isDark ? 'border-gray-800' : 'border-gray-300'
          }`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className={`text-xs md:text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                © {currentYear} Vacid & Köksal Vakfı. Tüm hakları saklıdır.
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Future social media links can be added here */}
                <div className="flex space-x-4">
                  {/* Placeholder for social media icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // İngilizce içerik (default)
  return (
    <footer className={`w-full border-t py-8 md:py-16 ${
      isDark 
        ? 'bg-black border-gray-800 text-white' 
        : 'bg-gray-50 border-gray-200 text-gray-900'
    }`}>
      <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-12 mb-6 md:mb-12">
          {/* Logo and Foundation Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <Image
                src="/logo.png" 
                alt="Vacid & Köksal Foundation Logo"
                width={160}
                height={40}
                className="md:w-[200px] md:h-[50px] mb-3 md:mb-4"
                style={isDark ? { filter: 'invert(1)' } : {}}
              />
              <p className={`text-xs md:text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A foundation developing technology for humanity, creating breakthrough solutions 
                in health, education, food, and energy sectors.
              </p>
            </div>
            
            <div className="mb-4 md:mb-6">
              <p className={`text-sm md:text-lg italic font-[family-name:var(--font-cinzel)] ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                "Aut inveniam viam aut faciam"
              </p>
              <p className={`text-xs mt-1 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                I will either find a way or make one
              </p>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Main Areas
            </h3>
            <nav className="space-y-2 md:space-y-3">
              <Link 
                href="/" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/healthcare" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Healthcare Technologies
              </Link>
              <Link 
                href="/knowledge" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Knowledge & Education
              </Link>
              <Link 
                href="/food" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Food Systems
              </Link>
              <Link 
                href="/energy" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Clean Energy
              </Link>
            </nav>
          </div>

          {/* Support and Contact */}
          <div>
            <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Support & Contact
            </h3>
            <nav className="space-y-2 md:space-y-3">
              <Link 
                href="/funding" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Apply for Funding
              </Link>
              <Link 
                href="/contact" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Us
              </Link>
              <Link 
                href="/faq" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Frequently Asked Questions
              </Link>
              <Link 
                href="/careers" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Career Opportunities
              </Link>
              <Link 
                href="/login" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign In
              </Link>
            </nav>
          </div>

          {/* Foundation Information */}
          <div>
            <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Foundation Info
            </h3>
            <nav className="space-y-2 md:space-y-3">
              <Link 
                href="/yonetim" 
                className={`block text-sm md:text-base hover:underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Foundation Leadership
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className={`border-t pt-4 md:pt-8 ${
          isDark ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className={`text-xs md:text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © {currentYear} Vacid & Köksal Foundation. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Future social media links can be added here */}
              <div className="flex space-x-4">
                {/* Placeholder for social media icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 