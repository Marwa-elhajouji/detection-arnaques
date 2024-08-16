import {
  checkFirstNameLength,
  checkLastNameLength,
  checkAlphaNumericRate,
  checkNumberRate,
  checkPriceQuotationRate,
  checkRegisterNumberBlocklist,
  
} from '../../src/rules/rules.js';
import { checkAnnouncement } from '../../src/rules/index.js';
test('checkFirstNameLength should return true for valid first name', () => {
  expect(checkFirstNameLength("John")).toBe(true);
});

test('checkFirstNameLength should return false for short first name', () => {
  expect(checkFirstNameLength("Jo")).toBe(false);
});

test('checkLastNameLength should return true for valid last name', () => {
  expect(checkLastNameLength("Doe")).toBe(true);
});

test('checkLastNameLength should return false for short last name', () => {
  expect(checkLastNameLength("Do")).toBe(false);
});

test('checkAlphaNumericRate should return true for valid alpha-numeric rate', () => {
  expect(checkAlphaNumericRate("john.doe123@gmail.com")).toBe(true);
});

test('checkAlphaNumericRate should return false for invalid alpha-numeric rate', () => {
  expect(checkAlphaNumericRate("!@#$%12345@gmail.com")).toBe(false);
});

test('checkNumberRate should return true for valid number rate', () => {
  expect(checkNumberRate("john.doe@gmail.com")).toBe(true);
});

test('checkNumberRate should return false for invalid number rate', () => {
  expect(checkNumberRate("john12345@gmail.com")).toBe(false);
});

test('checkPriceQuotationRate should return true for valid price range', async () => {
  expect(await checkPriceQuotationRate(31500, 35000)).toBe(true);
});

test('checkPriceQuotationRate should return false for invalid price range', async () => {
  expect(await checkPriceQuotationRate(25000, 35000)).toBe(false);
});

test('checkRegisterNumberBlocklist should return true for non-blocked number', () => {
  expect(checkRegisterNumberBlocklist(false)).toBe(true);
});

test('checkRegisterNumberBlocklist should return false for blocked number', () => {
  expect(checkRegisterNumberBlocklist(true)).toBe(false);
});






test('checkAnnouncement should return scam for invalid announcement', async () => {
  const invalidAnnouncement = {
    contacts: {
      firstName: "Jo",
      lastName: "Do",
       email: "!!!12345!!!@#$",
      phone: {
        value: "0607890901"
      }
    },
    creationDate: "2020-01-09T09:22:22.610Z",
    price: 25000,
    publicationOptions: ["STRENGTHS", "BOOST_VO"],
    reference: "B300853623",
    vehicle: {
      make: "HONDA",
      model: "CR-V",
      version: "1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
      category: "SUV_4X4_CROSSOVER",
      registerNumber: "AA123AA",
      mileage: 100000
    }
  };

  const result = await checkAnnouncement(invalidAnnouncement);
  expect(result.scam).toBe(true);
  expect(result.rules).toEqual(expect.arrayContaining([
    'rule:firstname:length',
    'rule:lastname:length',
    'rule:alpha_rate',
    'rule:number_rate',
    'rule:price:quotation_rate',
    'rule:registernumber:blocklist'
  ]));
});

test('checkAnnouncement should return non-scam for valid announcement', async () => {
  const validAnnouncement = {
    contacts: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      phone: {
        value: "0607890901"
      }
    },
    creationDate: "2020-01-09T09:22:22.610Z",
    price: 33000,
    publicationOptions: ["STRENGTHS", "BOOST_VO"],
    reference: "B300853623",
    vehicle: {
      make: "HONDA",
      model: "CR-V",
      version: "1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
      category: "SUV_4X4_CROSSOVER",
      registerNumber: "BB456BB",
      mileage: 100000
    }
  };

  const result = await checkAnnouncement(validAnnouncement);
  expect(result.scam).toBe(false);
  expect(result.rules).toEqual([]);
});