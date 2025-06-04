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
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-inter)] text-gray-900">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 font-[family-name:var(--font-inter)] max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Executives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Taha Vacid */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-6xl text-gray-400">
                  👤
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-inter)] text-blue-600">
                {t.tahaVacid.name}
              </h2>
              <p className="text-lg text-gray-600 font-medium mb-4">
                {t.tahaVacid.role}
              </p>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  {t.tahaVacid.description}
                </p>
                <p className="italic">
                  "{t.tahaVacid.quote}"
                </p>
              </div>
            </div>

            {/* Haktan Köksal */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-6xl text-gray-400">
                  👤
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 font-[family-name:var(--font-inter)] text-blue-600">
                {t.haktanKoksal.name}
              </h2>
              <p className="text-lg text-gray-600 font-medium mb-4">
                {t.haktanKoksal.role}
              </p>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  {t.haktanKoksal.description}
                </p>
                <p className="italic">
                  "{t.haktanKoksal.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-inter)] text-gray-900">
                {t.visionTitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.visionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 