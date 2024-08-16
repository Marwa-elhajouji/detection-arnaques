export const checkFirstNameLength = (firstName) => {
  return firstName.length > 2;
};

export const checkLastNameLength = (lastName) => {
  return lastName.length > 2;
};


export const checkAlphaNumericRate = (email) => {
  const localPart = email.split('@')[0];
  const alphaNumericCount = (localPart.match(/[a-zA-Z0-9]/g) || []).length;
  return (alphaNumericCount / localPart.length) > 0.7;
};

export const checkNumberRate = (email) => {
  const localPart = email.split('@')[0];
  const numCount = (localPart.match(/[0-9]/g) || []).length;
  return (numCount / localPart.length) < 0.3;
};


export const checkPriceQuotationRate = (price, quotation) => {
  const lowerBound = quotation * 0.8;
  const upperBound = quotation * 1.2;
  return price >= lowerBound && price <= upperBound;
};

export const checkRegisterNumberBlocklist = (isBlocked) => {
  return !isBlocked;
};
