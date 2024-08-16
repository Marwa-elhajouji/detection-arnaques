export const isBlockedRegisterNumber = async (registerNumber) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(registerNumber === "AA123AA");  
    }, 50);
  });
};
