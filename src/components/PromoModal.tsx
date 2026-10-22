import React, { useState } from 'react';
import { X, Gift, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { PROMOTIONS_DATA, PromoItem } from '../data/portalData';
import { formatCurrency } from '../utils/lottery';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimPromo: (promo: PromoItem) => void;
}

export const PromoModal: React.FC<PromoModalProps> = ({
  isOpen,
  onClose,
  onClaimPromo,
}) => {
  const [claimedId, setClaimedId] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleClaim = (promo: PromoItem) => {
    setClaimedId(promo.id);
    onClaimPromo(promo);
    setTimeout(() => {
      setClaimedId(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Promo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-4 pr-8">
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white tracking-wide flex items-center gap-2">
              <span>PROMOSI & BONUS SPESIAL</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-semibold">
                TERBAIK
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Klaim bonus deposit, rollingan mingguan, dan hadiah 3Prize
            </p>
          </div>
        </div>

        {/* Promos List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {PROMOTIONS_DATA.map((promo) => (
            <div
              key={promo.id}
              className="bg-[#242126] border border-neutral-800 hover:border-amber-500/40 rounded-xl p-3.5 flex flex-col justify-between gap-3 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-300">{promo.title}</span>
                  <span className="text-[10px] font-bold bg-amber-500 text-black px-2 py-0.5 rounded-full shrink-0">
                    {promo.badge}
                  </span>
                </div>
                <div className="text-sm font-extrabold text-gold-gradient mb-1">
                  {promo.bonus}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {promo.description}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  Min. Depo: <span className="font-semibold text-neutral-200">Rp {formatCurrency(promo.minDepo)}</span>
                </span>

                <button
                  onClick={() => handleClaim(promo)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    claimedId === promo.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gold-radial text-black hover:brightness-105 active:scale-95'
                  }`}
                >
                  {claimedId === promo.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Berhasil Diklaim!</span>
                    </>
                  ) : (
                    <>
                      <span>Klaim Bonus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
