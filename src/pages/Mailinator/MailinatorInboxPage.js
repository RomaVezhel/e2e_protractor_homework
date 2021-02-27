const searchInput = $("#inbox_field");
const constants = require("../../resources/constantsMailinator");

const MailinatorInboxPage = function () {
  this.getSearchValue = function () {
    return searchInput.getAttribute("value");
  };

  this.get = function () {
    browser.get(constants.url);
  };
};

module.exports = new MailinatorInboxPage();
