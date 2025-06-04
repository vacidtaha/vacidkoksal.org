"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import LanguageSelector from "@/components/ui/language-selector";

// SlideMenu'yu dynamic import ile yükle
const SlideMenu = dynamic(() => import("@/components/ui/slide-menu"), {
  ssr: false,
  loading: () => null
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);
  const pathname = usePathname();
  
  // Component mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  // Dil seçimi kontrolü - sadece client-side'da ve mounted olduktan sonra
  useEffect(() => {
    if (!mounted || hasCheckedStorage) return;
    
    // localStorage kontrol fonksiyonu
    const checkLanguagePreference = () => {
      try {
        const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
        
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
          // Eğer daha önce dil seçimi yapılmışsa, o dili kullan
          setSelectedLanguage(savedLanguage);
          setShowLanguageSelector(false);
        } else {
          // Eğer daha önce dil seçimi yapılmamışsa modal'ı göster
          setShowLanguageSelector(true);
        }
      } catch (error) {
        // localStorage erişim hatası durumunda default davranış
        console.warn('localStorage access failed:', error);
        setShowLanguageSelector(true);
      }
      
      setHasCheckedStorage(true);
    };

    // Küçük bir delay ile localStorage'ı kontrol et (hydration'dan sonra)
    const timeoutId = setTimeout(checkLanguagePreference, 100);
    
    return () => clearTimeout(timeoutId);
  }, [mounted, hasCheckedStorage]);

  // Dil seçimi handler'ı
  const handleLanguageSelect = (language: 'en' | 'tr') => {
    try {
      // Seçilen dili localStorage'a kaydet
      localStorage.setItem('language-preference', language);
    } catch (error) {
      console.warn('Failed to save language preference:', error);
    }
    
    // State'i güncelle
    setSelectedLanguage(language);
    
    // Modal'ı kapat
    setShowLanguageSelector(false);
    
    // Custom event dispatch et ki diğer componentler haberdar olsun
    const languageChangeEvent = new CustomEvent('languageChanged', { detail: language });
    window.dispatchEvent(languageChangeEvent);
    
    console.log('Selected language:', language);
  };

  // Header'dan dil butonuna tıklayınca çalışacak
  const handleLanguageButtonClick = () => {
    setShowLanguageSelector(true);
  };

  // URL kontrolü - login sayfası kontrolü
  const isLoginPage = pathname === '/login';
  
  // Header ve menü gizleme kontrolü
  const hideHeaderAndMenu = isLoginPage;
  
  // Tema kontrolü - login sayfası dark tema
  const isDarkTheme = isLoginPage;

  // Component mount edilmeden önce skeleton/loading döndür
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        {children}
      </div>
    );
  }

  return (
    <>
      {/* Language Selector Modal - sadece storage kontrol edildikten sonra göster */}
      {hasCheckedStorage && (
        <LanguageSelector 
          isVisible={showLanguageSelector}
          onLanguageSelect={handleLanguageSelect}
        />
      )}

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
        } ${showLanguageSelector ? 'blur-sm' : ''}`}
      >
        {/* Header - sadece login sayfası değilse göster */}
        {!hideHeaderAndMenu && (
          <Header 
            onMenuToggle={() => setIsMenuOpen(true)}
            isDark={isDarkTheme}
            selectedLanguage={selectedLanguage}
            onLanguageClick={handleLanguageButtonClick}
          />
        )}
        
        {/* Sayfa içeriği */}
        {children}
        
        {/* Footer - sadece login sayfası değilse göster */}
        {!hideHeaderAndMenu && (
          <Footer theme={isDarkTheme ? 'dark' : 'light'} />
        )}
      </div>
    </>
  );
} 