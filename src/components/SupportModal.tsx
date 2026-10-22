import React from 'react';
import { X, Headphones, PhoneCall, Send, MessageSquare, ShieldCheck } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Layanan Bantuan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2">
            <Headphones className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-white tracking-wide">
            Pusat Layanan Pelanggan 24/7
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Customer service profesional siap melayani pertanyaan & kendala Anda setiap saat
          </p>
        </div>

        {/* Support Channels */}
        <div className="space-y-2.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Oriontoto%20saya%20butuh%20bantuan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#14291c] to-[#1a3826] hover:from-[#1b3d28] hover:to-[#234c34] border border-green-600/40 text-neutral-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs">WhatsApp Official 1</div>
                <div className="text-[10px] text-green-300">Respon cepat ± 30 detik</div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
              Online
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/oriontoto_official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#132538] to-[#19324d] hover:from-[#1b3957] hover:to-[#224467] border border-blue-500/40 text-neutral-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs">Telegram Resmi</div>
                <div className="text-[10px] text-blue-300">@oriontoto_official</div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">
              Online
            </span>
          </a>

          {/* Live Chat */}
          <button
            onClick={() => {
              alert('Menghubungkan ke Operator Live Chat Oriontoto...');
              onClose();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#2a2113] to-[#3a2e1a] hover:from-[#362a18] hover:to-[#45371f] border border-amber-500/40 text-neutral-100 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-amber-200">Live Chat Web 24 Jam</div>
                <div className="text-[10px] text-amber-300/80">Langsung di halaman peramban</div>
              </div>
            </div>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800/40">
              Aktif
            </span>
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-[10px] text-neutral-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Pastikan Anda hanya menghubungi kontak resmi terdaftar</span>
        </div>
      </div>
    </div>
  );
};
