Feature('contactform');
// Set the basic url for this test
const assert = require('assert');
const basic_url = 'https://bluescapeqainterview.wordpress.com/contact/';

// Set the dataset for testing 
let contactFields = new DataTable(['name', 'email', 'website', 'date']);

// Test all applicable name, email, website, date with symbols 
contactFields.add(['ABCD-#!$&34560@', "1$#!23@yahoo.com", "http://www.yahoo.com", "June 02, 2020"]);
contactFields.add(["With’symbol", "12-3_test@yahoo.com.cn", "http://yahoo.com.cn", "06-01-20, 2020"]);
contactFields.add(["With unicode 天", "12abcd@123.cn.hk.io", "http://123.cn.hk.io", "06/01/2020, 2020"]);
contactFields.add(["  test  ", "12&abcd@123.cn.hk.io", " ", "00000"]);

Data(contactFields).Scenario('Contact Form', async (I, current) => {
    I.amOnPage(basic_url);
    I.seeElement('.site-content')
    I.fillField('g7-name', current.name);
    I.fillField('g7-email', current.email );
    I.fillField('g7-date', current.date)
    I.click('//button[@type="submit"]');
    I.see('Message Sent', 'h3');
    I.seeElement('.contact-form-submission');
    within('.contact-form-submission', async () => {
        var str = current.name;
        I.see("Name: " + current.name.trim());
        I.see("Email: " + current.email);
        I.see("Date: " + current.date); 
        // I.see("Website: ");
        let numsOfDataField = await I.grabNumberOfVisibleElements('p');
        assert.equal(4, numsOfDataField);
    });
}).tag('@filling');

