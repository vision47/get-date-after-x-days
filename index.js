const addDays = require("date-fns/addDays");
const format = require("date-fns/format");

const getDateAfterXDays = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  const newDate = format(result, "d-M-yyyy");
  return newDate;
};

module.exports = getDateAfterXDays;

// console.log(getDateAfterXDays(10));
