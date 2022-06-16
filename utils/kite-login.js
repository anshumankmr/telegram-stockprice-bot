require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const [userId,password,pin,apikey] = [process.env.CLIENT_ID,process.env.PASSWORD,process.env.PIN,process.env.API_KEY];
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`https://kite.trade/connect/login?api_key=${apikey}&v=3`);
  const navigationPromise = page.waitForNavigation();
  await page.waitForSelector('#userid', { timeout: 5000 });
  await page.type('#userid', userId);

  await page.waitForSelector('#password', { timeout: 5000 });
  await page.type('#password', password);

  await page.click('#container > div > div > div.login-form > form > div.actions > button');

  await page.waitForSelector('#pin', { timeout: 5000 });
  await page.type('#pin', pin);

  await page.click('#container > div > div > div.login-form > form > div.actions > button');
  await navigationPromise;
  const url = await page.url();
  console.log(url);
  const requestToken = url.slice(url.indexOf('request_token') + 'request_token'.length + 1,url.indexOf('&action'));
  if (requestToken === ''){
    return;
  }
  process.env.REQUEST_TOKEN = requestToken;
  await browser.close();
})();