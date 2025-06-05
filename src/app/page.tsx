"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import HomeTurkish from './page-tr';
import { TextShimmer } from '@/components/ui/text-shimmer';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src?: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const foundationMediaContent: MediaContentCollection = {
  image: {
    background: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
    title: 'Technology for Humanity',
    date: 'Engineering solutions that heal, nourish, and educate every corner of our world',
    scrollToExpand: 'Scroll to Discover Our Mission',
    about: {
      overview: 'We engineer solutions that heal, nourish, and educate. Our mission is to make cutting-edge technology accessible to all humanity, bridging the gap between innovation and human need.',
      conclusion: 'Join us in creating a future where technology serves humanity, not the other way around. Together, we can build a world where innovation heals, feeds, and educates every person on Earth.',
    },
  },
};

const ManifestoContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  return (
    <div className='max-w-4xl mx-auto px-2 sm:px-0'>
      <h2 className='text-xl sm:text-4xl font-bold mb-6 sm:mb-12 text-center font-[family-name:var(--font-inter)]'>
        Manifesto
      </h2>
      
      <div className="text-[#494949] font-[family-name:var(--font-inter)] leading-relaxed space-y-3 sm:space-y-8 text-center mx-auto">
        <p className="text-xs sm:text-lg">
          We live in a curious age—one that can name every disease with near-perfect precision, yet still keeps the cure out of reach. Fields spill over with boundless yield while hungry, unhealthy tables sit in their shadows. Information flashes across the globe at light-speed, yet "premium" paywalls spring up in its path. Cities that turn night into day float beneath a haze of carbon smoke… This landscape cannot be "normalized." It is the product of a system built wrong—one that rewards hesitation and inertia.
        </p>
        
        <p className="text-xs sm:text-lg">
          The Vacid & Köksal Foundation is an intervention in that design flaw.
          We are not a rival to any sector; we are an idea engineered to supply the missing link of a civilization that has lost both its speed and its sense of direction.
        </p>
        
        <p className="text-xs sm:text-lg">
          Technology is the common thread running through every issue we name—but it becomes revolutionary only when it is as accessible as it is refined, not when it remains a toy of concentrated capital.
          We reject the health industry's creed that treats profit sheets as holier than medicine itself.
          We reject the gates that stamp knowledge with a "premium access" seal.
        </p>
        
        <div className="py-4 sm:py-8">
          <p className="text-sm sm:text-2xl font-medium italic">
            "Our foundation stays quiet not to hide its name, but to keep its outcomes from being overshadowed."
          </p>
        </div>
        
        <p className="text-xs sm:text-lg">
          Our metric of success is not applause: it is empty hospital beds, full plates, skylines that banish carbon to the pages of history, and tiny dreamers' fingers reaching an open screen for the very first time.
        </p>
        
        <p className="text-xs sm:text-lg">
          This letter is neither a call for donations nor for applause. It is an open invitation to anyone with ideas, labor, data, or courage. There will be no queue for acclaim—only an endless queue for participation. Elevating humanity to its best edition is not the task of a few founders; it is the shared imperative of everyone reading these lines.
        </p>
        
        <p className="text-xs sm:text-lg">
          The moment you place your data, your idea, your labor, or your capital on the table, you become the Foundation. Our names may fade, but the flaws we mend will not return; accessible healing and borderless knowledge will become everyday rights.
        </p>
        
        <p className="text-xs sm:text-lg font-medium mt-6 sm:mt-12">
          With love,<br />
          T.Vacid H.Köksal.
        </p>
      </div>
    </div>
  );
};

export default function Home() {
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

  // Show Turkish version if Turkish is selected
  if (selectedLanguage === 'tr') {
    return <HomeTurkish />;
  }

  // Default to English
  return <EnglishHomePage />;
}

// Original English content as separate component
function EnglishHomePage() {
  const mediaType = 'image';
  const currentMedia = foundationMediaContent[mediaType];
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [sectionRect, setSectionRect] = useState({ top: 0, height: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);

    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Get section position
    const updateSectionRect = () => {
      const section = document.getElementById('photo-gallery');
      if (section) {
        const rect = section.getBoundingClientRect();
        setSectionRect({
          top: window.scrollY + rect.top,
          height: rect.height
        });
      }
    };

    // Initial calculation
    setTimeout(updateSectionRect, 100);

    // Scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      updateSectionRect();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate overlay opacity and message opacity based on section position
  const sectionStart = sectionRect.top;
  const sectionEnd = sectionRect.top + sectionRect.height;
  const viewportCenter = scrollY + windowHeight / 2;
  
  // Start earlier and make background darker faster
  const sectionMiddleStart = sectionStart + sectionRect.height * 0.15; // Start at 15% instead of 20%
  const sectionMiddleEnd = sectionStart + sectionRect.height * 0.8;
  const isInMiddleSection = viewportCenter > sectionMiddleStart && viewportCenter < sectionMiddleEnd;
  
  const sectionProgress = isInMiddleSection ? 
    Math.max(0, Math.min((viewportCenter - sectionMiddleStart) / (sectionMiddleEnd - sectionMiddleStart), 1)) : 0;
  
  const overlayOpacity = isInMiddleSection ? Math.min(sectionProgress * 3, 0.85) : 0; // Faster darkening (* 3 instead of * 2)
  const messageOpacity = isInMiddleSection ? Math.max(0, Math.min((sectionProgress - 0.05) * 2.5, 1)) : 0; // Start even earlier (5% instead of 10%)
  const messageTranslateY = isInMiddleSection ? Math.max(16, 16 - sectionProgress * 16) : 32;

  return (
    <>
      {/* Hero Section with ScrollExpandMedia */}
      <ScrollExpandMedia
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        manifestoButtonText="Read Our Manifesto"
      >
        <ManifestoContent mediaType="image" />
      </ScrollExpandMedia>
      
      {/* Our Vision Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-6xl">
          <h2 className='text-2xl sm:text-4xl font-bold mb-8 text-center font-[family-name:var(--font-inter)]'>
            Our Vision
          </h2>
          <p className='text-base sm:text-xl mb-8 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.image.about.overview}
          </p>

          <p className='text-base sm:text-xl mb-12 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto'>
            {foundationMediaContent.image.about.conclusion}
          </p>

          {/* Mission Areas */}
          <div className="md:grid md:grid-cols-2 md:gap-8 mt-16 max-w-5xl mx-auto">
            {/* Shimmer Message for Mobile Scroll */}
            <div className="md:hidden mb-6 text-center">
              <TextShimmer 
                duration={2.5}
                className="text-sm font-medium [--base-color:theme(colors.gray.500)] [--base-gradient-color:theme(colors.gray.300)] dark:[--base-color:theme(colors.gray.300)] dark:[--base-gradient-color:theme(colors.gray.200)]"
              >
                Swipe to explore our focus areas →
              </TextShimmer>
            </div>

            {/* Mobil için horizontal scroll container */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-4 px-6 -mx-6 snap-x snap-mandatory">
              <div className="block flex-none w-[85vw] snap-start">
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl border border-red-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">Healthcare Technologies and Medical Innovation</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Strategic investments in advanced biomedical research, pharmaceutical technology development, and clinical innovation. Leadership in global healthcare system modernization and development of accessible medical solutions.</p>
                </div>
              </div>

              <div className="block flex-none w-[85vw] snap-start">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                      <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Information Technology and Educational Systems</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Comprehensive investments in digital learning platforms, educational technology solutions, and knowledge infrastructure development. Democratization of academic access through modern educational methodologies and technology integration.</p>
                </div>
              </div>

              <div className="block flex-none w-[85vw] snap-start">
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">Agricultural Technology and Food Systems</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Expertise in sustainable agricultural technologies, food production optimization, and supply chain modernization. Development of systematic solutions for global nutrition security and agricultural productivity enhancement.</p>
                </div>
              </div>

              <div className="block flex-none w-[85vw] snap-start">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                      <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Energy Technology and Climate Solutions</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Strategic initiatives in renewable energy systems, clean technology development, and carbon management. Support for pioneering projects in climate change mitigation and sustainable energy transformation.</p>
                </div>
              </div>
            </div>

            {/* Desktop için grid layout */}
            <div className="hidden md:block">
              <div className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl border border-red-100">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent">Healthcare Technologies and Medical Innovation</h3>
                <p className="text-base text-gray-700 leading-relaxed">Strategic investments in advanced biomedical research, pharmaceutical technology development, and clinical innovation. Leadership in global healthcare system modernization and development of accessible medical solutions.</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">Information Technology and Educational Systems</h3>
                <p className="text-base text-gray-700 leading-relaxed">Comprehensive investments in digital learning platforms, educational technology solutions, and knowledge infrastructure development. Democratization of academic access through modern educational methodologies and technology integration.</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-100">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">Agricultural Technology and Food Systems</h3>
                <p className="text-base text-gray-700 leading-relaxed">Expertise in sustainable agricultural technologies, food production optimization, and supply chain modernization. Development of systematic solutions for global nutrition security and agricultural productivity enhancement.</p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Energy Technology and Climate Solutions</h3>
                <p className="text-base text-gray-700 leading-relaxed">Strategic initiatives in renewable energy systems, clean technology development, and carbon management. Support for pioneering projects in climate change mitigation and sustainable energy transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="w-full bg-black py-24 relative" id="photo-gallery">
        <div className="container mx-auto max-w-full relative">
          {/* Scroll-triggered overlay */}
          <div 
            className="fixed inset-0 bg-black flex items-center justify-center pointer-events-none transition-all duration-1000 z-10"
            style={{
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`
            }}
          >
            <div 
              className="text-white text-center px-6 max-w-4xl transition-all duration-1000"
              style={{
                opacity: messageOpacity,
                transform: `translateY(${messageTranslateY}px)`
              }}
            >
              <h2 className="text-2xl md:text-4xl font-light mb-6 leading-tight">
                Do You See the Common Point?
              </h2>
              <p className="text-sm md:text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto">
                Each of them has the same sparkle in their eyes. The same innocence, the same happiness, 
                the same pure joy... All of them have that beautiful smile on their faces. Their colors, 
                languages, cultures are different, but their hearts beat in the same language. Each one 
                deserves a beautiful life. Each one deserves love, security, health, education, and the 
                chance to make their dreams come true.
              </p>
              <p className="text-base md:text-xl font-medium mt-6 text-white">
                Because they are our children. All of our children.
              </p>
              
              {/* Continue scrolling hint */}
              <div className="mt-8 opacity-70">
                <p className="text-xs md:text-sm text-gray-300 font-light">
                  Continue scrolling to learn more about our mission
                </p>
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-6 sm:columns-8 md:columns-6 lg:columns-8 xl:columns-10 2xl:columns-12 gap-1">
            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/arnab-de-d9x0rHiAgWQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            
            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/caroline-hernandez-tJHU4mGSLz4-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/sammy-wong-4pIDrPgSGBM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/teah-rushing-CWKkQaDPxZw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/howz-nguyen-H_sDu3bSHFQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/malin-bjork-_zIrVEsVoxY-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/assad-tanoli-D8wj5WmZNrY-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/chris-j-davis-s7io1jLzc2A-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/random-thinking-99WDVYH0rsk-unsplash.jpg"
                alt="Foundation Journey"
                width={400}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/shan-a-rajpoot-detxfqZMnNQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/emmanuel-offei-fn8VJkhDuNY-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/fethi-bouhaouchine-auVpR9NBNHk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/shakib-uzzaman-h5H6S0qoI8o-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/santiago-gomez-fBkjtLvm3o0-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ariungoo-batzorig--eCqmbNRufM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/mike-cox-40Ku-6znIdU-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ugyen-tenzin-wJWxDWqdMy4-unsplash.jpg"
                alt="Foundation Journey"
                width={400}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/joseph-agboola-hcirTGDWBmM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/luis-arias-DNvLgD6VfDw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/nathan-bingle-6LzmCrQxGP0-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/tao-yuan-VxO8lr33m6E-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/dang-truong-ldto2xSwUxA-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/tong-nguyen-van-ERIZwv4V5pA-unsplash.jpg"
                alt="Foundation Journey"
                width={400}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/scopor-1Yif6bg8jlg-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ksav-pun-rEg-N2k4jZI-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/salah-eddine-haddad-Vq8FY2lrnLQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/dao-vi-t-hoang-AuuJbUdIYIc-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/uchral-sanjaadorj-POe4rzxc_Iw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/simon-reza-TLgne7653tE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/randy-lin-FN_00mJ4coc-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/assad-tanoli-Q_-RUTp90HY-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/e_i9-GgJqEQVe3g8-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/simon-reza-21CvnfdFCVE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/michael-ali-VfuNGCk2Yqk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/marco-antonio-casique-reyes-Her6V3kRZf8-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/brittani-burns-c5fc3MKIzUM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/mike-cox-gakCezYJs-0-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/hoylee-song-vpBp3uy-9hM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/josh-duncan-iRHHahk88hk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/vitaliy-zalishchyker-52gczr250Fw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/soheil-jalili-7FWROpOUCmw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/wafiq-raza-GaCXSjQNbj4-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/my-digital-pixel--GHQiaJ6-PE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/alex-gallegos-W7NPb91T3YE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/alexander-grey-0mtd2tpWF9w-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/nathan-dumlao-dZ0T73DafuU-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/chidy-young-95AGS_Bb1Ng-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/colin-meg-Ea2A7ain8_0-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/shalev-cohen-5Z7RoCttbqs-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/zachary-kadolph-JF7NpocONT8-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/jonathan-ramalho-ldfcfDQfTiI-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/shirish-suwal-Ne56JxWDU24-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/wagner-santos-y1XJD7wB9gY-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/rafiee-artist-S9Ei8Vhulio-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/marina-abrosimova-31HvAaNHCvc-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/bruno-aguirre-1jRcexQldfQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/joel-timothy-R2NywCPSGQs-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/zoe-graham-HUNsdX1E-kI-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/giusi-borrasi-x7D77vS_Fqk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/annie-spratt-byZkjVj5OIE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/assad-tanoli-Q_vroHVHeVQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/assad-tanoli-nqQoQCKN2As-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/john-mcfetridge-1CNg2BqnvQo-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/tao-yuan-vso1oez3-SM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/kobe-kian-clata-0Urp44PEPJE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/omid-armin-Vp1ka9G5t7A-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/dmitry-rodionov-mA6dzUqO3eI-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ali-mousavi-nJv3O-iwOBw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/zachary-kadolph-hsLP0FZlxoo-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ksav-pun-Hc_31Q-TspM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/joel-danielson-buN4aX5JaNs-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/simanta-saha-HDK816FMnrU-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/jesse-schoff-wYV5_Kt8wPk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ariungoo-batzorig-YuK53AEgYUM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/kyle-peyton-C0H05P-t3g4-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/dinesh-jangid-mNhXby6xJtQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/samrat-khadka-maQ2LqnqP0E-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/ortopediatri-cocuk-ortopedi-akademisi-FauvKjQSybk-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/nathan-dumlao-N5AHGljQo_4-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/sabrina-albuquerque-a_evqZlUd5U-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/rainier-ridao-K2RHtsx9Aqc-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/tibor-papai-BQRU96Be4GQ-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/sandip-karangiya-I9Sosdj9PLw-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/angelo-casto-dy5tv6HC3ng-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/artam-hoomat-tveTPmgl_wE-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/janilson-furtado-UwJtTrpc6RM-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/nathan-dumlao-3-tkQbEAsd8-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={300}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="break-inside-avoid mb-1">
              <Image
                src="/images/foto/dipak-tolani-eM_V6tWfy3Y-unsplash.jpg"
                alt="Foundation Journey"
                width={200}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">
              Strategic Investment Focus
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We identify market inefficiencies and systemic gaps across critical sectors, 
              then deploy capital toward breakthrough solutions that create sustainable value and impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Healthcare Innovation */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Healthcare Transformation</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Analysis</h4>
                  <p className="text-sm leading-relaxed">
                    Traditional drug development processes average 15+ years with 90% failure rates. 
                    Significant opportunities exist for optimizing development timelines through 
                    artificial intelligence-driven discovery platforms, precision medicine applications, 
                    and innovative regulatory approaches.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Artificial intelligence-powered drug discovery platforms ($5-50M investment scale)</li>
                    <li>• Regulatory-compliant manufacturing technology innovations</li>
                    <li>• Point-of-care diagnostic technologies and devices</li>
                    <li>• Precision medicine and genomic analysis applications</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/healthcare"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* EdTech Revolution */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Educational Innovation</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Analysis</h4>
                  <p className="text-sm leading-relaxed">
                    The global education sector faces significant scalability challenges due to 
                    high-cost barriers and geographical access limitations. Investment is directed 
                    toward technological solutions that democratize quality educational content 
                    and provide personalized learning experiences.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Adaptive learning systems with artificial intelligence personalization</li>
                    <li>• Open-source educational infrastructure and platform projects</li>
                    <li>• Competency-based assessment and certification systems</li>
                    <li>• Virtual and augmented reality educational technologies</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/knowledge"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* AgTech & Food Security */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M15 1.784l-.796.795a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.795a1.125 1.125 0 101.591 0L12 1.784zM9 1.784L8.204 2.58a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.42 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.42 0 2.604 2.604 0 00-1.915-.165v2.494a.75.75 0 001.183.61 4.104 4.104 0 013.42 0 2.604 2.604 0 002.33 0 4.104 4.104 0 013.42 0 .75.75 0 001.183-.61v-2.494z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">AgTech & Nutrition</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Analysis</h4>
                  <p className="text-sm leading-relaxed">
                    Global food systems require comprehensive optimization in terms of sustainability 
                    and efficiency. We target agricultural technology innovations, alternative protein 
                    development processes, and supply chain optimization solutions to address 
                    food security challenges.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Precision agriculture and IoT-enabled monitoring systems</li>
                    <li>• Alternative protein technology development and scaling</li>
                    <li>• Vertical farming and controlled environment agriculture applications</li>
                    <li>• Supply chain transparency and optimization platforms</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/food"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* CleanTech & Energy */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900">Energy & Climate</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Market Analysis</h4>
                  <p className="text-sm leading-relaxed">
                    The energy transition process presents significant opportunities for breakthrough 
                    technologies in renewable energy generation, storage technologies, and grid 
                    optimization. Strategic investments are made in scalable solutions that 
                    accelerate decarbonization objectives.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="text-gray-900 font-medium mb-3">Investment Strategy</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Next-generation solar energy and energy storage systems</li>
                    <li>• Grid-scale battery and hydrogen technologies</li>
                    <li>• Carbon capture and utilization platforms</li>
                    <li>• Distributed energy management and smart grid solutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/energy"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Philosophy */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-12 text-center text-white">
        <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Foundation Philosophy</h3>
        <p className="text-base sm:text-xl font-light leading-relaxed mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto">
          We deploy resources toward transformative technologies that serve humanity's fundamental needs. 
          Our success is measured not by financial returns, but by the tangible impact on human lives and global well-being.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-8 mb-8 sm:mb-12">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-blue-400 mb-2">$500M+</div>
            <div className="text-xs sm:text-sm text-gray-300">Committed resources</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-green-400 mb-2">Open Access</div>
            <div className="text-xs sm:text-sm text-gray-300">Technology accessibility</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-purple-400 mb-2">Long-term</div>
            <div className="text-xs sm:text-sm text-gray-300">Sustainable impact focus</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-red-400 mb-2">Global</div>
            <div className="text-xs sm:text-sm text-gray-300">Human-centered approach</div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <p className="text-sm sm:text-lg font-light text-gray-300 italic mb-6 sm:mb-8">
            "Our metric of success is not applause: it is empty hospital beds, full plates, 
            skylines that banish carbon to the pages of history, and tiny dreamers' fingers 
            reaching an open screen for the very first time."
          </p>
          
          {/* CTA Button for Funding Application */}
          <Link 
            href="/funding"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3">
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" />
            </svg>
            Apply for Funding
          </Link>
        </div>
      </div>
    </>
  );
} 