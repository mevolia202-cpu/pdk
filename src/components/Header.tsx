import React from 'react';
import { Menu, User, LogOut, Wallet, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenDrawer: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  currentUser: { username: string; balance: number } | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  onOpenLogin,
  onOpenRegister,
  currentUser,
  onLogout,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1A181B] border-b border-neutral-800 shadow-md">
      <div className="max-w-4xl mx-auto px-3 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
            aria-label="Oriontoto Beranda"
          >
            <div className="relative flex items-center">
              <img
                src="https://oriontoto.dataklmsad903.site/images/setting-logo/1/uMzPGPbaG5i5HzGY.png"
                alt="OrionToto Official"
                className="h-10 w-auto object-contain drop-shadow"
                onError={(e) => {
                  // Fallback logo if external image network fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo flex items-center gap-1 font-black text-xl text-amber-400 tracking-wider';
                    fallback.innerHTML = '<span>ORION</span><span class="text-white">TOTO</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded font-medium">
              <ShieldCheck className="w-3 h-3 text-amber-400" /> RESMI & TERPERCAYA
            </span>
          </a>
        </div>

        {/* Right Action: User profile or drawer menu toggle */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700/80 rounded-full px-2.5 py-1">
              <div className="flex items-center gap-1.5 text-xs">
                <Wallet className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-amber-300">
                  Rp {currentUser.balance.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="h-3 w-px bg-neutral-700" />
              <button
                onClick={onLogout}
                className="text-neutral-400 hover:text-red-400 transition-colors p-0.5"
                title="Keluar"
                aria-label="Logout"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="hidden xs:flex items-center gap-1.5 text-xs">
              <button
                onClick={onOpenLogin}
                className="px-2.5 py-1 text-neutral-300 hover:text-white font-medium"
              >
                Masuk
              </button>
              <button
                onClick={onOpenRegister}
                className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded"
              >
                Daftar
              </button>
            </div>
          )}

          {/* Side Drawer Toggle (Clean replacement for old #open-right img) */}
          <button
            onClick={onOpenDrawer}
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
            aria-label="Buka Menu Samping"
          >
            <Menu className="w-6 h-6 text-amber-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
