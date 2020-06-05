Feature('performanceTesting');
const CONFIG = require('../config/my.config.js').endpoint;
var responseEnd_total = 0;
var domContentLoadedEventEnd_total = 0;
var domInteractive_total = 0
var loadEventEnd_total = 0;
const RETRY = 6;
var tries = 0;
const assert = require('assert');

// all results are in [ms], try load the page 3 times and record the time in ms
var performanceRecords = {'responseEnd':0, 'domInteractive':0, 'domContentLoadedEventEnd':0, 'loadEventEnd':0};

Scenario('LoadPageTime', async(I) => {
    tries++;
    await I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
    let data = await I.grabDataFromPerformanceTiming();
    responseEnd_total += data['responseEnd'];
    domInteractive_total += data['domInteractive'];
    domContentLoadedEventEnd_total += data['domContentLoadedEventEnd'];
    loadEventEnd_total += data['loadEventEnd'];
    assert.equal(RETRY, tries);
}).tag('@performance').retry(6);

Scenario('get every performance', (I) => {
    I.amInPath('./output/');
    let date = Date();
    let message = "Average performance results as of " + date + ' :\n';
    performanceRecords['responseEnd'] = responseEnd_total / RETRY;
    performanceRecords['domInteractive'] = domInteractive_total / RETRY;
    performanceRecords['domContentLoadedEventEnd'] = domContentLoadedEventEnd_total / RETRY;
    performanceRecords['loadEventEnd'] = loadEventEnd_total / RETRY;

    for(var key in performanceRecords) {
        message += "The average " + key + " time is " + performanceRecords[key] + " in ms.\n";
    };
    I.writeToFile('performanceRecords.txt', message)
}).tag('@performance');
