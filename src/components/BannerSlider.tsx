import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PORTAL_BANNERS } from '../data/portalData';

interface BannerSliderProps {
  onBannerClick?: (bannerId: number) => void;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({ onBannerClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PORTAL_BANNERS.length);
    }, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTAL_BANNERS.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PORTAL_BANNERS.length);
    resetTimer();
  };

  const currentBanner = PORTAL_BANNERS[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-neutral-900 border-b border-neutral-800">
      {/* Banner Viewport */}
      <div
        className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[3/1] max-h-72 cursor-pointer group select-none"
        onClick={() => onBannerClick?.(currentBanner.id)}
      >
        {PORTAL_BANNERS.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback graceful visual banner if image server is slow
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-banner')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'fallback-banner w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-neutral-900 via-amber-950/40 to-neutral-900 text-center p-4';
                  fallback.innerHTML = `
                    <div class="text-amber-400 font-bold text-lg sm:text-2xl tracking-wide">${banner.title}</div>
                    <div class="text-neutral-300 text-xs sm:text-sm mt-1">${banner.subtitle}</div>
                    <span class="mt-3 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">${banner.badge}</span>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />
            
            {/* Floating Top Badge */}
            <div className="absolute top-2 left-3 z-20 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-amber-500/40 text-[10px] sm:text-xs font-semibold text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{banner.badge}</span>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-amber-400 transition-all opacity-80 group-hover:opacity-100"
          aria-label="Banner Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-amber-400 transition-all opacity-80 group-hover:opacity-100"
          aria-label="Banner Selanjutnya"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {PORTAL_BANNERS.map((banner, idx) => (
            <button
              key={banner.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
                resetTimer();
              }}
              className={`transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-6 h-1.5 bg-amber-400'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
