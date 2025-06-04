"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const content = {
  en: {
    title: "Foundation Leadership",
    subtitle: "Visionary leadership shaping the future. Experienced founders united to solve humanity's greatest challenges.",
    tahaVacid: {
      name: "Taha Vacid",
      role: "Co-Founder",
      description: "Defines the foundation's strategic direction with his visionary approach in technology and healthcare. Specialized in artificial intelligence and medical technologies.",
      quote: "Technology finds its true value when it serves humanity."
    },
    haktanKoksal: {
      name: "Haktan Köksal", 
      role: "Co-Founder",
      description: "Leads pioneering work in sustainable food systems and energy solutions. Experienced in building global networks and operational excellence.",
      quote: "Change is possible with bold steps and shared vision."
    },
    visionTitle: "Our Leadership Vision",
    visionDescription: "As founders of Vacid & Köksal Foundation, we aim to channel the power of technology toward humanity's most fundamental needs. While developing revolutionary solutions in healthcare, food, energy, and access to knowledge, we build global collaborations to construct a sustainable future."
  },
  tr: {
    title: "Vakıf Yönetimi",
    subtitle: "Geleceği şekillendiren vizyoner liderlik. İnsanlığın en büyük zorluklarını çözmek için bir araya gelmiş deneyimli kurucular.",
    tahaVacid: {
      name: "Taha Vacid",
      role: "Kurucu Ortak",
      description: "Teknoloji ve sağlıkta vizyoner yaklaşımıyla vakfın stratejik yönünü belirler. Yapay zeka ve tıbbi teknolojiler konusunda uzmanlaşmıştır.",
      quote: "Teknoloji, asıl değerini insanlığa hizmet ettiğinde bulur."
    },
    haktanKoksal: {
      name: "Haktan Köksal",
      role: "Kurucu Ortak", 
      description: "Sürdürülebilir gıda sistemleri ve enerji çözümlerinde öncü çalışmalara liderlik eder. Küresel ağlar kurmak ve operasyonel mükemmellik konusunda deneyimlidir.",
      quote: "Değişim, cesur adımlar ve ortak vizyon ile mümkündür."
    },
    visionTitle: "Liderlik Vizyonumuz",
    visionDescription: "Vacid & Köksal Vakfı kurucuları olarak, teknolojinin gücünü insanlığın en temel ihtiyaçlarına yönlendirmeyi hedefliyoruz. Sağlık, gıda, enerji ve bilgiye erişim alanlarında devrimci çözümler geliştirirken, sürdürülebilir bir gelecek inşa etmek için küresel işbirlikleri kuruyoruz."
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