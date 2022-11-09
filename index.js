const puppeteer = require('puppeteer');

// import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.ca');
    await page.screenshot({path: 'google.jpg'})
    await browser.close();
})();
