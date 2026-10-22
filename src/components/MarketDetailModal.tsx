import React, { useState } from 'react';
import { X, Award, Clock, Dices, CheckCircle2, AlertCircle } from 'lucide-react';
import { LotteryMarket } from '../data/portalData';
import { calculatePrizeWinnings, formatCurrency } from '../utils/lottery';

interface MarketDetailModalProps {
  market: LotteryMarket | null;
  onClose: () => void;
  currentUser: { username: string; balance: number } | null;
  onPlaceBet: (marketName: string, numbers: string, betAmount: number, gameType: '4D' | '3D' | '2D') => boolean;
}

export const MarketDetailModal: React.FC<MarketDetailModalProps> = ({
  market,
  onClose,
  currentUser,
  onPlaceBet,
}) => {
  const [betNumber, setBetNumber] = useState('');
  const [betAmount, setBetAmount] = useState(1000);
  const [betType, setBetType] = useState<'4D' | '3D' | '2D'>('4D');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!market) return null;

  const handleQuickPick = () => {
    let digits = '';
    const length = betType === '4D' ? 4 : betType === '3D' ? 3 : 2;
    for (let i = 0; i < length; i++) {
      digits += Math.floor(Math.random() * 10).toString();
    }
    setBetNumber(digits);
  };

  const handleBetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredLength = betType === '4D' ? 4 : betType === '3D' ? 3 : 2;
    const cleaned = betNumber.replace(/\D/g, '');

    if (cleaned.length !== requiredLength) {
      setStatusMessage({
        type: 'error',
        text: `Nomor ${betType} harus berisi tepat ${requiredLength} digit angka!`,
      });
      return;
    }

    if (!currentUser) {
      setStatusMessage({
        type: 'error',
        text: 'Silakan masuk ke akun Anda terlebih dahulu untuk memasang taruhan.',
      });
      return;
    }

    if (betAmount > currentUser.balance) {
      setStatusMessage({
        type: 'error',
        text: 'Saldo tidak mencukupi untuk memasang taruhan ini.',
      });
      return;
    }

    const ok = onPlaceBet(market.name, cleaned, betAmount, betType);
    if (ok) {
      setStatusMessage({
        type: 'success',
        text: `Berhasil memasang taruhan ${betType} nomor ${cleaned} sebesar Rp ${formatCurrency(betAmount)}!`,
      });
      setBetNumber('');
    }
  };

  const potentialPrize1 = calculatePrizeWinnings(betAmount, betType, 1);
  const potentialPrize2 = calculatePrizeWinnings(betAmount, betType, 2);
  const potentialPrize3 = calculatePrizeWinnings(betAmount, betType, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Detail Pasaran"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 pr-8">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-base sm:text-lg text-gold-gradient">
              {market.name}
            </h3>
            {market.is3Prize && (
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                3 PRIZE
              </span>
            )}
          </div>
          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span>{market.dateDesc}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Clock className="w-3 h-3" /> Tutup: {market.timeOff} | Buka: {market.timeOn}
            </span>
          </div>
        </div>

        {/* Live Draw Ball Results */}
        <div className="bg-[#242126] border border-neutral-800 rounded-xl p-3 mb-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400">Prize 1 Live Result:</span>
            <div className="flex items-center gap-1.5">
              {market.prize1.map((digit, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-lg bg-neutral-900 border border-amber-500/80 text-amber-300 font-digital font-bold text-sm flex items-center justify-center shadow"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>

          {market.is3Prize && market.prize2 && market.prize3 && (
            <>
              <div className="flex items-center justify-between pt-1 border-t border-neutral-800">
                <span className="text-xs text-neutral-300 font-medium">Prize 2:</span>
                <div className="flex items-center gap-1">
                  {market.prize2.map((digit, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 font-digital text-xs flex items-center justify-center"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-medium">Prize 3:</span>
                <div className="flex items-center gap-1">
                  {market.prize3.map((digit, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 font-digital text-xs flex items-center justify-center"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Interactive Bet Slip / Simulator */}
        <div className="bg-[#221f25] border border-neutral-800 rounded-xl p-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-200">Kalkulator & Form Taruhan</span>
            {/* Bet Type Picker */}
            <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-[11px]">
              {(['4D', '3D', '2D'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setBetType(t);
                    setBetNumber('');
                  }}
                  className={`px-2 py-0.5 rounded font-bold transition-colors ${
                    betType === t
                      ? 'bg-amber-500 text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {statusMessage && (
            <div
              className={`p-2 rounded-lg text-xs flex items-center gap-1.5 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-950/70 border border-emerald-700 text-emerald-300'
                  : 'bg-red-950/70 border border-red-700 text-red-300'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleBetSubmit} className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-300 mb-1">
                <span>Nomor {betType}</span>
                <button
                  type="button"
                  onClick={handleQuickPick}
                  className="text-amber-400 hover:text-amber-300 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Dices className="w-3.5 h-3.5" /> Acak Cepat
                </button>
              </div>
              <input
                type="text"
                maxLength={betType === '4D' ? 4 : betType === '3D' ? 3 : 2}
                value={betNumber}
                onChange={(e) => setBetNumber(e.target.value.replace(/\D/g, ''))}
                placeholder={`Contoh: ${betType === '4D' ? '4892' : betType === '3D' ? '892' : '92'}`}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-center font-digital text-base tracking-widest text-amber-300 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-neutral-300 mb-1">
                <span>Nominal Taruhan (IDR)</span>
                <span className="text-[11px] text-neutral-500">Min. Rp 1.000</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-1.5 text-xs">
                {[1000, 5000, 10000, 25000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setBetAmount(amt)}
                    className={`py-1 rounded border text-[11px] font-medium transition-colors ${
                      betAmount === amt
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {amt >= 1000 ? `${amt / 1000}rb` : amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                min={1000}
                step={500}
                value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Payout Calculation Preview */}
            <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 space-y-1 text-xs">
              <div className="text-[10px] text-neutral-400 uppercase font-semibold mb-1">
                Simulasi Kemenangan ({betType}):
              </div>
              <div className="flex items-center justify-between text-amber-300">
                <span>Prize 1:</span>
                <span className="font-bold">Rp {formatCurrency(potentialPrize1)}</span>
              </div>
              {market.is3Prize && (
                <>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Prize 2:</span>
                    <span className="font-semibold">Rp {formatCurrency(potentialPrize2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Prize 3:</span>
                    <span className="font-semibold">Rp {formatCurrency(potentialPrize3)}</span>
                  </div>
                </>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gold-radial text-black font-extrabold text-xs tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all"
            >
              PASANG TARUHAN SEKARANG
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
