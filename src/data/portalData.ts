export interface LotteryMarket {
  id: number;
  name: string;
  code: string;
  country: string;
  website?: string;
  logoLink?: string;
  dayOffDesc: string; // e.g. "Selasa & Jumat Off" or "Setiap Hari"
  dateDesc: string;
  dateDesc2: string;
  timeOff: string; // Close time e.g. "17:30"
  timeOn: string;  // Open / Result time e.g. "17:45"
  is3Prize: boolean;
  prize1: string[];
  prize2?: string[];
  prize3?: string[];
}

export interface ProviderItem {
  id: number;
  name: string;
  category: 'slot' | 'live-casino' | 'sport' | 'sabung-ayam' | 'tembak-ikan' | 'virtual' | 'crash-game';
  image: string;
  isMaintenance?: boolean;
  isHot?: boolean;
  gameCount?: number;
}

export interface BankItem {
  id: number;
  name: string;
  type: 'bank' | 'ewallet' | 'qris' | 'pulsa';
  image: string;
  status: 'online' | 'gangguan' | 'offline';
}

export interface PromoItem {
  id: number;
  title: string;
  category: string;
  bonus: string;
  description: string;
  minDepo: number;
  badge: string;
}

export interface RtpGame {
  id: number;
  title: string;
  provider: string;
  rtpPercent: number;
  volatility: 'Tinggi' | 'Sedang' | 'Rendah';
  pola: string[];
  jamGacor: string;
  image: string;
}

export const PORTAL_BANNERS = [
  {
    id: 1,
    title: 'DEPOSIT INSTANT QRIS 1 DETIK',
    subtitle: 'Bebas Biaya Admin & Tanpa Ribet',
    image: 'https://oriontoto.dataklmsad903.site/images/banner/4/zlAOZybKnwksLB0j.png',
    badge: 'QRIS FAST',
    accent: '#FEDB37',
  },
  {
    id: 2,
    title: 'MINIMAL DEPOSIT & WITHDRAW TERJANGKAU',
    subtitle: 'Deposit Min. Rp 10.000 | WD Min. Rp 25.000',
    image: 'https://oriontoto.dataklmsad903.site/images/banner/22/U2hv7EbSPdf18ZjF.png',
    badge: 'MIN DEPO/WD',
    accent: '#38BDF8',
  },
  {
    id: 3,
    title: 'TOGEL 3 PRIZE TERBESAR & TERPERCAYA',
    subtitle: 'Menang di Prize 1, 2, atau 3 Tetap Dibayar Lunas!',
    image: 'https://oriontoto.dataklmsad903.site/images/banner/21/Uj61QaF3LCAXR5oP.png',
    badge: '3 PRIZE TOGEL',
    accent: '#F59E0B',
  },
  {
    id: 4,
    title: 'LINK ALTERNATIF RESMI & ANTI BLOKIR',
    subtitle: 'Akses Cepat, Ringan & Aman Dari Segala Perangkat',
    image: 'https://oriontoto.dataklmsad903.site/images/banner/24/Hx2O2u4WFxqfNJLU.png',
    badge: 'OFFICIAL LINK',
    accent: '#10B981',
  },
  {
    id: 5,
    title: 'EVENT BONUS SPESIAL MEMBER SETIA',
    subtitle: 'Klaim Bonus Harian, Mingguan & Turnamen Bulanan',
    image: 'https://oriontoto.dataklmsad903.site/images/banner/25/1YahXv7opzaOzr9c.png',
    badge: 'PROMO BULANAN',
    accent: '#EF4444',
  },
];

export const LOTTERY_MARKETS_DATA: LotteryMarket[] = [
  {
    id: 1,
    name: 'SINGAPORE (SGP)',
    code: 'SGP',
    country: 'Singapore',
    dayOffDesc: 'Selasa & Jumat Off',
    dateDesc: 'Periode SGP-3829',
    dateDesc2: '22 Okt 2026',
    timeOff: '17:30 WIB',
    timeOn: '17:45 WIB',
    is3Prize: true,
    prize1: ['8', '4', '2', '9'],
    prize2: ['3', '1', '7', '0'],
    prize3: ['9', '5', '4', '2'],
  },
  {
    id: 2,
    name: 'HONGKONG (HK)',
    code: 'HK',
    country: 'Hongkong',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode HK-9104',
    dateDesc2: '22 Okt 2026',
    timeOff: '22:45 WIB',
    timeOn: '23:00 WIB',
    is3Prize: true,
    prize1: ['5', '9', '3', '1'],
    prize2: ['0', '8', '4', '6'],
    prize3: ['7', '2', '1', '9'],
  },
  {
    id: 3,
    name: 'SYDNEY (SDY)',
    code: 'SDY',
    country: 'Australia',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode SDY-5521',
    dateDesc2: '22 Okt 2026',
    timeOff: '13:30 WIB',
    timeOn: '13:50 WIB',
    is3Prize: true,
    prize1: ['2', '6', '8', '3'],
    prize2: ['7', '9', '0', '4'],
    prize3: ['1', '3', '5', '8'],
  },
  {
    id: 4,
    name: 'TOTO MACAU (19:00)',
    code: 'MC-19',
    country: 'Macau',
    dayOffDesc: 'Setiap Hari (Putaran 3)',
    dateDesc: 'Periode MC-7044',
    dateDesc2: '22 Okt 2026',
    timeOff: '18:55 WIB',
    timeOn: '19:15 WIB',
    is3Prize: false,
    prize1: ['6', '3', '0', '9'],
  },
  {
    id: 5,
    name: 'CAMBODIA',
    code: 'CBD',
    country: 'Cambodia',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode CBD-2219',
    dateDesc2: '22 Okt 2026',
    timeOff: '11:35 WIB',
    timeOn: '11:50 WIB',
    is3Prize: true,
    prize1: ['4', '1', '9', '7'],
    prize2: ['8', '2', '3', '5'],
    prize3: ['6', '0', '8', '1'],
  },
  {
    id: 6,
    name: 'TAIWAN',
    code: 'TW',
    country: 'Taiwan',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode TW-4890',
    dateDesc2: '22 Okt 2026',
    timeOff: '20:35 WIB',
    timeOn: '20:45 WIB',
    is3Prize: true,
    prize1: ['9', '7', '4', '2'],
    prize2: ['1', '5', '8', '0'],
    prize3: ['3', '6', '2', '9'],
  },
  {
    id: 7,
    name: 'SEOUL (KOREA)',
    code: 'SEO',
    country: 'South Korea',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode SEO-1402',
    dateDesc2: '22 Okt 2026',
    timeOff: '12:45 WIB',
    timeOn: '13:00 WIB',
    is3Prize: false,
    prize1: ['1', '8', '3', '5'],
  },
  {
    id: 8,
    name: 'TOKYO (JAPAN)',
    code: 'TKY',
    country: 'Japan',
    dayOffDesc: 'Setiap Hari',
    dateDesc: 'Periode TKY-3118',
    dateDesc2: '22 Okt 2026',
    timeOff: '16:15 WIB',
    timeOn: '16:30 WIB',
    is3Prize: false,
    prize1: ['7', '0', '5', '4'],
  },
];

export const GAME_CATEGORIES = [
  { id: 'all', label: 'Semua', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/menu-1.png?s=ea5390a79c7662d114416e2e72080c8c' },
  { id: 'togel', label: 'Togel', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-7-mobile.png?s=d820bafb22680078e57f7c8ef81ddbff' },
  { id: 'slot', label: 'Slot', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-2-mobile.png?s=bfbb653b50a0f71bb7967b94f73febd7' },
  { id: 'live-casino', label: 'Live Casino', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-3-mobile.png?s=a6a5f2baa715e01c443800b8ba1510d7' },
  { id: 'sport', label: 'Sport', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-5-mobile.png?s=ff35fb30d93a8b38470bdb515ee0f5b2' },
  { id: 'sabung-ayam', label: 'Sabung Ayam', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-8-mobile.png?s=23e488a1b54d0b57b1894a6ef19dc4b9' },
  { id: 'tembak-ikan', label: 'Tembak Ikan', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-4-mobile.png?s=63e6251efc14724ae072b55306ab484c' },
  { id: 'virtual', label: 'Virtual', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-6-mobile.png?s=7925b9682d24c145c273d393f412ebe4' },
  { id: 'crash-game', label: 'Crash Game', iconUrl: 'https://oriontoto.dataklmsad902.site/asset/images/game-9-mobile.png?s=8046c23620a8f1296345390df52c8ec0' },
];

export const PROVIDERS_DATA: ProviderItem[] = [
  // Slot
  { id: 1, name: 'Pragmatic Play', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/1/jLFiz37YpqPM3mLj.png?s=e3a68d2baa6203007f7422547249bf2e', isHot: true, gameCount: 380 },
  { id: 2, name: 'PG Soft', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/4/RqH3JPihnUEUZnbt.png?s=e816963aa1dde0d0409f574e9e5cd00e', isHot: true, gameCount: 145 },
  { id: 3, name: 'Joker Gaming', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/5/TN7zdjgvovZzcRc4.png?s=d5d3a30e4c3e6e157bb3d162445c8394', gameCount: 160 },
  { id: 4, name: 'Habanero', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/8/GJ8Wysa5zj3lqlV3.png?s=6cdaa4f54a69692e73fea742f95db5f7', isHot: true, gameCount: 180 },
  { id: 5, name: 'Spade Gaming', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/10/0JarDSqVfrqwZ5SR.png?s=2d9d028d5747c082ba1824feaa4375ca', gameCount: 120 },
  { id: 6, name: "Play'n GO", category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/13/DWUAbZnV6zxSQto5.png?s=348fd88777f2658a0b48e9c5d78d7e42', gameCount: 210 },
  { id: 7, name: 'JiLi', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/15/bB5pJwPHpcwM1ddA.png?s=0fc9e9002971199a08b68973dcbbd81c', isHot: true, gameCount: 95 },
  { id: 8, name: 'Naga Games', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/17/0DHQ7n9L70afeSfp.png?s=18c131bd2633529dc0f786d38345b28b', gameCount: 75 },
  { id: 9, name: 'CQ9', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/18/2X7cH0XUP2Hc00Rv.png?s=df6bcc5ebb91427a5b2243b439b1cc50', gameCount: 190 },
  { id: 10, name: 'Red Tiger', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/25/DUovjSXJG5gaFv8K.png?s=637caeafda4253004f20f72b889b2ada', gameCount: 230 },
  { id: 11, name: 'NoLimit City', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/35/q93GYUIracAv2mSX.png?s=96656363178fa2a65048d6c47dea2199', isHot: true, gameCount: 88 },
  { id: 12, name: 'MicroGaming', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/45/wYVzwccWYqBvJLVv.png?s=ca557ab11d269eeb71adff45b220965c', gameCount: 310 },
  { id: 13, name: 'Hacksaw Gaming', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/57/nDw1x9d8Ymo9gl2W.png?s=e295781712c47151a70c71badd433d61', isHot: true, gameCount: 92 },
  { id: 14, name: 'Fast Spin', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/50/6WJrgryZPHhoMVN0.png?s=39b49e702a4883bb470a05c8974c988b', gameCount: 80 },
  { id: 15, name: 'Relax Gaming', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/56/vCUJrvQ4XzJ0wQTC.png?s=95e8471261d4584026006de3b716ecea', gameCount: 115 },
  { id: 16, name: 'Yggdrasil', category: 'slot', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/55/PWFBpIM2qYM5Bosy.png?s=f25ae2b3e054c9507faf16be8037641d', gameCount: 140 },

  // Live Casino
  { id: 17, name: 'Pragmatic Live', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/2/UJ0lqXj8xtEHXIRZ.png?s=aabec18f8fdc66dbf236696338384d32', isHot: true, gameCount: 65 },
  { id: 18, name: 'Sexy Gaming', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/24/kZdHdsau6bShNNaP.png?s=08a6fd25dbfb570607b91c8f478e7e11', isHot: true, gameCount: 45 },
  { id: 19, name: 'Evolution Gaming', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/32/vIDDqrJMAKSDOzh9.png?s=1c4df54a7841ee35bcf2b5a8893c15d8', isHot: true, gameCount: 90 },
  { id: 20, name: 'SA Gaming', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/20/G3v9ogj2MIWqihMQ.png?s=17bae1caec2e6604bbd747c089ae3769', gameCount: 35 },
  { id: 21, name: 'WM Casino', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/48/YBCEHtCvSGkd0Pxu.png?s=177859c198219945c84126c6121eacd7', gameCount: 40 },
  { id: 22, name: 'YeeBet Live', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/79/kN2q6sLm1gzAmffA.png?s=2e33330cb7b72d975a4cc80699a339fe', gameCount: 25 },
  { id: 23, name: 'Imagine Live', category: 'live-casino', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/31/arvrTZspvflgccsV.png?s=09869854e439519ede458fb81ea9a0b2', gameCount: 30 },

  // Sport
  { id: 24, name: 'SBOBET Sports', category: 'sport', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/23/Z6ZKopAHr1RiUza7.png?s=e9e99b80bb506938f8cb23c159794afe', isHot: true, gameCount: 500 },
  { id: 25, name: 'SABA Sports', category: 'sport', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/39/HPcx4Jg97ivHuFp9.png?s=b911e6bdc24031c15ce2f2dfa7d0f35b', isHot: true, gameCount: 450 },
  { id: 26, name: 'UG Gaming', category: 'sport', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/21/Ne1B9q97ZW6fSA4P.png?s=af060eb94b66b2290ecfcf72f5661f5c', gameCount: 280 },
  { id: 27, name: 'CMD368', category: 'sport', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/34/mIcKRYz7e2Fc9KJE.png?s=e43fa3c8d16da1a2f66bb21f451512ae', gameCount: 320 },

  // Sabung Ayam
  { id: 28, name: 'SV388 Cockfight', category: 'sabung-ayam', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/29/800Y9WGx80B8yVoN.png?s=73d476300052f4b055d9e282419f540a', isHot: true, gameCount: 12 },
  { id: 29, name: 'Cock Fighting Arena', category: 'sabung-ayam', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/86/tPVJDE0pzLnx7GCM.png?s=9c17e92c1bbb3cad63b639741df5c1bc', gameCount: 8 },

  // Tembak Ikan
  { id: 30, name: 'Joker Fishing', category: 'tembak-ikan', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/6/k8hso3ZQKfVSsOMX.png?s=11572d86fc45bdc2aa1da95bb130a939', isHot: true, gameCount: 16 },
  { id: 31, name: 'Spade Fish Hunter', category: 'tembak-ikan', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/11/A1uFpyBRtGF1ewuj.png?s=833647bc88ffb7e3f8c5e081d45833fe', gameCount: 22 },
  { id: 32, name: 'JiLi Fishing', category: 'tembak-ikan', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/16/1EztDL1p1Q95q433.png?s=33caeaf404c9c7569c3fff9c9a5ed15d', isHot: true, gameCount: 18 },
  { id: 33, name: 'FaChai Fish', category: 'tembak-ikan', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/42/eq5acZiqygkylKIX.png?s=a091cb47b6d9da4832cddc6934fde165', gameCount: 14 },

  // Virtual
  { id: 34, name: 'SABA Virtual Sports', category: 'virtual', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/7/HMpuXIrUfXrysLri.png?s=b18cdbb6cdfd597b4582d3604ba17535', isHot: true, gameCount: 30 },
  { id: 35, name: 'Pragmatic Virtual', category: 'virtual', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/3/l2fkH6Y8DPIMvmIO.png?s=13986db9135dbf1d9e1a4d9534bc9a63', gameCount: 25 },
  { id: 36, name: 'Betradar Virtual', category: 'virtual', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/14/8qX00NV9tBdOVZjR.png?s=9d6a13b34545e223129103496037d62d', gameCount: 20 },

  // Crash Game
  { id: 37, name: 'Spaceman Crash', category: 'crash-game', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/70/KdPpetPR7OylzVjQ.png?s=ccd391789f1dbeb17ee3e73f13a32821', isHot: true, gameCount: 10 },
  { id: 38, name: 'Aviator Pro', category: 'crash-game', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/64/xIeKDf4Wu7169iak.png?s=d45ecd90bee9ef3281a6e62c9941df54', isHot: true, gameCount: 12 },
  { id: 39, name: 'JetX Crash', category: 'crash-game', image: 'https://onelive.dataklmsad902.site/images/provider-game-scroll/69/S2Iw735EpaaSVNtZ.png?s=1c5d02976990bdf3fe2cffb7085f5542', gameCount: 8 },
];

export const BANK_PARTNERS: BankItem[] = [
  { id: 1, name: 'BCA', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/1/RKNgcDBVvQRYBNou.jpg?s=18782a1b0e60f4468b9355863a968da4', status: 'online' },
  { id: 2, name: 'BNI', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/2/atyRXxGCczJNTWbQ.jpg?s=70a390594af4e79b7c1c566a13698f25', status: 'online' },
  { id: 3, name: 'BRI', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/3/Bj9aYfbtuSIH2HJz.jpg?s=d121f923329ec6f487da9af920a731b6', status: 'online' },
  { id: 4, name: 'CIMB Niaga', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/4/KoIoOzaVbKzXatqq.jpg?s=2e97a7e21bf21b96f45f5cba00de8441', status: 'online' },
  { id: 5, name: 'Mandiri', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/5/sCu0EcMp0w3Aaohd.jpg?s=62f7c93ab88f0820fa97c4bc2eb22dfc', status: 'online' },
  { id: 6, name: 'Danamon', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/6/e6J9Rf9sbVnWxUsR.jpg?s=e76a2ba82dcd79c27e1b326a33c38138', status: 'online' },
  { id: 7, name: 'OVO', type: 'ewallet', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/7/jHXmPQagp22marCe.jpg?s=5ea9e12d3fb00d02a1af80172ba14fd2', status: 'online' },
  { id: 8, name: 'GOPAY', type: 'ewallet', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/8/uVjqm7vFkyDaIqW5.jpg?s=411a2d4dc123397d192aade0afe6e516', status: 'online' },
  { id: 9, name: 'DANA', type: 'ewallet', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/9/JV33oeM3hFcYxjZ2.jpg?s=8484a45039cdf5a16d3c0ad7902fae5a', status: 'online' },
  { id: 10, name: 'LinkAja', type: 'ewallet', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/10/fSJsuR4MMJy8N6bw.jpg?s=cf75a08ad6a6d805f71a66fb73556322', status: 'online' },
  { id: 11, name: 'BSI Syariah', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/11/cr2QVQsNvmbx0Uvp.jpg?s=7d15e5334b8b0736b50aa42bba6decdf', status: 'online' },
  { id: 12, name: 'Bank Jago', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/17/6o5O26PByoiSM2Wq.jpg?s=3dac70d06441faa6929899da76f54162', status: 'online' },
  { id: 13, name: 'SeaBank', type: 'bank', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/19/otCySpW66iWEE2Ag.jpg?s=df253158bfe7ebbdcda6197b1dbab5ce', status: 'online' },
  { id: 14, name: 'ShopeePay', type: 'ewallet', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/52/bpsbW9T017ImZKS3.jpg?s=150c189d6995cffbaa5e92478d95a4a9', status: 'online' },
  { id: 15, name: 'QRIS Instant', type: 'qris', image: 'https://oriontoto.dataklmsad902.site/images/bank-list/53/e9oJT8hw1RqFukMG.jpg?s=8150ba344651bba01b7605baa5ee5596', status: 'online' },
];

export const RTP_SLOT_GAMES: RtpGame[] = [
  {
    id: 1,
    title: 'Gates of Olympus 1000',
    provider: 'Pragmatic Play',
    rtpPercent: 98.4,
    volatility: 'Tinggi',
    jamGacor: '14:00 - 16:30 WIB',
    pola: ['Auto 30x (Cepat)', 'Manual 10x', 'Turbo 50x (Centang Ganda)'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Mahjong Ways 2',
    provider: 'PG Soft',
    rtpPercent: 97.9,
    volatility: 'Sedang',
    jamGacor: '18:30 - 21:00 WIB',
    pola: ['Manual 20x (Bet Rendah)', 'Auto 50x Turbo', 'Manual 5x'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Starlight Princess 1000',
    provider: 'Pragmatic Play',
    rtpPercent: 98.2,
    volatility: 'Tinggi',
    jamGacor: '21:00 - 23:45 WIB',
    pola: ['Turbo 20x', 'Auto 30x', 'Buy Spin Jika Naik'],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Sweet Bonanza 1000',
    provider: 'Pragmatic Play',
    rtpPercent: 96.8,
    volatility: 'Sedang',
    jamGacor: '12:00 - 14:00 WIB',
    pola: ['Manual 15x', 'Auto 40x Cepat', 'DC Aktif'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Wild Bandito',
    provider: 'PG Soft',
    rtpPercent: 97.2,
    volatility: 'Sedang',
    jamGacor: '16:00 - 18:00 WIB',
    pola: ['Auto 30x', 'Turbo 30x', 'Manual 10x'],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Koi Gate',
    provider: 'Habanero',
    rtpPercent: 96.5,
    volatility: 'Rendah',
    jamGacor: '09:00 - 11:30 WIB',
    pola: ['Manual 18x', 'Auto 25x', 'Manual 7x'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&auto=format&fit=crop&q=80',
  },
];

export const PROMOTIONS_DATA: PromoItem[] = [
  {
    id: 1,
    title: 'Bonus New Member 100% Slot & Togel',
    category: 'Member Baru',
    bonus: '100% Max Rp 1.000.000',
    description: 'Klaim bonus sambutan 100% untuk deposit perdana. Syarat TO sangat ringan hanya 5x!',
    minDepo: 25000,
    badge: 'HOT PROMO',
  },
  {
    id: 2,
    title: 'Hadiah Togel 3Prize Terbesar',
    category: 'Togel 3Prize',
    bonus: 'Prize 1 x6000 | Prize 2 x2000 | Prize 3 x1000',
    description: 'Hanya di Oriontoto bertaruh 4D berkesempatan menang di Prize 1, 2, atau 3!',
    minDepo: 10000,
    badge: '3 PRIZE',
  },
  {
    id: 3,
    title: 'Bonus Rollingan Slot & Live Casino 0.8%',
    category: 'Mingguan',
    bonus: 'Cashback 0.8% Tanpa Batas',
    description: 'Dibagikan setiap hari Senin otomatis ke dalam akun anda tanpa minimal turnover.',
    minDepo: 10000,
    badge: 'AUTO REBATE',
  },
  {
    id: 4,
    title: 'Bonus Deposit Harian 10% Bebas Klaim',
    category: 'Harian',
    bonus: '10% Harian',
    description: 'Tambahan modal setiap hari hingga Rp 200.000 untuk seluruh game favorit anda.',
    minDepo: 50000,
    badge: 'DAILY BONUS',
  },
];

export const DREAM_BOOK_DATA = [
  { id: 1, keyword: 'Kucing Mati / Kucing Kawin', code2D: '18', code3D: '218', code4D: '7218', category: 'Hewan' },
  { id: 2, keyword: 'Ular Masuk Rumah / Ular Kobra', code2D: '32', code3D: '032', code4D: '6032', category: 'Hewan' },
  { id: 3, keyword: 'Dapat Uang Kertas / Uang Jatuh', code2D: '79', code3D: '179', code4D: '4179', category: 'Benda' },
  { id: 4, keyword: 'Emas Batangan / Perhiasan Emas', code2D: '24', code3D: '424', code4D: '8424', category: 'Benda' },
  { id: 5, keyword: 'Beli Mobil Baru / Tabrakan Mobil', code2D: '57', code3D: '657', code4D: '1657', category: 'Kendaraan' },
  { id: 6, keyword: 'Naik Sepeda Motor / Ban Bocor', code2D: '38', code3D: '338', code4D: '9338', category: 'Kendaraan' },
  { id: 7, keyword: 'Wanita Hamil / Melahirkan Bayi', code2D: '38', code3D: '638', code4D: '5638', category: 'Manusia' },
  { id: 8, keyword: 'Rumah Terbakar / Kobaran Api', code2D: '14', code3D: '714', code4D: '8714', category: 'Peristiwa' },
  { id: 9, keyword: 'Dikejar Polisi / Ditilang Polisi', code2D: '60', code3D: '260', code4D: '4260', category: 'Profesi' },
  { id: 10, keyword: 'Menangkap Ikan Mas Besar', code2D: '30', code3D: '430', code4D: '2430', category: 'Hewan' },
  { id: 11, keyword: 'Burung Merpati Terbang', code2D: '24', code3D: '324', code4D: '8324', category: 'Hewan' },
  { id: 12, keyword: 'Banjir Besar / Air Hujan Deras', code2D: '39', code3D: '839', code4D: '4839', category: 'Peristiwa' },
  { id: 13, keyword: 'Mandi di Sumur / Air Bersih', code2D: '15', code3D: '215', code4D: '7215', category: 'Aktivitas' },
  { id: 14, keyword: 'Koleksi Gigi Copot / Gigi Patah', code2D: '28', code3D: '928', code4D: '6928', category: 'Kesehatan' },
  { id: 15, keyword: 'Menang Taruhan / Jackpot Besar', code2D: '88', code3D: '988', code4D: '8988', category: 'Keberuntungan' },
];
