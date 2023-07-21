const nameList = require("../country/state/city/index.js");
const firstName = require("../utilities/utils/index.js");

const getPeopleInCity = (nameList) => {
  return firstName(nameList);
};

module.exports = getPeopleInCity;
