const puppeteer = require('puppeteer');

async function navigate() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://chromedino.com/');

    console.log('Entrou na página'); 

    await page.keyboard.press('ArrowUp');

    console.log('Pulou'); 

    await page.keyboard.press('ArrowDown', { delay: 300 });

    console.log('Abaixou'); 
}

navigate();