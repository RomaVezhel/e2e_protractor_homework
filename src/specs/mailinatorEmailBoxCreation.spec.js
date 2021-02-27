const constants = require("../resources/constants")
const mailinatorMainPage = require ('../pages/MailinatorMainPage');
const mailinatorInboxPage = require('../pages/MailinatorInboxPage');


const searchValue = 'mailinator';

describe('Mailinator email box creation', function() {
    it('Load mailinator page', function() {
        browser.sleep(5000);
        mailinatorMainPage.get();
        expect(browser.getTitle()).toEqual("Mailinator");
    });

    it('Set search value and submit', function() {
        mailinatorMainPage.setSearchValue(searchValue);
        mailinatorMainPage.clickGoButton();
        expect(browser.getTitle()).toEqual(`Mailinator`);
        browser.sleep(5000);
    });

    it('Check that mail box was created', function() {
       const searchValue = mailinatorInboxPage.getSearchValue();
        expect(searchValue).toEqual("mailinator");

    });

    it('Check URL params',  function() {
     mailinatorInboxPage.get();
    expect(constants.url).toContain('to=mailinator');
});
});




// https://www.mailinator.com/v3/index.jsp?zone=public&query=mailinator#/#inboxpane
// public inbox: mailinator
// update field