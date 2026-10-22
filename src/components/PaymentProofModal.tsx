import React from 'react';
import { X, ReceiptText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../utils/lottery';

interface PaymentProofModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RECENT_PAYOUTS = [
  { id: 1, user: 'budi***88', bank: 'BCA', amount: 8450000, game: 'Togel SGP Prize 1', time: '5 menit yang lalu' },
  { id: 2, user: 'slot***gacor', bank: 'DANA', amount: 3200000, game: 'Gates of Olympus', time: '11 menit yang lalu' },
  { id: 3, user: 'hoki***99', bank: 'BRI', amount: 15800000, game: 'Togel HK 4D', time: '18 menit yang lalu' },
  { id: 4, user: 'dewa***77', bank: 'Mandiri', amount: 4100000, game: 'Mahjong Ways 2', time: '24 menit yang lalu' },
  { id: 5, user: 'sultan***01', bank: 'QRIS', amount: 1950000, game: 'Live Casino Baccarat', time: '35 menit yang lalu' },
  { id: 6, user: 'orion***win', bank: 'BNI', amount: 27500000, game: 'Togel SDY Prize 1', time: '42 menit yang lalu' },
  { id: 7, user: 'cuan***max', bank: 'SeaBank', amount: 6400000, game: 'Starlight Princess', time: '50 menit yang lalu' },
];

export const PaymentProofModal: React.FC<PaymentProofModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Bukti Pembayaran"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-3 pr-8">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <ReceiptText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white tracking-wide flex items-center gap-2">
              <span>BUKTI PEMBAYARAN MEMBER</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.2 rounded font-semibold">
                100% LUNAS
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Riwayat penarikan dana (withdraw) terverifikasi hari ini
            </p>
          </div>
        </div>

        {/* List of recent payouts */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {RECENT_PAYOUTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#242126] border border-neutral-800 rounded-xl p-3 flex items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-neutral-200">{item.user}</span>
                  <span className="text-[10px] bg-neutral-800 text-amber-400 font-semibold px-1.5 py-0.2 rounded">
                    {item.bank}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Game: <span className="text-neutral-300 font-medium">{item.game}</span> • {item.time}
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-digital text-sm font-bold text-emerald-400">
                  Rp {formatCurrency(item.amount)}
                </div>
                <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Transfer Sukses</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="pt-3 border-t border-neutral-800 mt-2 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Berapapun kemenangan Anda kami bayar tunai lunas tanpa berbelit-belit</span>
        </div>
      </div>
    </div>
  );
};
