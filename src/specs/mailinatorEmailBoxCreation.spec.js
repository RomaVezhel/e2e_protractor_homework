const mailinatorMainPage = require ('../pages/MailinatorMainPage');
const checkBoxCreation = require('../pages/CheckBoxCreation');

const searchValue = 'mailinator';

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

    it('Check that mail box was created', function() {
        checkBoxCreation.getInboxValue.getText();
        expect(inboxField.getText()).toEqual("Mailinator");
        expect(browser.getCurrentUrl()).toEqual("https://www.mailinator.com/v4/public/inboxes.jsp?to=mailinator")
    });
});

// https://www.mailinator.com/v3/index.jsp?zone=public&query=mailinator#/#inboxpane
// public inbox: mailinator
// update field