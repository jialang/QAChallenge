# QAChallenge
Test Strategy for QA Challenge Project

Test Requirement:
Open browser and navigate to https://bluescapeqainterview.wordpress.com/contact/
Fill out the fields with any applicable data 
Click on submit 
Validate the test using an assert

Test Scope:
This automation testsuite is focusing on contact submit functionality and basic performance checks. All other features such as social media links, likes are not covered. Load test and stress test are not considered in this version.


Test Tools
1.1 Codeceptjs 
1.2 puppeteer


Test Plan:

Functionality Test:
Cookie:
1.1 Accept cookie - Cookie policy disappeared on current tab and new tab
1.2 Ignore cookie - Cookie policy persists on page and doesn’t impact other functionalities on current page. 
Input fields:
Name: Can’t be empty; Accept all formats of data: all symbols, integers and characters (unicode). 
Email: Can’t be empty. Must follow email rules. 
Website: website must start with http:// 
Date: can’t be empty and allow multiple date formats. 
Submit:
3.1 Verify all input values are displayed correctly after submit
Go back:
4.1 Click go back, all input fields should be cleared
Browsers:
To test on compatibility on multiple browser types (Chrome, Firefox)

Performance Test:
Calculate average values for four performance metrics: responseEnd, domInteractive, domCOntentLoadedEventEnd, loadEventEnd. Data is saved. 


Framework Structure:
All constant values and configurations are stored under config/
Written records are saved under output/
All test cases are saved under tests/


How to run the test:
$ git clone https://github.com/jialang/QAChallenge.git 
  Note: Since node_modules is too big, I did not put it in github but it is required to run the test
$ cd QAChallenge
  Run test cases selected by keywords
  Functional Keywords are: cookie, submit, goback, errorhandling
  Test Level keywords are: performance, smoke
  To run smoke test - include cookie, submit, goback
    $ npx codeceptjs run --grep smoke --verbose
  To run on multiple browsers 
    $ npx codeceptjs run-multiple --all 
    Note: There are some exceptions when running all due to height setup 



To be discussed :
  Name field: 
    1. input ‘ after submit is converted to ’. 
    2. Longest length will be considered in later versions. 
  Website field: 
    1. is not mandatory. However when only white space is typed in the field, submit failed due to error message “Please enter a URL” 
  Date field:
    1. is mandatory and it allows invalid type of input as long as it is not empty string. It allows 0000, abcd, ….
  Performance Test: 
    1. I take the advantage of the retry method to re-render the page multiple times and record the average time in output/performanceRecords.txt. It could be used as a benchmark. I set RETRY for 6 times. It could be set to thousands or millions.
    2. Not sure if codeceptjs provide Graph support. It could be used to record the performance trend in the long run. 
  Test Report: 
    1. I saw there are some plugins that can generate test reports. It could be done in later versions.
  Test Orders:
    1. Codeceptjs is able to use keywords to separate different levels of test. I need to investigate more to find how to organize tests in certain orders.
  Mock Test: skipped 
