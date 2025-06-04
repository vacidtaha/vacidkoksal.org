"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSelectorProps {
  isVisible: boolean;
  onLanguageSelect: (language: 'en' | 'tr') => void;
}

export default function LanguageSelector({ isVisible, onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  // Dil bazlı metinler
  const texts = {
    en: {
      title: 'Language Selection',
      subtitle: 'Choose your preferred language',
      button: 'Continue'
    },
    tr: {
      title: 'Dil Seçimi',
      subtitle: 'Tercih ettiğiniz dili seçin',
      button: 'Devam Et'
    }
  };

  const handleLanguageChange = (language: 'en' | 'tr') => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleContinue = () => {
    onLanguageSelect(selectedLanguage);
  };

  const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];
  const currentTexts = texts[selectedLanguage];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20"
          />
          
          {/* Language Selection Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-sm">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {currentTexts.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {currentTexts.subtitle}
                </p>
              </div>

              {/* Language Dropdown */}
              <div className="mb-6 relative">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 transition-colors hover:bg-gray-100 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{selectedLang.flag}</span>
                    <span className="text-sm font-medium text-gray-900">{selectedLang.name}</span>
                  </div>
                  <motion.svg 
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code as 'en' | 'tr')}
                          className={`w-full p-3 text-left transition-colors flex items-center space-x-3 ${
                            selectedLanguage === language.code 
                              ? 'bg-gray-50 text-gray-900' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="text-sm font-medium">{language.name}</span>
                          {selectedLanguage === language.code && (
                            <svg className="w-4 h-4 text-gray-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {currentTexts.button}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 