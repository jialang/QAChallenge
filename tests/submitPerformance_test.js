Feature('performanceTesting');
const CONFIG = require('../config/my.config.js').endpoint;

// Scenario('LoadPageTime', async({I}) => {
//     await I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
//     let data = await I.grabDataFromPerformanceTiming();
//     //Returned data
//     { // all results are in [ms]
//     responseEnd: 23,
//     domInteractive: 44,
//     domContentLoadedEventEnd: 196,
//     loadEventEnd: 241
//     }
// }).tag('@performance');