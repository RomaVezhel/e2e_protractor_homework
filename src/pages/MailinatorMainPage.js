const searchInput = element(by.id('addOverlay'));
const searchButton = element(by.id('go-to-public'));

const MailinatorMainPage = function() {
    this.get = function() {
        browser.get('https://www.mailinator.com/');
    };

    this.setSearchValue = function(value) {
        searchInput.sendKeys(value);
    };

    this.clickGoButton = function() {
        searchButton.click();
    };
};

module.exports = new MailinatorMainPage();