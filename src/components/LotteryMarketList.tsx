import React, { useState } from 'react';
import { Award, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { LOTTERY_MARKETS_DATA, LotteryMarket } from '../data/portalData';

interface LotteryMarketListProps {
  onSelectMarket: (market: LotteryMarket) => void;
}

export const LotteryMarketList: React.FC<LotteryMarketListProps> = ({ onSelectMarket }) => {
  const [filterType, setFilterType] = useState<'all' | '3prize' | 'standard'>('all');

  const filteredMarkets = LOTTERY_MARKETS_DATA.filter((m) => {
    if (filterType === '3prize') return m.is3Prize;
    if (filterType === 'standard') return !m.is3Prize;
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-3 my-4">
      {/* Category Section Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-neutral-950 via-neutral-900 to-[#1e1704] border-l-4 border-amber-400 py-2 px-3 rounded-t-lg mb-3 shadow">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-amber-400 font-bold text-sm sm:text-base tracking-wide flex items-center gap-1.5">
              <span>PASARAN TOGEL RESMI</span>
              <span className="text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/40">
                3 PRIZE
              </span>
            </h3>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 text-[11px]">
          <button
            onClick={() => setFilterType('all')}
            className={`px-2 py-0.5 rounded transition-colors ${
              filterType === 'all'
                ? 'bg-amber-500 text-black font-bold'
                : 'text-neutral-400 hover:text-white bg-neutral-800'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilterType('3prize')}
            className={`px-2 py-0.5 rounded transition-colors ${
              filterType === '3prize'
                ? 'bg-amber-500 text-black font-bold'
                : 'text-neutral-400 hover:text-white bg-neutral-800'
            }`}
          >
            3 Prize
          </button>
        </div>
      </div>

      {/* Markets Horizontal Scroll / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredMarkets.map((market) => (
          <div
            key={market.id}
            onClick={() => onSelectMarket(market)}
            className="group relative bg-[#1C1A1D] hover:bg-[#252227] border border-neutral-800 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between"
          >
            {/* Market Header */}
            <div className="bg-[#242125] p-3 border-b border-neutral-800/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-gold-gradient tracking-wide group-hover:brightness-110">
                  {market.name}
                </h4>
                <div className="text-[11px] text-neutral-400 font-medium">
                  {market.dayOffDesc}
                </div>
              </div>

              {market.is3Prize ? (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-sm">
                  3 PRIZE
                </span>
              ) : (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                  REGULER
                </span>
              )}
            </div>

            {/* Results Section */}
            <div className="p-3 bg-neutral-950/40">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
                <span className="font-semibold text-neutral-300">{market.dateDesc}</span>
                <span>{market.dateDesc2}</span>
              </div>

              {/* Prize 1 Numbers */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-amber-400">Prize 1</span>
                  <span className="text-[10px] text-neutral-500">Live Result</span>
                </div>
                <div className="flex items-center justify-end gap-1.5">
                  {market.prize1.map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-lg bg-neutral-900 border border-amber-500/70 text-amber-300 font-digital font-bold text-base flex items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),0_0_6px_rgba(254,219,55,0.2)]"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Prize 2 & Prize 3 if 3Prize format */}
              {market.is3Prize && market.prize2 && market.prize3 && (
                <div className="space-y-1.5 pt-1.5 border-t border-neutral-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400 font-medium">Prize 2</span>
                    <div className="flex items-center gap-1">
                      {market.prize2.map((num, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 font-digital text-xs flex items-center justify-center"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400 font-medium">Prize 3</span>
                    <div className="flex items-center gap-1">
                      {market.prize3.map((num, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 font-digital text-xs flex items-center justify-center"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Market Footer Timing & Action */}
            <div className="bg-[#181619] px-3 py-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
              <div className="flex items-center gap-1 text-[10px]">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Tutup: {market.timeOff} | Buka: {market.timeOn}</span>
              </div>
              <div className="flex items-center text-amber-400 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Pasang</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
