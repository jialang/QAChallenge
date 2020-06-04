Feature('LoadPage');

Scenario('Load page', (I) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    I.fillField('g7-name', "test1");
    I.fillField('g7-email', '12345@yahoo.com');
    I.fillField('g7-date', 'June 3, 2020')
    I.click('//button[@type="submit"]');
    // I.see('Privacy & Cookies:')
    // I.click('//input[@value="Close and accept"]')
    // I.dontSee('Privacy & Cookies:')
    I.see('Message Sent', 'h3');
});
