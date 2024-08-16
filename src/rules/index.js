import { getQuotation } from '../services/QuotationService.js';
import { isBlockedRegisterNumber } from '../services/BlocklistService.js';
import { checkFirstNameLength, checkLastNameLength, checkAlphaNumericRate, checkNumberRate, checkPriceQuotationRate, checkRegisterNumberBlocklist } from './rules.js';

export const checkAnnouncement = async (announcement) => {
  const failedRules = [];

  if (!checkFirstNameLength(announcement.contacts.firstName)) failedRules.push('rule:firstname:length');
  if (!checkLastNameLength(announcement.contacts.lastName)) failedRules.push('rule:lastname:length');
  if (!checkAlphaNumericRate(announcement.contacts.email)) failedRules.push('rule:alpha_rate');
  if (!checkNumberRate(announcement.contacts.email)) failedRules.push('rule:number_rate');

  const quotation = await getQuotation(announcement.vehicle);
  if (!checkPriceQuotationRate(announcement.price, quotation)) failedRules.push('rule:price:quotation_rate');

  const isBlocked = await isBlockedRegisterNumber(announcement.vehicle.registerNumber);
  if (!checkRegisterNumberBlocklist(isBlocked)) failedRules.push('rule:registernumber:blocklist');

  return {
    reference: announcement.reference,
    scam: failedRules.length > 0,
    rules: failedRules
  };
};
