import React, { useState } from 'react';
import { X, User, Lock, LogIn, Sparkles, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
  onSwitchToRegister: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSwitchToRegister,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Username wajib diisi');
      return;
    }
    if (!password.trim()) {
      setError('Password wajib diisi');
      return;
    }

    setError('');
    onLoginSuccess(username.trim());
    onClose();
  };

  const handleDemoLogin = () => {
    onLoginSuccess('MemberOrionVip');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Form Masuk"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-2">
            <LogIn className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white tracking-wide">
            Masuk ke Akun Anda
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Gunakan ID akun ORIONTOTO terdaftar
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-3.5 p-2.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Username / ID Pengguna
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Kata Sandi (Password)
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gold-radial text-black font-extrabold text-xs tracking-wider shadow-lg hover:brightness-105 active:scale-98 transition-all"
            >
              MASUK SEKARANG
            </button>
          </div>
        </form>

        {/* Demo Fast Login */}
        <div className="mt-3 pt-3 border-t border-neutral-800 text-center">
          <button
            onClick={handleDemoLogin}
            type="button"
            className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Coba Akun Demo (Instant Login)</span>
          </button>
        </div>

        {/* Switch to Register */}
        <div className="mt-4 text-center text-xs text-neutral-400">
          Belum memiliki akun?{' '}
          <button
            type="button"
            onClick={() => {
              onClose();
              onSwitchToRegister();
            }}
            className="text-amber-400 hover:text-amber-300 font-bold underline ml-1"
          >
            Daftar Gratis
          </button>
        </div>
      </div>
    </div>
  );
};
