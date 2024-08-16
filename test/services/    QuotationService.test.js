import { getQuotation } from '../../src/services/QuotationService.js';

test('getQuotation should return the correct quotation', async () => {
  expect(await getQuotation({ make: "HONDA", model: "CR-V" })).toBe(35000);
});
