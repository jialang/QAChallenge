Feature('acceptcookie');

Scenario('Accept Cookie', I => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.click('//input[@value="Close and accept"]')
    I.refreshPage();
    I.dontSee('Privacy & Cookies:')
}).tag('@prepare').tag('setup');