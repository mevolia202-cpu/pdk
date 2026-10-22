/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SideDrawer } from './components/SideDrawer';
import { BannerSlider } from './components/BannerSlider';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AuthBar } from './components/AuthBar';
import { GameCategoryNav } from './components/GameCategoryNav';
import { ProgressiveJackpot } from './components/ProgressiveJackpot';
import { LotteryMarketList } from './components/LotteryMarketList';
import { ProviderSection } from './components/ProviderSection';
import { BankSection } from './components/BankSection';
import { FooterSection } from './components/FooterSection';
import { BottomNav } from './components/BottomNav';
import { CircularFabMenu } from './components/CircularFabMenu';

// Interactive Modals
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { BukuMimpiModal } from './components/BukuMimpiModal';
import { RtpLiveModal } from './components/RtpLiveModal';
import { LuckyWheelModal } from './components/LuckyWheelModal';
import { MarketDetailModal } from './components/MarketDetailModal';
import { PaymentProofModal } from './components/PaymentProofModal';
import { SupportModal } from './components/SupportModal';
import { PromoModal } from './components/PromoModal';
import { WelcomeModal } from './components/WelcomeModal';

import { LotteryMarket, ProviderItem, PromoItem } from './data/portalData';

export default function App() {
  // Authentication & balance state
  const [currentUser, setCurrentUser] = useState<{ username: string; balance: number } | null>(null);

  // Tab & Category navigation
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isBukuMimpiOpen, setIsBukuMimpiOpen] = useState(false);
  const [isRtpOpen, setIsRtpOpen] = useState(false);
  const [isLuckyWheelOpen, setIsLuckyWheelOpen] = useState(false);
  const [isPaymentProofOpen, setIsPaymentProofOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<LotteryMarket | null>(null);

  // Quick Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Check welcome modal on mount
  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('oriontoto_dismiss_welcome');
      if (!dismissed) {
        setIsWelcomeOpen(true);
      }
    } catch {
      setIsWelcomeOpen(true);
    }
  }, []);

  // Login handler
  const handleLogin = (username: string) => {
    setCurrentUser({
      username,
      balance: 150000, // Initial demonstration active balance
    });
    showToast(`Selamat datang kembali, ${username}!`);
  };

  // Register handler
  const handleRegister = (username: string) => {
    setCurrentUser({
      username,
      balance: 200000, // Includes 100% new member bonus
    });
    showToast(`Pendaftaran berhasil! Selamat datang ${username}, bonus Anda aktif.`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast('Anda telah keluar dari akun');
  };

  // Place lottery bet handler
  const handlePlaceBet = (
    marketName: string,
    numbers: string,
    betAmount: number,
    gameType: '4D' | '3D' | '2D'
  ): boolean => {
    if (!currentUser) {
      setIsLoginOpen(true);
      return false;
    }
    if (currentUser.balance < betAmount) {
      showToast('Saldo Anda tidak mencukupi');
      return false;
    }

    setCurrentUser((prev) =>
      prev ? { ...prev, balance: prev.balance - betAmount } : null
    );
    showToast(`Taruhan ${gameType} [${numbers}] di pasaran ${marketName} sukses!`);
    return true;
  };

  // Lucky wheel reward claimed
  const handleRewardClaimed = (amount: number, label: string) => {
    setCurrentUser((prev) => {
      const current = prev || { username: 'MemberOrion', balance: 0 };
      return { ...current, balance: current.balance + amount };
    });
    showToast(`Hadiah ${label} berhasil ditambahkan ke saldo!`);
  };

  // Claim promo bonus
  const handleClaimPromo = (promo: PromoItem) => {
    if (!currentUser) {
      setIsLoginOpen(true);
      return;
    }
    setCurrentUser((prev) =>
      prev ? { ...prev, balance: prev.balance + 25000 } : null
    );
    showToast(`Promo ${promo.title} berhasil diaktifkan!`);
  };

  // Provider click handler
  const handleSelectProvider = (provider: ProviderItem) => {
    if (provider.isMaintenance) {
      showToast(`Provider ${provider.name} saat ini sedang masa pemeliharaan rutin.`);
      return;
    }
    if (!currentUser) {
      showToast(`Silakan masuk untuk bermain ${provider.name}`);
      setIsLoginOpen(true);
      return;
    }
    showToast(`Memuat lobby permainan ${provider.name}... Selamat bermain!`);
  };

  // Bottom Navigation tab changer
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'rtp') {
      setIsRtpOpen(true);
    } else if (tab === 'promo') {
      setIsPromoOpen(true);
    } else if (tab === 'hubungi') {
      setIsSupportOpen(true);
    }
  };

  // Download APK handler
  const handleDownloadApk = () => {
    showToast('Mengunduh installer Oriontoto Official APK v3.2...');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-amber-400 text-black font-bold text-xs rounded-full shadow-[0_4px_16px_rgba(254,219,55,0.4)] animate-in fade-in slide-in-from-top-2 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Side Navigation Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenBukuMimpi={() => setIsBukuMimpiOpen(true)}
        onOpenRtp={() => setIsRtpOpen(true)}
        onOpenPromo={() => setIsPromoOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
        onLoginSubmit={handleLogin}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 mt-14 pb-16">
        {/* Banner Carousel Slider */}
        <BannerSlider
          onBannerClick={() => setIsPromoOpen(true)}
        />

        {/* Marquee Ticker Announcement */}
        <MarqueeTicker />

        {/* MASUK & DAFTAR Glowing Action Buttons */}
        <AuthBar
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
          isLoggedIn={!!currentUser}
        />

        {/* Sticky Game Categories Navigation */}
        <GameCategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* Progressive Jackpot Counter */}
        <ProgressiveJackpot />

        {/* Pasaran Togel 3Prize Live Results (Shown on 'all' or 'togel') */}
        {(selectedCategory === 'all' || selectedCategory === 'togel') && (
          <LotteryMarketList
            onSelectMarket={(market) => setSelectedMarket(market)}
          />
        )}

        {/* Slot Providers */}
        {(selectedCategory === 'all' || selectedCategory === 'slot') && (
          <ProviderSection
            category="slot"
            title="Slot Online Gacor"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-2-mobile.png?s=bfbb653b50a0f71bb7967b94f73febd7"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Live Casino Providers */}
        {(selectedCategory === 'all' || selectedCategory === 'live-casino') && (
          <ProviderSection
            category="live-casino"
            title="Live Casino Dealer"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-3-mobile.png?s=a6a5f2baa715e01c443800b8ba1510d7"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Sports Providers */}
        {(selectedCategory === 'all' || selectedCategory === 'sport') && (
          <ProviderSection
            category="sport"
            title="Sportsbook & Taruhan Bola"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-5-mobile.png?s=ff35fb30d93a8b38470bdb515ee0f5b2"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Sabung Ayam */}
        {(selectedCategory === 'all' || selectedCategory === 'sabung-ayam') && (
          <ProviderSection
            category="sabung-ayam"
            title="Sabung Ayam Live SV388"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-8-mobile.png?s=23e488a1b54d0b57b1894a6ef19dc4b9"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Tembak Ikan */}
        {(selectedCategory === 'all' || selectedCategory === 'tembak-ikan') && (
          <ProviderSection
            category="tembak-ikan"
            title="Tembak Ikan Arcade"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-4-mobile.png?s=63e6251efc14724ae072b55306ab484c"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Virtual Games */}
        {(selectedCategory === 'all' || selectedCategory === 'virtual') && (
          <ProviderSection
            category="virtual"
            title="Virtual Games"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-6-mobile.png?s=7925b9682d24c145c273d393f412ebe4"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Crash Games */}
        {(selectedCategory === 'all' || selectedCategory === 'crash-game') && (
          <ProviderSection
            category="crash-game"
            title="Crash Game (Aviator / Spaceman)"
            iconUrl="https://oriontoto.dataklmsad902.site/asset/images/game-9-mobile.png?s=8046c23620a8f1296345390df52c8ec0"
            onSelectProvider={handleSelectProvider}
          />
        )}

        {/* Payment Methods & Banks Grid */}
        <BankSection />

        {/* Footer with certifications & 18+ */}
        <FooterSection />
      </main>

      {/* Floating Circular Action Menu */}
      <CircularFabMenu
        onOpenLuckyWheel={() => setIsLuckyWheelOpen(true)}
        onOpenPaymentProof={() => setIsPaymentProofOpen(true)}
        onOpenLiveChat={() => setIsSupportOpen(true)}
        onDownloadApk={handleDownloadApk}
      />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomNav
        currentTab={activeTab}
        onTabChange={handleTabChange}
        onOpenLogin={() => {
          if (!currentUser) setIsLoginOpen(true);
          else showToast(`Akun aktif: ${currentUser.username}`);
        }}
        isLoggedIn={!!currentUser}
      />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLogin}
        onSwitchToRegister={() => setIsRegisterOpen(true)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegisterSuccess={handleRegister}
        onSwitchToLogin={() => setIsLoginOpen(true)}
      />

      <BukuMimpiModal
        isOpen={isBukuMimpiOpen}
        onClose={() => setIsBukuMimpiOpen(false)}
        onBetNumber={(num) => {
          setIsBukuMimpiOpen(false);
          showToast(`Nomor ${num} terpilih`);
        }}
      />

      <RtpLiveModal
        isOpen={isRtpOpen}
        onClose={() => setIsRtpOpen(false)}
        onPlayGame={(game) => {
          setIsRtpOpen(false);
          handleSelectProvider({
            id: 999,
            name: game.provider,
            category: 'slot',
            image: game.image,
          });
        }}
      />

      <LuckyWheelModal
        isOpen={isLuckyWheelOpen}
        onClose={() => setIsLuckyWheelOpen(false)}
        onRewardClaimed={handleRewardClaimed}
      />

      <MarketDetailModal
        market={selectedMarket}
        onClose={() => setSelectedMarket(null)}
        currentUser={currentUser}
        onPlaceBet={handlePlaceBet}
      />

      <PaymentProofModal
        isOpen={isPaymentProofOpen}
        onClose={() => setIsPaymentProofOpen(false)}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      <PromoModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
        onClaimPromo={handleClaimPromo}
      />

      <WelcomeModal
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
      />
    </div>
  );
}
