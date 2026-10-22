import React from 'react';
import { ShieldAlert, ShieldCheck, HeartHandshake } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#121013] border-t border-neutral-800/80 pt-8 pb-24 text-neutral-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 space-y-6 text-center sm:text-left">
        {/* Brand overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-neutral-800">
          <div className="md:col-span-2 space-y-2">
            <div className="font-extrabold text-base text-gold-gradient tracking-wider">
              ORIONTOTO OFFICIAL
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
              ORIONTOTO merupakan platform portal resmi penyedia pasaran togel 3Prize terpercaya dengan sistem keamanan mutakhir, integrasi provider game terlisensi internasional, serta transaksi deposit dan withdraw instan 24 jam.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-neutral-200">Sertifikasi & Lisensi</div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px]">
              <span className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-2 py-1 rounded">
                PAGCOR LICENSED
              </span>
              <span className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-2 py-1 rounded">
                BMM TESTLABS
              </span>
              <span className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-2 py-1 rounded">
                ITECH LABS
              </span>
            </div>
          </div>
        </div>

        {/* Responsible Gaming & Age Warning */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 font-black text-sm flex items-center justify-center shrink-0">
              18+
            </div>
            <div>
              <div className="font-bold text-neutral-200 text-xs flex items-center gap-1.5 justify-center sm:justify-start">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Peringatan Tanggung Jawab (Responsible Gaming)</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Layanan ini hanya diperuntukkan bagi pengguna berusia 18 tahun ke atas. Bermainlah secara bijak dan bertanggung jawab.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-neutral-400 shrink-0">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>24/7 Member Care</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-2 text-[11px] text-neutral-500 font-medium">
          © 2026 ORIONTOTO. All rights reserved. Server CloudFlare Protected & SSL Encrypted.
        </div>
      </div>
    </footer>
  );
};
