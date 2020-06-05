Feature('ErrorHandling');
// Set the basic url for this test
// I can't manage to grab the error popup
const assert = require('assert');
const CONFIG = require('../config/my.config.js').endpoint;

// Test error handling of contact fields
let contactFields = new DataTable(['name', 'email', 'website', 'date']);
contactFields.add(["      ", "Wtring@mail.yahoo.com" ,"http://www.yahoo.com", "06-01-20, 2020"]);
contactFields.add(["abc", " " ,"", "06-01-20, 2020"]);
contactFields.add(["abc", "abcd@yahoo.com" ,"  ", "06-01-20, 2020"]);
contactFields.add(["abc", "abc@yahoo.com" ,"http://www.google.com", "  "]);


Data(contactFields).Scenario('Contact Form', async (I, current) => {
    I.amOnPage(CONFIG.basicurl);
    I.seeElement('.site-content');
    I.fillField('g7-name', current.name);
    I.fillField('g7-email', current.email );
    I.fillField('g7-date', current.date);
    I.fillField('g7-website', current.website);

    I.click('//button[@type="submit"]');
    I.dontSee('Message Sent', 'h3');
    if (!current.name.trim()) {
        I.see("Error!")
        I.seeElement('.form-error-message');
        within('.form-error-message', async () => {
            I.see("Name is required");
        });
    } else {
        let name = await I.grabValueFrom('input[name=g7-name]')
        I.say('name is ' + name);
        assert.equal(name, current.name);
    }
    if (current.email.trim()) {
        let email = await I.grabValueFrom('input[name=g7-email]')
        I.say('email is ' + email);
        assert.equal(email, current.email);
    };
    if (current.website.trim()){
        let website = await I.grabValueFrom('input[name=g7-website]')
        I.say('website is ' + website);
        assert.equal(website, current.website);
    };
    if (!current.date.trim()) {
        I.see("Error!")
        I.seeElement('.form-error-message');
        within('.form-error-message', async () => {
            I.see("Date is required");
        });
    } else {
        let date = await I.grabValueFrom('input[name=g7-date]')
        I.say('date is ' + date);
        assert.equal(date, current.date);
    }
  
    I.saveScreenshot('after.png');
}).tag('@errorhandling');