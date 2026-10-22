import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Gamepad2, Play } from 'lucide-react';
import { PROVIDERS_DATA, ProviderItem } from '../data/portalData';

interface ProviderSectionProps {
  category: 'slot' | 'live-casino' | 'sport' | 'sabung-ayam' | 'tembak-ikan' | 'virtual' | 'crash-game';
  title: string;
  iconUrl: string;
  onSelectProvider: (provider: ProviderItem) => void;
}

export const ProviderSection: React.FC<ProviderSectionProps> = ({
  category,
  title,
  iconUrl,
  onSelectProvider,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const providers = PROVIDERS_DATA.filter((p) => p.category === category);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  if (providers.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-4">
      {/* Category Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-neutral-950 via-neutral-900 to-[#1e1704] border-l-4 border-amber-400 py-2 px-3 rounded-t-lg mb-2 shadow">
        <div className="flex items-center gap-2">
          <img
            src={iconUrl}
            alt={title}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h3 className="text-amber-400 font-bold text-sm sm:text-base tracking-wide uppercase">
            {title}
          </h3>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => scroll('left')}
            className="p-1 rounded bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
            aria-label={`Scroll kiri ${title}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1 rounded bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
            aria-label={`Scroll kanan ${title}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Provider Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 px-0.5 scroll-smooth"
      >
        {providers.map((provider) => (
          <div
            key={provider.id}
            onClick={() => onSelectProvider(provider)}
            className={`group shrink-0 relative w-32 sm:w-36 rounded-xl overflow-hidden border transition-all duration-200 select-none ${
              provider.isMaintenance
                ? 'opacity-60 cursor-not-allowed border-neutral-800 bg-neutral-900/60'
                : 'cursor-pointer border-neutral-800 hover:border-amber-400/80 bg-[#1e1b20] hover:bg-[#27232a] hover:shadow-[0_4px_16px_rgba(254,219,55,0.18)] hover:-translate-y-0.5'
            }`}
          >
            {/* Provider Logo Image */}
            <div className="relative aspect-[16/10] bg-neutral-950 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={provider.image}
                alt={provider.name}
                className={`w-full h-full object-contain rounded transition-transform group-hover:scale-105 ${
                  provider.isMaintenance ? 'grayscale brightness-50' : ''
                }`}
                onError={(e) => {
                  // Fallback card if image URL is inaccessible
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-provider')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-provider flex flex-col items-center justify-center text-center p-1';
                    fallback.innerHTML = `<span class="text-amber-400 font-bold text-xs">${provider.name}</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />

              {/* Maintenance Overlay */}
              {provider.isMaintenance && (
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-1 text-center">
                  <Wrench className="w-4 h-4 text-amber-400 mb-0.5 animate-spin" />
                  <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-600/50">
                    Maintenance
                  </span>
                </div>
              )}

              {/* Hot Tag */}
              {provider.isHot && !provider.isMaintenance && (
                <span className="absolute top-1 right-1 text-[8px] font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-500 text-white px-1.5 py-0.2 rounded-full shadow">
                  HOT
                </span>
              )}

              {/* Play Hover Overlay */}
              {!provider.isMaintenance && (
                <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              )}
            </div>

            {/* Provider Label & Games Count */}
            <div className="p-2 bg-[#1a171c] border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-200 truncate group-hover:text-amber-400 transition-colors">
                {provider.name}
              </span>
              {provider.gameCount && (
                <span className="text-[9px] text-neutral-500 font-medium shrink-0 ml-1">
                  {provider.gameCount} Games
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
