const inboxField = element(by.id('inbox_field'));


const CheckBoxCreation = function() {
    this.getInboxValue = function (value) {
        inboxField.getText(value);
    }

}

module.exports = new CheckBoxCreation();