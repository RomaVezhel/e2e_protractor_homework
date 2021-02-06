const mailinatorMainPage = require ('../pages/MailinatorMainPage');

const searchValue = 'capitalix';

describe('Mailinator email box creation', function() {
    it('Load mailinator page', function() {
        browser.sleep(10000);
        mailinatorMainPage.get();
        expect(browser.getTitle()).toEqual("Mailinator");
    });

    it('Set search value and submit', function() {
        mailinatorMainPage.setSearchValue(searchValue);
        mailinatorMainPage.clickGoButton();
        expect(browser.getTitle()).toEqual(`Mailinator`);
        browser.sleep(5000);
    });

    it('Check than mail box was created', function() {

    // https://www.mailinator.com/v3/index.jsp?zone=public&query=mailinator#/#inboxpane
    // public inbox: mailinator
    // update field
    });
});