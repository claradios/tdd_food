const puppeteer = require('puppeteer');

describe('Puppeteer test', () => {
    let page;
    beforeAll(async () => {
        const browser = await puppeteer.launch({
            headless:false,
            slowMo: 50,
            args: [
            '--window-size=1920,1080',
            '--window-posizition=200,0'],
            defaultViewport: {width: 1920, height: 1080}
        });
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:8080');
    });
    test('testing',async (done) => {
        await page.mouse.click(300, 300, { button: 'left' });
        await page.mouse.click(500, 300, { button: 'left' });
        await page.mouse.click(700, 300, { button: 'left' });

        done();
    });
});