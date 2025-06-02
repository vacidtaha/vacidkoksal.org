"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Heart, Wheat } from "lucide-react";

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  // Menü açıldığında body scroll'ını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Sidebar */}
      <div 
        className={`absolute left-0 top-0 h-full w-96 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <Image
              src="/logo.png" 
              alt="Vacid & Köksal Foundation Logo"
              width={180}
              height={45}
              priority
            />
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Section */}
          <div className="flex-1">
            {/* Home Section */}
            <div className="mb-8">
              <nav className="space-y-2">
                <Link 
                  href="/" 
                  className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                  onClick={onClose}
                >
                  <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium">Home</span>
                </Link>
                <Link 
                  href="/healthcare" 
                  className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Healthcare</span>
                </Link>
                <Link 
                  href="/knowledge" 
                  className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Knowledge</span>
                </Link>
                <Link 
                  href="/food" 
                  className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <Wheat className="h-5 w-5 text-orange-500" />
                  <span>Food</span>
                </Link>
                <Link 
                  href="/energy" 
                  className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Clean Energy</span>
                </Link>
              </nav>
            </div>

            <div className="py-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-3 text-gray-900">Investment</h3>
                <div className="space-y-1">
                  <Link 
                    href="/funding" 
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={onClose}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" />
                    </svg>
                    <span>Apply for Funding</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Support Section - Foundation ile yer değiştirdik */}
          <div className="border-t border-gray-200/60 pt-6 pb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
              Support
            </h3>
            <nav className="space-y-2">
              <Link 
                href="/contact" 
                className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2.704 2.704 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Contact</span>
              </Link>
              <Link 
                href="/faq" 
                className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">FAQ</span>
              </Link>
            </nav>
          </div>

          {/* Foundation Section - Support ile yer değiştirdik ve Profile eklendi */}
          <div className="border-t border-gray-200/60 pt-6 pb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
              Foundation
            </h3>
            <nav className="space-y-2">
              <Link 
                href="/yonetim" 
                className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <span className="font-medium">Foundation Management</span>
              </Link>
              <Link 
                href="/careers" 
                className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <span className="font-medium">Careers</span>
              </Link>
              <Link 
                href="/login" 
                className="group flex items-center px-4 py-3 text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-200"
                onClick={onClose}
              >
                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Profile</span>
              </Link>
            </nav>
          </div>
          
          {/* Footer */}
          <div className="border-t border-gray-200/60 pt-6">
            <p className="text-sm text-gray-500 italic font-[family-name:var(--font-cinzel)] text-center leading-relaxed">
              Aut inveniam viam aut faciam
            </p>
            <p className="text-xs text-gray-400 text-center mt-2">
              © {new Date().getFullYear()} Vacid & Köksal Foundation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 