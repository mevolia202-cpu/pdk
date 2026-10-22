import React, { useState } from 'react';
import { X, Sparkles, Trophy, Award } from 'lucide-react';

interface LuckyWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRewardClaimed: (amount: number, label: string) => void;
}

const PRIZES = [
  { id: 1, label: 'Saldo Rp 25.000', value: 25000, color: '#F59E0B' },
  { id: 2, label: 'Free Spin 25x', value: 15000, color: '#3B82F6' },
  { id: 3, label: 'Saldo Rp 50.000', value: 50000, color: '#10B981' },
  { id: 4, label: 'Bonus Cashback 5%', value: 10000, color: '#8B5CF6' },
  { id: 5, label: 'Saldo Rp 100.000', value: 100000, color: '#EF4444' },
  { id: 6, label: 'Tiket Undian Emas', value: 5000, color: '#EC4899' },
  { id: 7, label: 'Free Bet Rp 20.000', value: 20000, color: '#06B6D4' },
  { id: 8, label: 'SUPER JACKPOT 250K', value: 250000, color: '#EAB308' },
];

export const LuckyWheelModal: React.FC<LuckyWheelModalProps> = ({
  isOpen,
  onClose,
  onRewardClaimed,
}) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<{ label: string; value: number } | null>(null);

  if (!isOpen) return null;

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonPrize(null);

    // Pick a random prize index
    const randomIndex = Math.floor(Math.random() * PRIZES.length);
    const chosenPrize = PRIZES[randomIndex];

    // Compute target angle
    const segmentAngle = 360 / PRIZES.length;
    // 5 full rotations + offset for the selected segment
    const fullSpins = 5 * 360;
    const prizeAngle = 360 - (randomIndex * segmentAngle + segmentAngle / 2);
    const totalRotation = rotation + fullSpins + (prizeAngle - (rotation % 360));

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(chosenPrize);
      onRewardClaimed(chosenPrize.value, chosenPrize.label);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-[#1C1A1E] border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Lucky Spin"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-1.5 text-amber-400 font-teko text-2xl font-bold tracking-wider">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>LUCKY SPIN HARIAN</span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-xs text-neutral-400">
            Putar roda keberuntungan dan klaim bonus hadiah instan!
          </p>
        </div>

        {/* The Wheel Container */}
        <div className="relative w-64 h-64 my-2 flex items-center justify-center">
          {/* Wheel Pointer Arrow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />

          {/* Rotating Wheel Disk */}
          <div
            className="w-full h-full rounded-full border-4 border-amber-400/80 shadow-[0_0_20px_rgba(254,219,55,0.4)] overflow-hidden relative transition-transform duration-[4000ms] ease-[cubic-bezier(0.15,0.9,0.25,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* SVG Wheel segments */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {PRIZES.map((prize, idx) => {
                const angle = 360 / PRIZES.length;
                const startAngle = (idx * angle * Math.PI) / 180;
                const endAngle = ((idx + 1) * angle * Math.PI) / 180;

                const x1 = 50 + 50 * Math.cos(startAngle);
                const y1 = 50 + 50 * Math.sin(startAngle);
                const x2 = 50 + 50 * Math.cos(endAngle);
                const y2 = 50 + 50 * Math.sin(endAngle);

                const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;

                const textAngle = idx * angle + angle / 2;
                const rad = (textAngle * Math.PI) / 180;
                const textX = 50 + 32 * Math.cos(rad);
                const textY = 50 + 32 * Math.sin(rad);

                return (
                  <g key={prize.id}>
                    <path
                      d={pathData}
                      fill={prize.color}
                      stroke="#1C1A1E"
                      strokeWidth="1"
                    />
                    <text
                      x={textX}
                      y={textY}
                      fill="#FFFFFF"
                      fontSize="4"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                    >
                      {prize.label.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Center Hub */}
          <div className="absolute inset-auto w-14 h-14 rounded-full bg-neutral-950 border-2 border-amber-400 flex items-center justify-center z-10 shadow-lg text-amber-300 font-black text-xs">
            <Trophy className="w-6 h-6 text-amber-400" />
          </div>
        </div>

        {/* Won Prize Banner */}
        {wonPrize && (
          <div className="w-full my-2 p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/60 text-center animate-bounce">
            <div className="text-[11px] text-amber-300 font-semibold">SELAMAT! ANDA MENDAPATKAN:</div>
            <div className="text-base font-extrabold text-amber-400">{wonPrize.label}</div>
            <div className="text-[10px] text-neutral-300">Saldo/Bonus telah otomatis ditambahkan ke akun</div>
          </div>
        )}

        {/* Spin Action Button */}
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`w-full py-3 mt-2 rounded-xl font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg ${
            isSpinning
              ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
              : 'bg-gold-radial text-black hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(254,219,55,0.4)]'
          }`}
        >
          {isSpinning ? 'SEDANG MEMUTAR...' : 'PUTAR RODA SEKARANG'}
        </button>
      </div>
    </div>
  );
};
