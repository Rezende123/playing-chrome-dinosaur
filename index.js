const puppeteer = require('puppeteer');

async function navigate() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://chromedino.com/');    
}

navigate();