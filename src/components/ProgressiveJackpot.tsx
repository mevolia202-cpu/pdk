import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import { formatCurrency } from '../utils/lottery';

export const ProgressiveJackpot: React.FC = () => {
  // Base jackpot starting around ~1.28 Billion Rupiah
  const [jackpotAmount, setJackpotAmount] = useState<number>(1288492150);

  useEffect(() => {
    // Tick jackpot up periodically to simulate active player contributions
    const interval = setInterval(() => {
      setJackpotAmount((prev) => prev + Math.floor(Math.random() * 850) + 120);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-4">
      {/* Title */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <Flame className="w-5 h-5 text-amber-500 animate-bounce" />
        <h2 className="font-teko text-2xl sm:text-3xl font-extrabold tracking-widest text-gold-gradient uppercase drop-shadow">
          JACKPOT PROGRESIF
        </h2>
        <Flame className="w-5 h-5 text-amber-500 animate-bounce" />
      </div>

      {/* Jackpot Digital Billboard */}
      <div className="relative rounded-xl overflow-hidden border border-amber-500/40 shadow-[0_0_20px_rgba(254,219,55,0.2)] bg-gradient-to-r from-neutral-950 via-[#1e1503] to-neutral-950 p-3 sm:p-4 text-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-amber-500/10 blur-xl pointer-events-none" />

        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="font-digital text-amber-400 font-bold text-lg sm:text-2xl tracking-wider">
            IDR
          </span>
          <div className="font-digital text-2xl sm:text-3xl md:text-4xl font-black text-amber-300 tracking-widest drop-shadow-[0_0_12px_rgba(254,219,55,0.8)]">
            {formatCurrency(jackpotAmount)}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-amber-400/80 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Real-time Multi-Provider Accumulator</span>
        </div>
      </div>
    </div>
  );
};
