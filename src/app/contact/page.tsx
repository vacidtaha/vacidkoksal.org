"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
  isTurkish: boolean;
}

const countries = [
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", name: "Albania", flag: "🇦🇱" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+376", name: "Andorra", flag: "🇦🇩" },
  { code: "+244", name: "Angola", flag: "🇦🇴" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+374", name: "Armenia", flag: "🇦🇲" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+375", name: "Belarus", flag: "🇧🇾" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+501", name: "Belize", flag: "🇧🇿" },
  { code: "+591", name: "Bolivia", flag: "🇧🇴" },
  { code: "+387", name: "Bosnia", flag: "🇧🇦" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
  { code: "+855", name: "Cambodia", flag: "🇰🇭" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+385", name: "Croatia", flag: "🇭🇷" },
  { code: "+53", name: "Cuba", flag: "🇨🇺" },
  { code: "+357", name: "Cyprus", flag: "🇨🇾" },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+593", name: "Ecuador", flag: "🇪🇨" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+372", name: "Estonia", flag: "🇪🇪" },
  { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+995", name: "Georgia", flag: "🇬🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+233", name: "Ghana", flag: "🇬🇭" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },
  { code: "+502", name: "Guatemala", flag: "🇬🇹" },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },
  { code: "+354", name: "Iceland", flag: "🇮🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+964", name: "Iraq", flag: "🇮🇶" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+371", name: "Latvia", flag: "🇱🇻" },
  { code: "+961", name: "Lebanon", flag: "🇱🇧" },
  { code: "+370", name: "Lithuania", flag: "🇱🇹" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
  { code: "+853", name: "Macau", flag: "🇲🇴" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+356", name: "Malta", flag: "🇲🇹" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+373", name: "Moldova", flag: "🇲🇩" },
  { code: "+377", name: "Monaco", flag: "🇲🇨" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+507", name: "Panama", flag: "🇵🇦" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+381", name: "Serbia", flag: "🇷🇸" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+421", name: "Slovakia", flag: "🇸🇰" },
  { code: "+386", name: "Slovenia", flag: "🇸🇮" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+886", name: "Taiwan", flag: "🇹🇼" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+380", name: "Ukraine", flag: "🇺🇦" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+598", name: "Uruguay", flag: "🇺🇾" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" }
];

function CountrySelector({ selectedCountry, onCountryChange, isTurkish }: CountrySelectorProps) {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const country = countries.find(c => c.code === selectedCode);
    if (country) {
      onCountryChange(country);
    }
  };

  return (
    <div className="relative">
      <select
        value={selectedCountry.code}
        onChange={handleSelect}
        className="w-full px-2 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm appearance-none cursor-pointer"
      >
        {countries.map((country) => (
          <option key={`${country.code}-${country.name}`} value={country.code}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-2 md:right-6 flex items-center pointer-events-none">
        <svg className="w-3 h-3 md:w-6 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(c => c.code === "+90") || countries[0]
  );
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [mounted, setMounted] = useState(false);

  // Check language preference from localStorage
  useEffect(() => {
    setMounted(true);
    
    // Delay to ensure proper mounting
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
          if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
            setSelectedLanguage(savedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to read language preference:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Listen for language changes in localStorage
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const handleStorageChange = () => {
      try {
        if (window.localStorage) {
          const savedLanguage = localStorage.getItem('language-preference') as 'en' | 'tr' | null;
          if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
            setSelectedLanguage(savedLanguage);
          }
        }
      } catch (error) {
        console.warn('Failed to read language preference in storage handler:', error);
      }
    };

    // Custom event listener for same-tab language changes
    const handleLanguageChange = (event: Event) => {
      try {
        const customEvent = event as CustomEvent;
        if (customEvent.detail && 
            typeof customEvent.detail === 'string' && 
            (customEvent.detail === 'en' || customEvent.detail === 'tr')) {
          setSelectedLanguage(customEvent.detail);
        }
      } catch (error) {
        console.warn('Failed to handle language change event:', error);
      }
    };

    // Add event listeners with error protection
    try {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('languageChanged', handleLanguageChange);
    } catch (error) {
      console.warn('Failed to add event listeners:', error);
    }

    return () => {
      try {
        if (typeof window !== 'undefined') {
          window.removeEventListener('storage', handleStorageChange);
          window.removeEventListener('languageChanged', handleLanguageChange);
        }
      } catch (error) {
        console.warn('Failed to remove event listeners:', error);
      }
    };
  }, [mounted]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  const isTurkish = selectedLanguage === 'tr';

  const content = {
    en: {
      hero: {
        title: "Get in Touch",
        subtitle: "We'd love to hear from you. Whether you have a question about our work, want to collaborate, or simply want to connect—we're here."
      },
      form: {
        title: "Send us a Message",
        firstName: "First Name",
        firstNamePlaceholder: "Enter your first name",
        lastName: "Last Name",
        lastNamePlaceholder: "Enter your last name",
        email: "Email Address",
        emailPlaceholder: "Enter your email address",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        subject: "Subject",
        subjectPlaceholder: "Choose your inquiry type",
        message: "Message",
        messagePlaceholder: "Tell us how we can help you...",
        submit: "Send Message",
        subjectOptions: {
          general: "General Inquiry",
          partnership: "Partnership Opportunity",
          collaboration: "Collaboration Request",
          research: "Research & Development",
          media: "Media & Press",
          support: "Technical Support",
          investment: "Investment Inquiry",
          volunteer: "Volunteer Application",
          donation: "Donation Information",
          career: "Career Opportunities"
        }
      },
      contactInfo: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        office: "Office",
        businessHours: "Business Hours",
        address: "Esenyurt Neighborhood\nVillakent Street No:59\nSivas Center 58000\nTurkey",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM PST\nSaturday: 10:00 AM - 4:00 PM PST\nSunday: Closed"
      },
      quickContact: {
        title: "Need Immediate Assistance?",
        subtitle: "For urgent matters or press inquiries, reach out to our dedicated support team.",
        callNow: "Call Now",
        sendEmail: "Send Email"
      }
    },
    tr: {
      hero: {
        title: "İletişime Geçin",
        subtitle: "Sizden haber almayı çok isteriz. İşimiz hakkında bir sorunuz olsun, işbirliği yapmak isteyin veya sadece bağlantı kurmak isteyin—buradayız."
      },
      form: {
        title: "Bize Mesaj Gönderin",
        firstName: "Ad",
        firstNamePlaceholder: "Adınızı girin",
        lastName: "Soyad",
        lastNamePlaceholder: "Soyadınızı girin",
        email: "E-posta Adresi",
        emailPlaceholder: "E-posta adresinizi girin",
        phone: "Telefon Numarası",
        phonePlaceholder: "Telefon numaranızı girin",
        subject: "Konu",
        subjectPlaceholder: "Sorgu türünüzü seçin",
        message: "Mesaj",
        messagePlaceholder: "Size nasıl yardımcı olabileceğimizi söyleyin...",
        submit: "Mesaj Gönder",
        subjectOptions: {
          general: "Genel Sorgu",
          partnership: "Ortaklık Fırsatı",
          collaboration: "İşbirliği Talebi",
          research: "Araştırma ve Geliştirme",
          media: "Medya ve Basın",
          support: "Teknik Destek",
          investment: "Yatırım Sorgusu",
          volunteer: "Gönüllü Başvurusu",
          donation: "Bağış Bilgisi",
          career: "Kariyer Fırsatları"
        }
      },
      contactInfo: {
        title: "İletişim Bilgileri",
        email: "E-posta",
        phone: "Telefon",
        office: "Ofis",
        businessHours: "Çalışma Saatleri",
        address: "Esenyurt Mahallesi\nVillakent Sokak No:59\nSivas Merkez 58000\nTürkiye",
        hours: "Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 10:00 - 16:00\nPazar: Kapalı"
      },
      quickContact: {
        title: "Acil Yardıma İhtiyacınız Var mı?",
        subtitle: "Acil durumlar veya basın sorguları için özel destek ekibimizle iletişime geçin.",
        callNow: "Hemen Ara",
        sendEmail: "E-posta Gönder"
      }
    }
  };

  const currentContent = isTurkish ? content.tr : content.en;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Contact Hero Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-2xl md:text-6xl font-bold mb-3 md:mb-6 font-[family-name:var(--font-inter)] px-4">
              {currentContent.hero.title}
            </h1>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {currentContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="w-full py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-7xl space-y-6 md:space-y-12">
          
          {/* Contact Form Card */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-sm mx-4">
            <div className="p-4 md:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-lg md:text-4xl font-bold mb-4 md:mb-8 font-[family-name:var(--font-inter)] text-center">
                  {currentContent.form.title}
                </h2>
                
                <form className="space-y-4 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                        {currentContent.form.firstName}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder={currentContent.form.firstNamePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                        {currentContent.form.lastName}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder={currentContent.form.lastNamePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                      placeholder={currentContent.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                      {currentContent.form.phone}
                    </label>
                    <div className="flex space-x-2 md:space-x-4">
                      <div className="w-28 md:w-auto flex-shrink-0">
                        <CountrySelector 
                          selectedCountry={selectedCountry}
                          onCountryChange={setSelectedCountry}
                          isTurkish={isTurkish}
                        />
                      </div>
                      <input
                        type="tel"
                        className="flex-1 px-2 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
                        placeholder={currentContent.form.phonePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                      {currentContent.form.subject}
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-3 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-400">{currentContent.form.subjectPlaceholder}</option>
                        <option value="general">{currentContent.form.subjectOptions.general}</option>
                        <option value="partnership">{currentContent.form.subjectOptions.partnership}</option>
                        <option value="collaboration">{currentContent.form.subjectOptions.collaboration}</option>
                        <option value="research">{currentContent.form.subjectOptions.research}</option>
                        <option value="media">{currentContent.form.subjectOptions.media}</option>
                        <option value="support">{currentContent.form.subjectOptions.support}</option>
                        <option value="investment">{currentContent.form.subjectOptions.investment}</option>
                        <option value="volunteer">{currentContent.form.subjectOptions.volunteer}</option>
                        <option value="donation">{currentContent.form.subjectOptions.donation}</option>
                        <option value="career">{currentContent.form.subjectOptions.career}</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 md:right-6 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-3 md:px-6 py-2 md:py-4 bg-white border-0 rounded-xl md:rounded-2xl text-sm md:text-lg focus:ring-2 focus:ring-gray-400 transition-all shadow-sm resize-none"
                      placeholder={currentContent.form.messagePlaceholder}
                    ></textarea>
                  </div>

                  <div className="text-center pt-2 md:pt-4">
                    <button
                      type="submit"
                      className="bg-gray-900 text-white py-2 md:py-4 px-6 md:px-12 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      {currentContent.form.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-sm mx-4">
            <div className="p-4 md:p-16">
              <h2 className="text-lg md:text-4xl font-bold mb-4 md:mb-12 font-[family-name:var(--font-inter)] text-center">
                {currentContent.contactInfo.title}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
                {/* Email */}
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-blue-100 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-8 md:h-8 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{currentContent.contactInfo.email}</h3>
                    <p className="text-xs md:text-lg text-gray-700 mb-1 break-all">info@vacidkoksal.org</p>
                    <p className="text-xs md:text-lg text-gray-700 break-all">contact@vacidkoksal.org</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-green-100 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-8 md:h-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{currentContent.contactInfo.phone}</h3>
                    <p className="text-xs md:text-lg text-gray-700 mb-1">+90 532 241 1739</p>
                    <p className="text-xs md:text-lg text-gray-700">+90 534 731 91 99</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-purple-100 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-8 md:h-8 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{currentContent.contactInfo.office}</h3>
                    <p className="text-xs md:text-lg text-gray-700 whitespace-pre-line leading-tight">
                      {currentContent.contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-6">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-orange-100 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-8 md:h-8 text-orange-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-3">{currentContent.contactInfo.businessHours}</h3>
                    <p className="text-xs md:text-lg text-gray-700 whitespace-pre-line leading-tight">
                      {currentContent.contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 shadow-sm mx-4">
            <div className="p-4 md:p-16 text-center">
              <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-8 font-[family-name:var(--font-inter)]">
                {currentContent.quickContact.title}
              </h2>
              <p className="text-sm md:text-xl text-gray-700 mb-6 md:mb-12 max-w-2xl mx-auto">
                {currentContent.quickContact.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
                <a 
                  href="tel:+905322411739"
                  className="bg-gray-900 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg inline-flex items-center justify-center space-x-2 md:space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span>{currentContent.quickContact.callNow}</span>
                </a>
                <a 
                  href="mailto:urgent@vacidkoksal.org"
                  className="bg-white text-gray-900 px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg border-2 border-gray-200 inline-flex items-center justify-center space-x-2 md:space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>{currentContent.quickContact.sendEmail}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
} 