const constants = require("../../resources/constantsMailinator");

const MotulProductPage = function () {
  this.get = function () {
    browser.get(constants.url);
  };
};

module.exports = new MotulProductPage();
