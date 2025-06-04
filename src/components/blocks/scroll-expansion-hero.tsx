'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc?: string;
  posterSrc?: string;
  bgImageSrc: string;
  title: string;
  date: string;
  scrollToExpand: string;
  textBlend?: boolean;
  children: ReactNode;
  manifestoButtonText?: string;
  onManifestoClick?: () => void;
}

// Video cache management
const videoCache = new Map<string, HTMLVideoElement>();
const preloadedVideos = new Set<string>();

const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    // Eğer cache'de varsa direkt dön
    if (videoCache.has(src)) {
      resolve(videoCache.get(src)!);
      return;
    }

    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'auto'; // Tüm video'yu yükle
    video.muted = true;
    video.playsInline = true;
    
    const handleCanPlayThrough = () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
      
      // Cache'e ekle
      videoCache.set(src, video);
      preloadedVideos.add(src);
      resolve(video);
    };

    const handleError = () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
      reject(new Error(`Video yüklenemedi: ${src}`));
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('error', handleError);
    
    video.src = src;
    video.load();
  });
};

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
  manifestoButtonText = "Read Our Manifesto in English",
  onManifestoClick,
}: ScrollExpandMediaProps) => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [mediaOpacity, setMediaOpacity] = useState(1);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [showManifesto, setShowManifesto] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const cachedVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleManifestoClick = () => {
    setShowManifesto(true);
    if (manifestoRef.current) {
      manifestoRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (onManifestoClick) {
      onManifestoClick();
    }
  };

  // Video preloading effect with Intersection Observer
  useEffect(() => {
    if (mediaType === 'video' && mediaSrc && containerRef.current) {
      // Intersection Observer ile lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Video görünür alanda, preload et
              preloadVideo(mediaSrc!)
                .then((cachedVideo) => {
                  cachedVideoRef.current = cachedVideo;
                  setVideoLoaded(true);
                  
                  // Ana video element'a cached video'yu klonla
                  if (mediaRef.current && mediaRef.current instanceof HTMLVideoElement) {
                    const videoElement = mediaRef.current;
                    
                    // Cached video'nun özelliklerini ana video'ya kopyala
                    videoElement.currentTime = 0;
                    
                    // Video ready olduğunu işaretle
                    setTimeout(() => {
                      setShowPoster(false);
                    }, 300);
                  }
                })
                .catch((error) => {
                  console.error('Video preload hatası:', error);
                  setVideoError(true);
                  setVideoLoaded(false);
                });
              
              // Observer'ı durdur
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '100px', // 100px önce yüklemeye başla
          threshold: 0.1
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [mediaType, mediaSrc]);

  // Network durumunu kontrol et ve buna göre preload stratejisi belirle
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      if (connection) {
        const isSlowConnection = connection.effectiveType === 'slow-2g' || 
                                connection.effectiveType === '2g';
        
        if (isSlowConnection && mediaRef.current instanceof HTMLVideoElement) {
          // Yavaş bağlantıda video preload'ını azalt
          mediaRef.current.preload = 'metadata';
        }
      }
    }
  }, []);

  // Poster preloading
  useEffect(() => {
    if (posterSrc && mediaType === 'video') {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Poster yüklendi, video yoksa poster göster
        if (!videoLoaded) {
          setShowPoster(true);
        }
      };
      img.src = posterSrc;
    }
  }, [posterSrc, mediaType, videoLoaded]);

  // Background image preloading
  useEffect(() => {
    if (bgImageSrc) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = bgImageSrc;
    }
  }, [bgImageSrc]);

  useEffect(() => {
    const resetSection = () => {
      setScale(1);
      setOpacity(1);
      setMediaOpacity(1);
      setShowManifesto(false);
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

  // Video event handlers
  const handleVideoLoadedData = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      setShowPoster(false);
    }, 200);
  };

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
    console.error('Video oynatma hatası');
  };

  return (
    <div className={`relative ${showManifesto ? 'min-h-[200vh]' : 'min-h-screen'}`}>
      {/* Content Container */}
      <div ref={containerRef} className="relative z-30">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-6 relative overflow-hidden">
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
          
          {/* Media Container - Sadece mediaSrc varsa göster */}
          {mediaSrc && (
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
                  <>
                    {/* Poster Image */}
                    {posterSrc && showPoster && !videoError && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                        style={{ 
                          backgroundImage: `url(${posterSrc})`,
                          opacity: showPoster ? 1 : 0,
                          zIndex: videoLoaded && !showPoster ? 1 : 2
                        }}
                      />
                    )}
                    
                    {/* Error fallback */}
                    {videoError && posterSrc && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ 
                          backgroundImage: `url(${posterSrc})`,
                          zIndex: 3
                        }}
                      />
                    )}
                    
                    {/* Video Element */}
                    {!videoError && (
                      <video
                        ref={mediaRef as React.RefObject<HTMLVideoElement>}
                        src={mediaSrc}
                        poster={posterSrc}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        style={{ 
                          opacity: videoLoaded && !showPoster ? mediaOpacity : 0,
                          zIndex: videoLoaded && !showPoster ? 2 : 1
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        crossOrigin="anonymous"
                        onLoadedData={handleVideoLoadedData}
                        onCanPlay={handleVideoCanPlay}
                        onError={handleVideoError}
                        onLoadStart={() => {
                          // Sadece cache'de yoksa loading göster
                          if (!preloadedVideos.has(mediaSrc)) {
                            setVideoLoaded(false);
                          }
                        }}
                      />
                    )}
                    
                    {/* Loading indicator - Sadece cache'de yoksa göster */}
                    {!videoLoaded && !videoError && !preloadedVideos.has(mediaSrc) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="text-white/80 text-sm font-medium">Video yükleniyor...</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    ref={mediaRef as React.RefObject<HTMLImageElement>}
                    src={mediaSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                    style={{ opacity: mediaOpacity }}
                    crossOrigin="anonymous"
                  />
                )}
              </div>
            </div>
          )}
          
          {/* Text Content - Video'nun üzerine ortalanmış */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-300 z-10 px-8 ${
              textBlend ? 'mix-blend-difference' : ''
            }`}
            style={{ opacity: opacity }}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {title}
              </h1>
              <p className="text-lg md:text-2xl mb-2 opacity-80 drop-shadow-lg">
                {date}
              </p>
              <p className="text-base opacity-60 drop-shadow-lg mb-6">
                {scrollToExpand}
              </p>
              
              {/* Manifesto Butonu - Scroll yazısının altında */}
              <button
                onClick={handleManifestoClick}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium tracking-wide"
                style={{ opacity: opacity }}
              >
                {manifestoButtonText}
              </button>
            </div>
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
        
        {/* Content Section - Manifesto sadece butona basıldığında görünür */}
        {showManifesto && (
          <div 
            ref={manifestoRef}
            className="min-h-screen bg-white relative z-20 transition-all duration-500"
          >
            <div className="py-16">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollExpandMedia; 