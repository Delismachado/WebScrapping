const puppeteer = require('puppeteer');

listUrls();

function listUrls() {
    (async() => {
        const browser = await puppeteer.launch({ handles: false });
        const page = await browser.newPage();

        await page.goto('https://g1.globo.com/');

        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        console.log(hrefs);

        return hrefs

        await page.close();
        await browser.close();

    })().catch((error) => {
        console.error(error);
    });;

}