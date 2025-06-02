'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollExpandMediaProps {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title: string;
  date: string;
  scrollToExpand: string;
  textBlend?: boolean;
  children: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType,
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [mediaOpacity, setMediaOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);

  useEffect(() => {
    const resetSection = () => {
      setScale(1);
      setOpacity(1);
      setMediaOpacity(1);
    };

    window.addEventListener('resetSection', resetSection);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.scrollY;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = scrolled + rect.top;
      const containerHeight = rect.height;
      
      // Calculate progress based on scroll
      const progress = Math.min(Math.max((scrolled - containerTop) / (containerHeight * 0.5), 0), 1);
      
      // Scale from 1 to window dimensions
      const maxScale = Math.max(window.innerWidth / 400, window.innerHeight / 300);
      const newScale = 1 + progress * (maxScale - 1);
      
      // Fade background but keep media visible
      const bgOpacity = Math.max(1 - progress * 2, 0);
      const newMediaOpacity = 1;
      
      setScale(newScale);
      setOpacity(bgOpacity);
      setMediaOpacity(newMediaOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resetSection', resetSection);
    };
  }, []);

  return (
    <div className="relative min-h-[200vh]">
      {/* Content Container */}
      <div ref={containerRef} className="relative z-30">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Background Image - Now absolute within hero section */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
            style={{ 
              backgroundImage: `url(${bgImageSrc})`,
              opacity: opacity,
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" style={{ opacity: opacity }} />
          
          {/* Media Container */}
          <div 
            className="relative mb-8 overflow-hidden rounded-2xl z-10"
            style={{
              width: '400px',
              height: '300px',
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            {/* Background Media (for scaling effect) */}
            <div className="absolute inset-0 bg-black">
              {mediaType === 'video' ? (
                <video
                  ref={mediaRef as React.RefObject<HTMLVideoElement>}
                  src={mediaSrc}
                  poster={posterSrc}
                  className="w-full h-full object-cover"
                  style={{ opacity: mediaOpacity }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  ref={mediaRef as React.RefObject<HTMLImageElement>}
                  src={mediaSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                  style={{ opacity: mediaOpacity }}
                />
              )}
            </div>
          </div>
          
          {/* Text Content - Video'nun üzerine ortalanmış */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-300 z-10 ${
              textBlend ? 'mix-blend-difference' : ''
            }`}
            style={{ opacity: opacity }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-80 drop-shadow-lg">
              {date}
            </p>
            <p className="text-lg opacity-60 drop-shadow-lg">
              {scrollToExpand}
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
            style={{ opacity: opacity }}
          >
            <svg 
              className="w-8 h-8 drop-shadow-lg" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="min-h-screen bg-white relative z-20">
          <div className="py-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia; 