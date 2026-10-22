import React, { useState } from 'react';
import { X, User, Lock, Mail, Phone, CreditCard, UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BANK_PARTNERS } from '../data/portalData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (username: string) => void;
  onSwitchToLogin: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onRegisterSuccess,
  onSwitchToLogin,
}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    whatsapp: '',
    bankName: 'BCA',
    accountName: '',
    accountNumber: '',
  });

  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username.trim() || formData.username.length < 4) {
      setError('Username minimal 4 karakter');
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Konfirmasi password tidak cocok');
      return;
    }
    if (!formData.whatsapp.trim()) {
      setError('Nomor WhatsApp wajib diisi');
      return;
    }
    if (!formData.accountName.trim()) {
      setError('Nama pemilik rekening wajib diisi');
      return;
    }
    if (!formData.accountNumber.trim()) {
      setError('Nomor rekening/e-wallet wajib diisi');
      return;
    }

    setError('');
    onRegisterSuccess(formData.username.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-md my-auto bg-[#1C1A1E] border border-neutral-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Tutup Form Pendaftaran"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-2">
            <UserPlus className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-white tracking-wide">
            Daftar Akun Baru
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Daftar sekarang & dapatkan Bonus Member Baru 100%
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-3 p-2.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 max-h-[65vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Username <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="4-12 Karakter (Huruf & Angka)"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 6 karakter"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Ulangi Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Konfirmasi password"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                WhatsApp / HP <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="0812xxxx"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@anda.com"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Bank Selection */}
          <div className="pt-1 border-t border-neutral-800">
            <label className="block text-xs font-medium text-amber-300 mb-1">
              Pilih Bank / E-Wallet Pembayaran <span className="text-red-400">*</span>
            </label>
            <select
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              {BANK_PARTNERS.map((bank) => (
                <option key={bank.id} value={bank.name}>
                  {bank.name} ({bank.type.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Nama Rekening <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                placeholder="Nama Sesuai Buku Tabungan"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Nomor Rekening <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Contoh: 1234567890"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gold-radial text-black font-extrabold text-xs tracking-wider shadow-lg hover:brightness-105 active:scale-98 transition-all"
            >
              SELESAIKAN PENDAFTARAN
            </button>
          </div>
        </form>

        {/* Switch to Login */}
        <div className="mt-3 text-center text-xs text-neutral-400 pt-2 border-t border-neutral-800">
          Sudah memiliki akun?{' '}
          <button
            type="button"
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
            className="text-amber-400 hover:text-amber-300 font-bold underline ml-1"
          >
            Masuk Di Sini
          </button>
        </div>
      </div>
    </div>
  );
};
