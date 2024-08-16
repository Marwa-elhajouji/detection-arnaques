export const Announcement = {
  contacts: {
    firstName: String,
    lastName: String,
    email: String,
    phone: {
      value: String
    }
  },
  creationDate: String,
  price: Number,
  publicationOptions: [String],
  reference: String,
  vehicle: {
    make: String,
    model: String,
    version: String,
    category: String,
    registerNumber: String,
    mileage: Number
  }
};
