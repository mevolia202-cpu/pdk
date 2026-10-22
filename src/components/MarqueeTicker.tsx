import React from 'react';
import { Volume2 } from 'lucide-react';

interface MarqueeTickerProps {
  message?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  message = 'Selamat Datang Di Oriontoto: Website Penyedia Konsep Togel 3Prize Terpercaya di Indonesia. Minimal Deposit Rp 10.000 | Proses Transaksi Instan via QRIS, Bank & E-Wallet 24 Jam Nonstop!',
}) => {
  return (
    <div className="w-full bg-[#201E21] border-b border-neutral-800/80 py-2 px-3 flex items-center gap-2 overflow-hidden shadow-inner">
      <div className="flex items-center gap-1.5 shrink-0 bg-neutral-900 px-2 py-0.5 rounded text-amber-400 border border-neutral-700">
        <Volume2 className="w-4 h-4 animate-pulse text-amber-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 hidden xs:inline">
          Info
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee hover:[animation-play-state:paused] text-xs text-neutral-200 font-medium">
          <span className="mr-8">{message}</span>
          <span className="mr-8">★ ★ ★ {message}</span>
        </div>
      </div>
    </div>
  );
};
