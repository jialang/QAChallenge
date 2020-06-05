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
}).tag('@smoke')