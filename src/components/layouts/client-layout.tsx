"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/ui/header";

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
  const pathname = usePathname();
  
  // Component mount kontrolü
  useEffect(() => {
    setMounted(true);
  }, []);

  // Client-side logic'ler
  useEffect(() => {
    if (!mounted) return;

    // Login sayfasında header ve menüyü gizle
    const hideHeaderAndMenu = pathname === '/login';

    // Service Worker kaydı - sadece client-side'da
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker başarıyla kaydedildi:', registration);
          
          // Service Worker güncellendiyse yeniden yükle
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('Yeni Service Worker sürümü mevcut');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker kaydı başarısız:', error);
        });

      // Service Worker mesajlarını dinle
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'VIDEO_CACHED') {
          console.log('Video cache\'lendi:', event.data.url);
        }
      });
    }
  }, [mounted, pathname]);

  // Component mount olmadıysa basic layout döndür
  if (!mounted) {
    return (
      <div>
        {children}
      </div>
    );
  }

  // Login sayfasında header ve menüyü gizle
  const hideHeaderAndMenu = pathname === '/login';

  return (
    <>
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
    </>
  );
} 