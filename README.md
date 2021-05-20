# Lab8

## Partners
Ricardo Guerrero
Joshua Hong

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

(1)

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

We would not use unit testing to test the message feature of a messaging application. A messaging feature would be too large of a component of the application to consider using unit testing. Instead you would use unit testing to test the smaller components withing the messaging feature.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

We would use a unit test to test the "max message length" feature as it is a small and simple enough component. The functionality of other components isn't largely affected by the feature so it makes sense to test the feature by itself within a unit test. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If we ran our puppeteer tests with "headless" set to true, a browser wouldn't open up when we run the tests. Instead, we would only see the results of the test in the terminal rather than the simulated user activity in the browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    const settings = await page.$('header img');
    await settings.evaluate( settings => settings.click() );

  });