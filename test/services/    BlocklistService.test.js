import { isBlockedRegisterNumber } from '../../src/services/BlocklistService.js';

test('isBlockedRegisterNumber should return true for blocked register number', async () => {
  expect(await isBlockedRegisterNumber("AA123AA")).toBe(true);
});

test('isBlockedRegisterNumber should return false for non-blocked register number', async () => {
  expect(await isBlockedRegisterNumber("BB456BB")).toBe(false);
});
