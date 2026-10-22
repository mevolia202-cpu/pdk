/**
 * Utility functions for lottery numbers, formatting, and calculations
 */

export interface DreamBookEntry {
  id: number;
  keyword: string;
  code2D: string;
  code3D: string;
  code4D: string;
  category?: string;
}

/**
 * Splits a lottery winning number into single digit character balls.
 * e.g., "7890" -> ["7", "8", "9", "0"]
 */
export function splitBallDigits(numberStr: string): string[] {
  if (!numberStr) return ['-', '-', '-', '-'];
  const cleaned = numberStr.trim().replace(/\D/g, '');
  if (cleaned.length === 0) return ['-', '-', '-', '-'];
  
  // Pad or slice to 4 characters
  const padded = cleaned.padStart(4, '0').slice(-4);
  return padded.split('');
}

/**
 * Formats a numeric value into Indonesian Rupiah (IDR) currency format.
 */
export function formatCurrency(amount: number): string {
  if (isNaN(amount)) return '0';
  return new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Checks if a lottery market is currently accepting bets based on close and open time.
 */
export function isMarketOpen(
  closeTime: string,
  openTime: string,
  currentTimeStr?: string
): { isOpen: boolean; statusText: string } {
  // If explicitly given, use currentTimeStr (HH:mm), else derive from current system time
  const now = new Date();
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  if (currentTimeStr && currentTimeStr.includes(':')) {
    const parts = currentTimeStr.split(':');
    currentHours = parseInt(parts[0], 10);
    currentMinutes = parseInt(parts[1], 10);
  }

  const currentTotal = currentHours * 60 + currentMinutes;

  const [closeH, closeM] = closeTime.split(':').map(Number);
  const [openH, openM] = openTime.split(':').map(Number);

  const closeTotal = closeH * 60 + closeM;
  const openTotal = openH * 60 + openM;

  // Most lottery markets close at closeTime and reopen result at openTime.
  // When closeTotal < openTotal (same day, e.g. Close 17:30, Result 17:45):
  // Betting is open BEFORE closeTotal or AFTER openTotal.
  if (closeTotal <= openTotal) {
    if (currentTotal >= closeTotal && currentTotal < openTotal) {
      return { isOpen: false, statusText: 'Tutup (Menunggu Hasil)' };
    }
    return { isOpen: true, statusText: 'Buka' };
  } else {
    // Overnight cycle (e.g. close 23:00, open 01:00 next day)
    if (currentTotal >= closeTotal || currentTotal < openTotal) {
      return { isOpen: false, statusText: 'Tutup (Menunggu Hasil)' };
    }
    return { isOpen: true, statusText: 'Buka' };
  }
}

/**
 * Calculate standard 3Prize prize multiplier.
 * OrionToto standard 3Prize format payout table:
 * Prize 1: 4D x 6000, 3D x 700, 2D x 70
 * Prize 2: 4D x 2000, 3D x 200, 2D x 20
 * Prize 3: 4D x 1000, 3D x 100, 2D x 10
 */
export function calculatePrizeWinnings(
  betAmount: number,
  gameType: '4D' | '3D' | '2D',
  prizeLevel: 1 | 2 | 3
): number {
  if (betAmount <= 0) return 0;

  const payoutMultipliers: Record<string, Record<number, number>> = {
    '4D': { 1: 6000, 2: 2000, 3: 1000 },
    '3D': { 1: 700, 2: 200, 3: 100 },
    '2D': { 1: 70, 2: 20, 3: 10 },
  };

  const multiplier = payoutMultipliers[gameType]?.[prizeLevel] ?? 0;
  return betAmount * multiplier;
}

/**
 * Search the dream book (Buku Mimpi) by keyword with fuzzy case-insensitive matching.
 */
export function searchDreamBook(
  query: string,
  entries: DreamBookEntry[]
): DreamBookEntry[] {
  if (!query || !query.trim()) return entries;
  const q = query.trim().toLowerCase();

  return entries.filter((item) => {
    return (
      item.keyword.toLowerCase().includes(q) ||
      item.code2D.includes(q) ||
      item.code3D.includes(q) ||
      item.code4D.includes(q) ||
      (item.category && item.category.toLowerCase().includes(q))
    );
  });
}
