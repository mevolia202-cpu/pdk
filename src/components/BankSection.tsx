import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { BANK_PARTNERS } from '../data/portalData';

export const BankSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'bank' | 'ewallet' | 'qris'>('all');

  const filteredBanks = BANK_PARTNERS.filter((b) => {
    if (filterType === 'all') return true;
    return b.type === filterType;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-6">
      <div className="bg-[#1C1A1E] border border-neutral-800 rounded-2xl p-4 shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-neutral-100 flex items-center gap-2">
                <span>METODE PEMBAYARAN & DEPOSIT</span>
                <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE 24/7
                </span>
              </h3>
              <p className="text-xs text-neutral-400">
                Didukung oleh perbankan nasional, e-wallet, dan QRIS instant scan otomatis.
              </p>
            </div>
          </div>

          {/* Quick Filter */}
          <div className="flex items-center gap-1.5 text-xs self-start sm:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilterType('bank')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'bank'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              Bank
            </button>
            <button
              onClick={() => setFilterType('ewallet')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'ewallet'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              E-Wallet
            </button>
            <button
              onClick={() => setFilterType('qris')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterType === 'qris'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              QRIS
            </button>
          </div>
        </div>

        {/* Bank Badges Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
          {filteredBanks.map((bank) => (
            <div
              key={bank.id}
              className="group relative bg-[#242126] hover:bg-[#2e2a31] border border-neutral-700/60 hover:border-amber-400/60 rounded-xl p-2.5 flex flex-col items-center justify-center transition-all duration-200"
            >
              <div className="w-full h-8 flex items-center justify-center mb-1.5 overflow-hidden">
                <img
                  src={bank.image}
                  alt={bank.name}
                  className="max-h-7 max-w-[85%] object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-bank-text')) {
                      const textSpan = document.createElement('span');
                      textSpan.className = 'fallback-bank-text text-amber-300 font-bold text-xs truncate';
                      textSpan.innerText = bank.name;
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              </div>

              <div className="flex items-center gap-1 text-[10px] text-neutral-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="truncate">{bank.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transaction Guarantee Bar */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Proses Deposit Rata-rata: ± 1 Menit</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Proses Withdraw: ± 3 Menit (100% Bebas Potongan)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
