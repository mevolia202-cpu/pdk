import React, { useState, useEffect } from 'react';
import { X, Bell, ShieldCheck, Check } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (dontShowAgain) {
      try {
        localStorage.setItem('oriontoto_dismiss_welcome', 'true');
      } catch (err) {
        // Ignore localStorage error
      }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-[#1C1A1E] border border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col text-center animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Pengumuman"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-2.5">
          <Bell className="w-6 h-6 animate-pulse" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg text-gold-gradient tracking-wide mb-1">
          PENGUMUMAN RESMI ORIONTOTO
        </h3>

        {/* Content */}
        <div className="bg-[#242126] border border-neutral-800 rounded-xl p-3 my-2 text-xs text-neutral-300 space-y-2 text-left leading-relaxed">
          <p>
            Selamat datang di <strong>ORIONTOTO</strong>, pelopor platform togel 3Prize terpercaya & portal game online terlengkap di Indonesia.
          </p>
          <div className="p-2 rounded bg-neutral-900 border border-neutral-700/60 text-[11px] text-amber-300">
            ★ Minimal Deposit: <strong>Rp 10.000</strong><br />
            ★ Minimal Withdraw: <strong>Rp 25.000</strong><br />
            ★ Transaksi QRIS Instant Scan 1 Detik Bebas Potongan!
          </div>
          <p className="text-[11px] text-neutral-400">
            Waspadalah terhadap pihak yang mengatasnamakan ORIONTOTO selain nomor WhatsApp dan live chat resmi di halaman ini.
          </p>
        </div>

        {/* Dont show again checkbox */}
        <label className="flex items-center justify-center gap-2 text-xs text-neutral-400 my-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
            className="rounded border-neutral-700 text-amber-500 focus:ring-amber-400"
          />
          <span>Jangan tampilkan lagi sesi ini</span>
        </label>

        {/* Action Button */}
        <button
          onClick={handleClose}
          className="w-full py-2.5 rounded-xl bg-gold-radial text-black font-extrabold text-xs tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all"
        >
          SAYA MENGERTI & LANJUTKAN
        </button>
      </div>
    </div>
  );
};
