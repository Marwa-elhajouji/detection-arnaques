import { checkAnnouncement } from './rules/index.js';

const announcement = {
  contacts: {
    firstName: "Christophe",
    lastName: "Dupont",
    email: "testdepot@gmail.fr",
    phone: {
      value: "0607890901"
    }
  },
  creationDate: "2020-01-09T09:22:22.610Z",
  price: 19000,
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

checkAnnouncement(announcement).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
