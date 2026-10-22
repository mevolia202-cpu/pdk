import React, { useState } from 'react';
import { X, BarChart3, Clock, Sparkles, Filter, Play } from 'lucide-react';
import { RTP_SLOT_GAMES, RtpGame } from '../data/portalData';

interface RtpLiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayGame?: (game: RtpGame) => void;
}

export const RtpLiveModal: React.FC<RtpLiveModalProps> = ({
  isOpen,
  onClose,
  onPlayGame,
}) => {
  const [selectedProvider, setSelectedProvider] = useState<string>('all');

  if (!isOpen) return null;

  const providers = ['all', 'Pragmatic Play', 'PG Soft', 'Habanero'];

  const filteredGames = RTP_SLOT_GAMES.filter((game) => {
    if (selectedProvider === 'all') return true;
    return game.provider === selectedProvider;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup RTP Live"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-3 pr-8">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white tracking-wide flex items-center gap-2">
              <span>RTP SLOT LIVE & BOCORAN POLA</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.2 rounded font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                REAL-TIME
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Update winrate terakurat & jam gacor rekomendasi hari ini
            </p>
          </div>
        </div>

        {/* Provider Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-2 border-b border-neutral-800">
          {providers.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedProvider(p)}
              className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                selectedProvider === p
                  ? 'bg-amber-500 text-black'
                  : 'bg-neutral-800/80 text-neutral-400 hover:text-white'
              }`}
            >
              {p === 'all' ? 'Semua Provider' : p}
            </button>
          ))}
        </div>

        {/* Games List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredGames.map((game) => {
            const isHot = game.rtpPercent >= 97.5;
            return (
              <div
                key={game.id}
                className="bg-[#242126] border border-neutral-800 hover:border-amber-500/40 rounded-xl p-3 transition-colors flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-12 h-12 rounded-lg object-cover border border-neutral-700"
                    />
                    <div>
                      <div className="font-bold text-xs text-white">{game.title}</div>
                      <div className="text-[10px] text-amber-400 font-medium">
                        {game.provider}
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span>Jam: {game.jamGacor}</span>
                      </div>
                    </div>
                  </div>

                  {/* RTP Gauge Badge */}
                  <div className="text-right">
                    <div
                      className={`font-digital text-base font-extrabold ${
                        isHot ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-amber-400'
                      }`}
                    >
                      {game.rtpPercent.toFixed(1)}%
                    </div>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">
                      Vol: {game.volatility}
                    </span>
                  </div>
                </div>

                {/* RTP Progress Bar */}
                <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden border border-neutral-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isHot
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-300'
                        : 'bg-gradient-to-r from-amber-500 to-yellow-400'
                    }`}
                    style={{ width: `${Math.min(100, game.rtpPercent)}%` }}
                  />
                </div>

                {/* Pola Spin Recommendations */}
                <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-2 text-[10px] text-neutral-300">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Rekomendasi Pola Gacor:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {game.pola.map((step, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-800 border border-neutral-700/80 px-2 py-0.5 rounded text-neutral-200"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
