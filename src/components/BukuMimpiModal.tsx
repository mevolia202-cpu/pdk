import React, { useState } from 'react';
import { X, Search, BookOpen, Copy, Check, Sparkles } from 'lucide-react';
import { DREAM_BOOK_DATA } from '../data/portalData';
import { searchDreamBook } from '../utils/lottery';

interface BukuMimpiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBetNumber?: (num: string) => void;
}

export const BukuMimpiModal: React.FC<BukuMimpiModalProps> = ({
  isOpen,
  onClose,
  onBetNumber,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const results = searchDreamBook(searchTerm, DREAM_BOOK_DATA);

  const handleCopy = (idStr: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(idStr);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Buku Mimpi"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-4 pr-8">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white tracking-wide flex items-center gap-2">
              <span>BUKU TAFSIR MIMPI RESMI</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-semibold">
                2D • 3D • 4D
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Cari arti mimpi & konversi ke nomor keberuntungan togel
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mb-3.5">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari kejadian mimpi (contoh: ular, kucing, uang, mobil, emas)..."
            className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* List of Results */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {results.length === 0 ? (
            <div className="text-center py-8 text-neutral-400 text-xs">
              Tidak ditemukan data mimpi untuk kata kunci "{searchTerm}". Coba kata kunci lainnya.
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="bg-[#242126] border border-neutral-800 rounded-xl p-3 hover:border-amber-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-neutral-100">
                      {item.keyword}
                    </span>
                    {item.category && (
                      <span className="text-[9px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Numbers 2D, 3D, 4D Badges */}
                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  {/* 2D */}
                  <button
                    onClick={() => handleCopy(`2d-${item.id}`, item.code2D)}
                    className="flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 px-2 py-1 rounded text-xs text-amber-300 font-digital"
                    title="Klik untuk salin nomor 2D"
                  >
                    <span className="text-[9px] text-neutral-500">2D:</span>
                    <span className="font-bold">{item.code2D}</span>
                    {copiedId === `2d-${item.id}` ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-neutral-400 opacity-60" />
                    )}
                  </button>

                  {/* 3D */}
                  <button
                    onClick={() => handleCopy(`3d-${item.id}`, item.code3D)}
                    className="flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 px-2 py-1 rounded text-xs text-amber-300 font-digital"
                    title="Klik untuk salin nomor 3D"
                  >
                    <span className="text-[9px] text-neutral-500">3D:</span>
                    <span className="font-bold">{item.code3D}</span>
                    {copiedId === `3d-${item.id}` ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-neutral-400 opacity-60" />
                    )}
                  </button>

                  {/* 4D */}
                  <button
                    onClick={() => handleCopy(`4d-${item.id}`, item.code4D)}
                    className="flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 border border-amber-500/50 px-2 py-1 rounded text-xs text-amber-400 font-digital font-bold shadow-xs"
                    title="Klik untuk salin nomor 4D"
                  >
                    <span className="text-[9px] text-amber-500/70">4D:</span>
                    <span>{item.code4D}</span>
                    {copiedId === `4d-${item.id}` ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-neutral-400 opacity-60" />
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-neutral-800 mt-2 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Klik pada kotak angka untuk menyalin nomor taruhan secara instan</span>
        </div>
      </div>
    </div>
  );
};
