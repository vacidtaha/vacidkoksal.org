"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-[family-name:var(--font-inter)] leading-tight">
              Technology for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Humanity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We engineer solutions that heal, nourish, and educate. Our mission is to make cutting-edge technology accessible to all humanity.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <svg 
              className="w-8 h-8 text-gray-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </section>
      
      {/* Manifesto Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center font-[family-name:var(--font-inter)]">Manifesto</h2>
          
          <div className="text-[#494949] font-[family-name:var(--font-inter)] leading-relaxed space-y-8 text-center mx-auto">
            <p className="text-lg">
              We live in a curious age—one that can name every disease with near-perfect precision, yet still keeps the cure out of reach. Fields spill over with boundless yield while hungry, unhealthy tables sit in their shadows. Information flashes across the globe at light-speed, yet "premium" paywalls spring up in its path. Cities that turn night into day float beneath a haze of carbon smoke… This landscape cannot be "normalized." It is the product of a system built wrong—one that rewards hesitation and inertia.
            </p>
            
            <p className="text-lg">
              The Vacid & Köksal Foundation is an intervention in that design flaw.
              We are not a rival to any sector; we are an idea engineered to supply the missing link of a civilization that has lost both its speed and its sense of direction.
            </p>
            
            <p className="text-lg">
              Technology is the common thread running through every issue we name—but it becomes revolutionary only when it is as accessible as it is refined, not when it remains a toy of concentrated capital.
              We reject the health industry's creed that treats profit sheets as holier than medicine itself.
              We reject the gates that stamp knowledge with a "premium access" seal.
            </p>
            
            <div className="py-8">
              <p className="text-2xl font-medium italic">
                "Our foundation stays quiet not to hide its name, but to keep its outcomes from being overshadowed."
              </p>
            </div>
            
            <p className="text-lg">
              Our metric of success is not applause: it is empty hospital beds, full plates, skylines that banish carbon to the pages of history, and tiny dreamers' fingers reaching an open screen for the very first time.
            </p>
            
            <p className="text-lg">
              This letter is neither a call for donations nor for applause. It is an open invitation to anyone with ideas, labor, data, or courage. There will be no queue for acclaim—only an endless queue for participation. Elevating humanity to its best edition is not the task of a few founders; it is the shared imperative of everyone reading these lines.
            </p>
            
            <p className="text-lg">
              The moment you place your data, your idea, your labor, or your capital on the table, you become the Foundation. Our names may fade, but the flaws we mend will not return; accessible healing and borderless knowledge will become everyday rights.
            </p>
            
            <p className="text-lg font-medium mt-12">
              With love,<br />
              T.Vacid H.Köksal.
            </p>
          </div>
        </div>
      </section>
      
      {/* Bilgi kartları */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl space-y-12">
          {/* Sağlık kartı */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-inter)]">Health Initiative</h2>
              <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-inter)]">
                Reimagining a world where healthcare transcends barriers—where AI diagnoses before symptoms appear, and treatment is a human right, not a privilege
              </p>
              <div className="inline-flex items-center mt-auto cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="ml-4 font-medium group-hover:underline">More</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <div className="w-full h-full max-w-xs flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-blue-600">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Gıda kartı */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-inter)]">Food Systems</h2>
              <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-inter)]">
                Creating a future where hunger is history—with precision agriculture that regenerates ecosystems and networks that ensure every table is abundantly supplied
              </p>
              <div className="inline-flex items-center mt-auto cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="ml-4 font-medium group-hover:underline">More</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <div className="w-full h-full max-w-xs flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-green-600">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M12 16V22"/>
                  <path d="M8 18C8 18 9 17 12 17S16 18 16 18"/>
                  <path d="M6 20C6 20 7.5 19 12 19S18 20 18 20"/>
                  <circle cx="8" cy="12" r="1"/>
                  <circle cx="16" cy="12" r="1"/>
                  <circle cx="10" cy="14" r="0.5"/>
                  <circle cx="14" cy="14" r="0.5"/>
                  <circle cx="9" cy="10" r="0.5"/>
                  <circle cx="15" cy="10" r="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Enerji kartı */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-inter)]">Energy Future</h2>
              <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-inter)]">
                Pioneering the era when clean energy flows as freely as sunlight—where carbon-neutral technologies power thriving cities and no community remains in darkness
              </p>
              <div className="inline-flex items-center mt-auto cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="ml-4 font-medium group-hover:underline">More</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <div className="w-full h-full max-w-xs flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-yellow-500">
                  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Bilgi kartı */}
          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-inter)]">Knowledge Access</h2>
              <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-inter)]">
                Building a borderless realm of shared wisdom—where every curious mind has unfettered access to the world's knowledge and education transcends all barriers
              </p>
              <div className="inline-flex items-center mt-auto cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="ml-4 font-medium group-hover:underline">More</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <div className="w-full h-full max-w-xs flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-purple-600">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.204 54.204 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.22 56.22 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex-grow">
        {/* Ana sayfa içeriği buraya gelecek */}
      </div>
      
      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 mt-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Sol boş alan */}
            <div></div>
            
            {/* Orta - Latin motto */}
            <div className="text-center">
              <p className="text-xl tracking-wide text-gray-600 italic font-[family-name:var(--font-cinzel)]">
                Aut inveniam viam aut faciam
              </p>
            </div>
            
            {/* Sağ taraf - Foundation bilgileri */}
            <div className="text-right">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Vacid & Köksal Foundation
              </h3>
              <nav className="space-y-1">
                <Link 
                  href="/yonetim" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Foundation Management
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/careers" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Careers
                </Link>
                <Link 
                  href="/faq" 
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Alt kısım - Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vacid & Köksal Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 