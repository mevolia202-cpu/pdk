import React, { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  MessageCircle,
  ReceiptText,
  PhoneCall,
  Download,
  Flame,
} from 'lucide-react';

interface CircularFabMenuProps {
  onOpenLuckyWheel: () => void;
  onOpenPaymentProof: () => void;
  onOpenLiveChat: () => void;
  onDownloadApk: () => void;
}

export const CircularFabMenu: React.FC<CircularFabMenuProps> = ({
  onOpenLuckyWheel,
  onOpenPaymentProof,
  onOpenLiveChat,
  onDownloadApk,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Dimmed backdrop when circular menu is expanded */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Circular Menu Container */}
      <div className="fixed bottom-20 left-4 z-50 flex items-center justify-center">
        {/* Child Action Buttons in Radial / Vertical Stack */}
        <div
          className={`absolute bottom-0 left-0 transition-all duration-300 z-50 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'
          }`}
        >
          {/* Action 1: Lucky Wheel */}
          <div
            className={`absolute transition-all duration-300 flex items-center gap-2 pointer-events-auto ${
              isOpen ? '-translate-y-64 translate-x-2' : 'translate-x-0 translate-y-0'
            }`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLuckyWheel();
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-300 text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border-2 border-amber-200"
              title="Lucky Spin Berhadiah"
              aria-label="Lucky Spin Berhadiah"
            >
              <Sparkles className="w-6 h-6 animate-spin" />
            </button>
            <span className="bg-black/90 text-amber-300 text-xs font-bold px-2 py-1 rounded shadow-md border border-amber-500/40 whitespace-nowrap">
              Lucky Spin
            </span>
          </div>

          {/* Action 2: Live Chat 24 Jam */}
          <div
            className={`absolute transition-all duration-300 flex items-center gap-2 pointer-events-auto ${
              isOpen ? '-translate-y-52 translate-x-12' : 'translate-x-0 translate-y-0'
            }`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLiveChat();
              }}
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border-2 border-blue-300"
              title="Live Chat 24 Jam"
              aria-label="Live Chat 24 Jam"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <span className="bg-black/90 text-blue-300 text-xs font-bold px-2 py-1 rounded shadow-md border border-blue-500/40 whitespace-nowrap">
              Live Chat 24/7
            </span>
          </div>

          {/* Action 3: Data Pembayaran / Bukti WD */}
          <div
            className={`absolute transition-all duration-300 flex items-center gap-2 pointer-events-auto ${
              isOpen ? '-translate-y-38 translate-x-20' : 'translate-x-0 translate-y-0'
            }`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPaymentProof();
              }}
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border-2 border-emerald-300"
              title="Bukti Pembayaran / WD"
              aria-label="Bukti Pembayaran / WD"
            >
              <ReceiptText className="w-5 h-5" />
            </button>
            <span className="bg-black/90 text-emerald-300 text-xs font-bold px-2 py-1 rounded shadow-md border border-emerald-500/40 whitespace-nowrap">
              Bukti WD
            </span>
          </div>

          {/* Action 4: WhatsApp Official */}
          <div
            className={`absolute transition-all duration-300 flex items-center gap-2 pointer-events-auto ${
              isOpen ? '-translate-y-24 translate-x-24' : 'translate-x-0 translate-y-0'
            }`}
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Oriontoto%20saya%20butuh%20bantuan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border-2 border-green-300"
              title="Hubungi WhatsApp"
              aria-label="Hubungi WhatsApp"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <span className="bg-black/90 text-green-300 text-xs font-bold px-2 py-1 rounded shadow-md border border-green-500/40 whitespace-nowrap">
              WhatsApp CS
            </span>
          </div>

          {/* Action 5: Unduh APK */}
          <div
            className={`absolute transition-all duration-300 flex items-center gap-2 pointer-events-auto ${
              isOpen ? '-translate-y-10 translate-x-24' : 'translate-x-0 translate-y-0'
            }`}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                onDownloadApk();
              }}
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border-2 border-amber-300"
              title="Unduh APK Android"
              aria-label="Unduh APK Android"
            >
              <Download className="w-5 h-5" />
            </button>
            <span className="bg-black/90 text-amber-300 text-xs font-bold px-2 py-1 rounded shadow-md border border-amber-500/40 whitespace-nowrap">
              Unduh APK
            </span>
          </div>
        </div>

        {/* Central Floating Action Trigger Button */}
        <button
          onClick={toggleOpen}
          className={`w-13 h-13 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all duration-300 border-2 active:scale-95 ${
            isOpen
              ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white border-red-400 rotate-90 scale-105'
              : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white border-blue-300 hover:scale-105 shadow-[0_0_15px_rgba(78,99,250,0.5)]'
          }`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Tutup menu pintas' : 'Buka menu pintas'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};
