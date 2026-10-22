import React, { useState } from 'react';
import {
  X,
  User,
  Lock,
  BookOpen,
  Monitor,
  Headphones,
  Sparkles,
  BarChart2,
  Gift,
  LogIn,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenBukuMimpi: () => void;
  onOpenRtp: () => void;
  onOpenPromo: () => void;
  onOpenSupport: () => void;
  onLoginSubmit: (u: string, p: string) => void;
  currentUser: { username: string; balance: number } | null;
  onLogout: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  onOpenRegister,
  onOpenBukuMimpi,
  onOpenRtp,
  onOpenPromo,
  onOpenSupport,
  onLoginSubmit,
  currentUser,
  onLogout,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Mohon masukkan Username dan Password');
      return;
    }
    setErrorMsg('');
    onLoginSubmit(username, password);
    onClose();
  };

  return (
    <>
      {/* Dimmed Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 transition-opacity"
        />
      )}

      {/* Drawer Container */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#1A181C] border-l border-neutral-800 z-50 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none invisible'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-[#151316]">
          <div className="flex items-center gap-2">
            <span className="font-teko text-xl font-bold text-gold-gradient tracking-wider">
              MENU UTAMA
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          {/* User Account / Quick Auth Section */}
          {currentUser ? (
            <div className="bg-[#242126] border border-amber-500/40 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    {currentUser.username.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-100">{currentUser.username}</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Akun Aktif</div>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="text-xs text-red-400 hover:text-red-300 font-semibold px-2 py-1 rounded bg-red-950/40 border border-red-800/40"
                >
                  Keluar
                </button>
              </div>

              <div className="pt-2 border-t border-neutral-700/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Saldo:</span>
                <span className="font-digital font-bold text-amber-300 text-sm">
                  Rp {currentUser.balance.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#221f24] border border-neutral-800 rounded-xl p-3.5 shadow-inner">
              <div className="text-xs font-bold text-neutral-200 mb-2.5 flex items-center gap-1.5">
                <LogIn className="w-4 h-4 text-amber-400" />
                <span>Masuk Akun Cepat</span>
              </div>

              <form onSubmit={handleQuickLogin} className="space-y-2.5">
                {errorMsg && (
                  <div className="text-[11px] text-red-400 bg-red-950/50 p-1.5 rounded border border-red-800/50">
                    {errorMsg}
                  </div>
                )}

                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="relative">
                  <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="submit"
                    className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-amber-400 font-bold text-xs border border-amber-500/40 transition-colors"
                  >
                    MASUK
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenRegister();
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-gold-radial text-black font-extrabold text-xs shadow-md transition-transform active:scale-95"
                  >
                    DAFTAR
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Quick Menu Nav List */}
          <div className="space-y-1">
            <button
              onClick={() => {
                onClose();
                onOpenBukuMimpi();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 text-left transition-colors text-neutral-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-neutral-100">Buku Mimpi 2D/3D/4D</div>
                  <div className="text-[10px] text-neutral-400">Tafsir nomor keberuntungan</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                Lengkap
              </span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenRtp();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 text-left transition-colors text-neutral-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-neutral-100">RTP Slot Live</div>
                  <div className="text-[10px] text-neutral-400">Persentase & bocoran pola gacor</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                Live
              </span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPromo();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 text-left transition-colors text-neutral-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-neutral-100">Promosi & Bonus</div>
                  <div className="text-[10px] text-neutral-400">Klaim bonus deposit & rebate</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                Update
              </span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenSupport();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 text-left transition-colors text-neutral-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-neutral-100">Layanan Pelanggan 24/7</div>
                  <div className="text-[10px] text-neutral-400">Live chat & WhatsApp resmi</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-neutral-800 bg-[#151316] text-[11px] text-neutral-400 text-center">
          <div className="flex items-center justify-center gap-1.5 text-neutral-300 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Versi Mobile Responsive 3.5</span>
          </div>
          <p className="text-[10px] text-neutral-500">
            Aman, Cepat & Terenkripsi SSL 256-Bit
          </p>
        </div>
      </aside>
    </>
  );
};
