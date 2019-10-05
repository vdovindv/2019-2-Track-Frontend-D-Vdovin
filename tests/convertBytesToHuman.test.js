/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from '../convertBytesToHuman.js';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(-Infinity)).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('123456')).toBe(false);
  expect(convertBytesToHuman(0.1)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123456)).toBe('120.5625 KB');
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
});

// другая группа проверок
