const constants = require("../../resources/constantsMotul");
const MotulMainPage = require("../../pages/Motul/MotulMainPage");
const MotulProductPage = require("../../pages/Motul/MotulProductPage");

const searchValue = "Motul 7100 10w40";

describe("Product Search", function () {
  it("Load Motul page", function () {
    browser.sleep(4000);
    MotulMainPage.get();
    expect(browser.getTitle()).toEqual(
      "Motul - купить масло Motul. Проверенная цена! Магазин в Киеве | Xmoto.ua - авторизованный интернет-магазин Мотюль"
    );
  });

  it("Set search product and submit", function () {
    MotulMainPage.clickInputField();
    MotulMainPage.setSearchValue(searchValue);
    browser.sleep(4000);
  });

  it("Check URL params", function () {
    MotulProductPage.get();
    expect(constants.url).toContain("motul-7100-10w40");
  });
});
