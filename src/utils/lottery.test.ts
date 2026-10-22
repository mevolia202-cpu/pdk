import test from 'node:test';
import assert from 'node:assert/strict';
import {
  splitBallDigits,
  formatCurrency,
  isMarketOpen,
  calculatePrizeWinnings,
  searchDreamBook,
  DreamBookEntry,
} from './lottery';

test('splitBallDigits correctly splits 4 digits into array', () => {
  assert.deepEqual(splitBallDigits('4892'), ['4', '8', '9', '2']);
  assert.deepEqual(splitBallDigits('75'), ['0', '0', '7', '5']);
  assert.deepEqual(splitBallDigits(''), ['-', '-', '-', '-']);
});

test('formatCurrency formats Indonesian Rupiah numbers properly', () => {
  const result = formatCurrency(1250000);
  assert.equal(result.replace(/\s/g, ''), '1.250.000');
  assert.equal(formatCurrency(0), '0');
});

test('isMarketOpen evaluates open and closing windows', () => {
  // Close at 17:30, Open at 17:45
  // At 16:00 -> should be open
  const openResult = isMarketOpen('17:30', '17:45', '16:00');
  assert.equal(openResult.isOpen, true);

  // At 17:35 -> between 17:30 and 17:45 -> should be closed
  const closedResult = isMarketOpen('17:30', '17:45', '17:35');
  assert.equal(closedResult.isOpen, false);
});

test('calculatePrizeWinnings calculates 3Prize multipliers correctly', () => {
  // Bet 1000 on 4D Prize 1: 1000 * 6000 = 6,000,000
  assert.equal(calculatePrizeWinnings(1000, '4D', 1), 6000000);
  // Bet 1000 on 3D Prize 2: 1000 * 200 = 200,000
  assert.equal(calculatePrizeWinnings(1000, '3D', 2), 200000);
  // Bet 1000 on 2D Prize 3: 1000 * 10 = 10,000
  assert.equal(calculatePrizeWinnings(1000, '2D', 3), 10000);
  // Invalid bet
  assert.equal(calculatePrizeWinnings(0, '4D', 1), 0);
});

test('searchDreamBook filters entries by name or numbers', () => {
  const mockEntries: DreamBookEntry[] = [
    { id: 1, keyword: 'Kucing Makan', code2D: '18', code3D: '218', code4D: '7218' },
    { id: 2, keyword: 'Emas Batangan', code2D: '24', code3D: '424', code4D: '8424' },
    { id: 3, keyword: 'Mobil Balap', code2D: '57', code3D: '657', code4D: '1657' },
  ];

  const searchKucing = searchDreamBook('kucing', mockEntries);
  assert.equal(searchKucing.length, 1);
  assert.equal(searchKucing[0].keyword, 'Kucing Makan');

  const searchByCode = searchDreamBook('424', mockEntries);
  assert.equal(searchByCode.length, 1);
  assert.equal(searchByCode[0].keyword, 'Emas Batangan');

  const emptySearch = searchDreamBook('', mockEntries);
  assert.equal(emptySearch.length, 3);
});
