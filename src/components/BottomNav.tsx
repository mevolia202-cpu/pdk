import React from 'react';
import { Home, BarChart3, LogIn, Gift, Headphones, UserCheck } from 'lucide-react';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenLogin: () => void;
  isLoggedIn?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  onOpenLogin,
  isLoggedIn,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#1D1B1E] border-t border-neutral-800 shadow-[0_-4px_15px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto grid grid-cols-5 h-15 items-center relative px-1">
        {/* Tab 1: Beranda */}
        <button
          onClick={() => onTabChange('beranda')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            currentTab === 'beranda' ? 'text-amber-400 font-bold' : 'text-neutral-400 hover:text-white'
          }`}
          aria-label="Beranda"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Beranda</span>
        </button>

        {/* Tab 2: RTP Live */}
        <button
          onClick={() => onTabChange('rtp')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            currentTab === 'rtp' ? 'text-amber-400 font-bold' : 'text-neutral-400 hover:text-white'
          }`}
          aria-label="RTP Live"
        >
          <BarChart3 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">RTP Live</span>
        </button>

        {/* Tab 3: Central Elevated Masuk/Akun Button */}
        <div className="flex flex-col items-center justify-center relative -top-3">
          <button
            onClick={onOpenLogin}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 text-black flex items-center justify-center shadow-[0_4px_14px_rgba(254,219,55,0.4)] border-2 border-black hover:scale-105 active:scale-95 transition-transform"
            aria-label={isLoggedIn ? 'Akun Saya' : 'Masuk Akun'}
          >
            {isLoggedIn ? (
              <UserCheck className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <LogIn className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
          <span className="text-[10px] font-bold text-amber-400 mt-1">
            {isLoggedIn ? 'Akun' : 'Masuk'}
          </span>
        </div>

        {/* Tab 4: Promo */}
        <button
          onClick={() => onTabChange('promo')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            currentTab === 'promo' ? 'text-amber-400 font-bold' : 'text-neutral-400 hover:text-white'
          }`}
          aria-label="Promo & Bonus"
        >
          <Gift className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Promo</span>
        </button>

        {/* Tab 5: Hubungi */}
        <button
          onClick={() => onTabChange('hubungi')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            currentTab === 'hubungi' ? 'text-amber-400 font-bold' : 'text-neutral-400 hover:text-white'
          }`}
          aria-label="Hubungi Layanan"
        >
          <Headphones className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Hubungi</span>
        </button>
      </div>
    </nav>
  );
};
