Feature('acceptcookie');
const CONFIG = require('../config/my.config.js').endpoint;

Scenario('Accept Cookie', async (I) => {
    I.amOnPage(CONFIG.basicurl);
    I.see('Privacy & Cookies:');
    I.seeElement('.widget_eu_cookie_law_widget');
    I.click('//input[@value="Close and accept"]')
    I.refreshPage();
    I.dontSee('Privacy & Cookies:');

    // cookie should not be seen again in more tabs
    I.openNewTab();
    I.amOnPage(CONFIG.basicurl);
    I.dontSee('Privacy & Cookies:');
}).tag('@smoke');

Scenario('Ignore Cookie', async (I) => {
    I.amOnPage(CONFIG.basicurl);
    I.see('Privacy & Cookies:');
    I.seeElement('.widget_eu_cookie_law_widget');
    I.refreshPage();
    I.see('Privacy & Cookies:');

    I.fillField('g7-name', "abc");
    I.fillField('g7-email', "abc@yahoo.com" );
    I.fillField('g7-date', "000");
    I.click('//button[@type="submit"]');
    I.see('Message Sent', 'h3');
    I.see('Privacy & Cookies:');

    I.openNewTab();
    I.amOnPage(CONFIG.basicurl);
    I.see('Privacy & Cookies:');
}).tag('@functional')