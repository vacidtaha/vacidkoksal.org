"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const content = {
  en: {
    title: "The Founders",
    subtitle: "Two young people who somehow convinced themselves that they can change the world. And honestly? They might just be crazy enough to do it.",
    tahaVacid: {
      name: "Taha Vacid",
      role: "The Tech Dreamer",
      description: "Believes AI can cure everything from cancer to stupidity (still working on the latter). Spends his days building medical algorithms and nights wondering if he's actually smart enough for this.",
      quote: "If we're going to fail, might as well fail at something important."
    },
    haktanKoksal: {
      name: "Haktan Köksal",
      role: "The Systems Optimist", 
      description: "Thinks he can fix global food distribution like it's a logistics puzzle. Surprisingly, his track record suggests he might not be completely delusional.",
      quote: "The world's problems aren't that complicated. We just overcomplicate the solutions."
    },
    visionTitle: "Our Slightly Ridiculous Vision",
    visionDescription: "Look, we're two twenty-somethings who think we can solve humanity's biggest problems. Yes, we're aware how that sounds. But every impossible thing started with someone naive enough to try. We're building solutions for health, food, energy, and education not because we're qualified, but because someone has to—and apparently, we're dumb enough to volunteer."
  },
  tr: {
    title: "Kurucular",
    subtitle: "Bir şekilde kendilerini dünyayı değiştirebileceklerine ikna etmiş iki genç. Ve açıkçası? Bunu yapacak kadar kırık olabilirler.",
    tahaVacid: {
      name: "Taha Vacid",
      role: "Teknoloji Hayalcisi",
      description: "AI'ın kanserden aptallığa kadar her şeyi iyileştirebileceğine inanıyor (ikincisi üzerinde hâlâ çalışıyor). Günlerini tıbbi algoritmalar geliştirerek, gecelerini bunun için gerçekten yeterince akıllı olup olmadığını merak ederek geçiriyor.",
      quote: "Nasılsa başarısız olacaksak, en azından önemli bir şeyde başarısız olalım."
    },
    haktanKoksal: {
      name: "Haktan Köksal",
      role: "Sistem Optimisti", 
      description: "Küresel gıda dağıtımını bir lojistik bulmacası gibi çözebileceğini düşünüyor. Şaşırtıcı şekilde, geçmiş performansı tamamen hezeyan halinde olmadığını gösteriyor.",
      quote: "Dünyanın sorunları o kadar karmaşık değil. Sadece çözümleri fazla karmaşıklaştırıyoruz."
    },
    visionTitle: "Biraz Gülünç Vizyonumuz",
    visionDescription: "Bakın, biz insanlığın en büyük sorunlarını çözebileceğimizi düşünen yirmili yaşlarda iki kişiyiz. Evet, bunun nasıl göründüğünün farkındayız. Ama her imkansız şey, deneyecek kadar saf biriyle başladı. Sağlık, gıda, enerji ve eğitim alanlarında çözümler üretiyoruz çünkü yeterliyiz değil, çünkü biri yapmak zorunda—ve görünüşe göre biz gönüllü olmak için yeterince aptalız."
  }
};

export default function Management() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [mounted, setMounted] = useState(false);

  // Check language preference from localStorage
  useEffect(() => {
    setMounted(true);
    
    try {
      const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setSelectedLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to read language preference:', error);
    }
  }, []);

  // Listen for language changes in localStorage
  useEffect(() => {
    if (!mounted) return;

    const handleStorageChange = () => {
      try {
        const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
          setSelectedLanguage(savedLanguage);
        }
      } catch (error) {
        console.warn('Failed to read language preference:', error);
      }
    };

    // Listen for language changes from other components
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event listener for same-tab language changes
    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && (event.detail === 'en' || event.detail === 'tr')) {
        setSelectedLanguage(event.detail);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, [mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  const t = content[selectedLanguage];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Management Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
          {/* Header - Mobile optimized */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-[family-name:var(--font-inter)] text-gray-900 leading-tight">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-[family-name:var(--font-inter)] max-w-3xl mx-auto leading-relaxed px-2">
              {t.subtitle}
            </p>
          </div>

          {/* Executives Grid - Mobile: 2 columns side by side, Desktop: 2 columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Taha Vacid */}
            <div className="text-center">
              {/* Avatar - Responsive sizing */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-lg sm:text-xl md:text-3xl lg:text-6xl text-gray-400">
                  👤
                </div>
              </div>
              
              {/* Name - Responsive sizing */}
              <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold mb-1 sm:mb-1 md:mb-2 font-[family-name:var(--font-inter)] text-blue-600 leading-tight">
                {t.tahaVacid.name}
              </h2>
              
              {/* Role - Responsive sizing */}
              <p className="text-xs sm:text-xs md:text-sm lg:text-lg text-gray-600 font-medium mb-2 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
                {t.tahaVacid.role}
              </p>
              
              {/* Description and Quote - Responsive and compact */}
              <div className="text-gray-700 leading-tight space-y-1 sm:space-y-2 md:space-y-3 px-1 sm:px-2">
                <p className="text-xs sm:text-xs md:text-sm lg:text-base leading-tight">
                  {t.tahaVacid.description}
                </p>
                <p className="italic text-xs sm:text-xs md:text-sm lg:text-base leading-tight">
                  "{t.tahaVacid.quote}"
                </p>
              </div>
            </div>

            {/* Haktan Köksal */}
            <div className="text-center">
              {/* Avatar - Responsive sizing */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-lg sm:text-xl md:text-3xl lg:text-6xl text-gray-400">
                  👤
                </div>
              </div>
              
              {/* Name - Responsive sizing */}
              <h2 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold mb-1 sm:mb-1 md:mb-2 font-[family-name:var(--font-inter)] text-blue-600 leading-tight">
                {t.haktanKoksal.name}
              </h2>
              
              {/* Role - Responsive sizing */}
              <p className="text-xs sm:text-xs md:text-sm lg:text-lg text-gray-600 font-medium mb-2 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
                {t.haktanKoksal.role}
              </p>
              
              {/* Description and Quote - Responsive and compact */}
              <div className="text-gray-700 leading-tight space-y-1 sm:space-y-2 md:space-y-3 px-1 sm:px-2">
                <p className="text-xs sm:text-xs md:text-sm lg:text-base leading-tight">
                  {t.haktanKoksal.description}
                </p>
                <p className="italic text-xs sm:text-xs md:text-sm lg:text-base leading-tight">
                  "{t.haktanKoksal.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement - Mobile optimized */}
          <div className="mt-10 sm:mt-14 md:mt-18 lg:mt-24 text-center">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 font-[family-name:var(--font-inter)] text-gray-900 leading-tight">
                {t.visionTitle}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                {t.visionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 