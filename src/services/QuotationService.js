export const getQuotation = async (vehicle) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(35000);  
    }, 50);
  });
};
