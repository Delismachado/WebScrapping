const puppeteer = require('puppeteer');
const fs = require('fs');

listUrls();

function listUrls() {
    (async() => {
        const browser = await puppeteer.launch({ handles: false });
        const page = await browser.newPage();

        await page.goto('https://www.ibm.com/br-pt');

        const hrefs = await page.$$eval('a', as => as.map(a => a.href));


        fs.writeFile('listUrls.json', JSON.stringify(hrefs, null, 2), err => {
            if (err) {
                throw new Error('something went wrong!')
            }
            console.log('well done!')
        });

        //console.log(hrefs);
        //return urlsList;

        // await page.close();
        // await browser.close();

    })();

}