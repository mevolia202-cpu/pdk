import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthBarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  isLoggedIn?: boolean;
}

export const AuthBar: React.FC<AuthBarProps> = ({
  onLoginClick,
  onRegisterClick,
  isLoggedIn,
}) => {
  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="w-full bg-black py-2.5 px-4 border-b border-neutral-900">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* MASUK Button */}
        <button
          onClick={onLoginClick}
          aria-label="Masuk Akun Utama"
          data-testid="auth-bar-masuk"
          className="relative group overflow-hidden rounded-md p-[2px] transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-md animate-pulse" />
          <div className="relative flex items-center justify-center gap-2 bg-gradient-to-b from-[#2a1d06] to-[#140e02] hover:from-[#352507] hover:to-[#1a1303] text-amber-300 font-bold text-sm tracking-wider py-2 px-4 rounded-[4px] border border-amber-500/50 shadow-[0_0_12px_rgba(254,219,55,0.25)]">
            <LogIn className="w-4 h-4 text-amber-400" />
            <span>MASUK</span>
          </div>
        </button>

        {/* DAFTAR Button */}
        <button
          onClick={onRegisterClick}
          aria-label="Daftar Akun Utama"
          data-testid="auth-bar-daftar"
          className="relative group overflow-hidden rounded-md p-[2px] shimmer-button transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <div className="absolute inset-0 bg-gold-radial rounded-md" />
          <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-extrabold text-sm tracking-wider py-2 px-4 rounded-[4px] shadow-[0_0_15px_rgba(254,219,55,0.4)]">
            <UserPlus className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
            <span>DAFTAR</span>
          </div>
        </button>
      </div>
    </div>
  );
};
