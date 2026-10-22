import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GAME_CATEGORIES } from '../data/portalData';

interface GameCategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const GameCategoryNav: React.FC<GameCategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-14 z-30 w-full bg-[#181619] border-y border-neutral-800 shadow-md">
      <div className="max-w-4xl mx-auto relative flex items-center px-1">
        {/* Left Scroll Arrow */}
        <button
          onClick={() => scroll('left')}
          className="shrink-0 p-1.5 text-neutral-400 hover:text-amber-400 transition-colors hidden sm:block"
          aria-label="Scroll Kiri"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Categories Bar */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
        >
          {GAME_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 flex flex-col items-center justify-center min-w-[70px] sm:min-w-[82px] py-1.5 px-2 rounded-lg transition-all text-xs font-semibold select-none ${
                  isActive
                    ? 'bg-neutral-800/90 text-amber-400 border border-amber-500/60 shadow-[0_0_10px_rgba(254,219,55,0.2)]'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
                }`}
              >
                <img
                  src={cat.iconUrl}
                  alt={cat.label}
                  className={`w-6 h-6 object-contain mb-1 transition-transform ${
                    isActive ? 'scale-110 drop-shadow-[0_0_6px_rgba(254,219,55,0.6)]' : 'opacity-80'
                  }`}
                  onError={(e) => {
                    // Hide if failed
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="truncate whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Arrow */}
        <button
          onClick={() => scroll('right')}
          className="shrink-0 p-1.5 text-neutral-400 hover:text-amber-400 transition-colors hidden sm:block"
          aria-label="Scroll Kanan"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
