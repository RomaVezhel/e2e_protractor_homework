const searchInput = $("fieldset #front_search_query");
// const searchButton = $("#eaddress");

const MotulMainPage = function () {
  this.get = function () {
    browser.get("https://xmoto.ua/");
  };

  this.clickInputField = function () {
    searchInput.click();
  };

  this.setSearchValue = function (value) {
    searchInput.sendKeys(value);
  };

  // this.clickSearchButton = function () {
  //   searchButton.click();
  // };
};

module.exports = new MotulMainPage();
