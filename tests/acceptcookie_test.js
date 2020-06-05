Feature('acceptcookie');
const CONFIG = require('../config/my.config.js').endpoint;

Scenario('Accept Cookie', I => {
    I.amOnPage(CONFIG.basicurl);
    I.click('//input[@value="Close and accept"]')
    I.refreshPage();
    I.dontSee('Privacy & Cookies:')
}).tag('@prepare').tag('setup');