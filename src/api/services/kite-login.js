require('dotenv').config();
const puppeteer = require('puppeteer');
const { generateAccessToken } = require('./generate-access-token');

const kiteLoginHelper = async () => {
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
	let requestToken = '';
	if (url.indexOf('&action') !== -1){
		requestToken = url.slice(url.indexOf('request_token') + 'request_token'.length + 1,url.indexOf('&action'));
	} else {
		requestToken = url.slice(url.indexOf('request_token') + 'request_token'.length + 1);
	
	}
	if (requestToken === ''){
		return;
	}
	console.log(url);
	process.env.REQUEST_TOKEN = requestToken;
	console.log(process.env.REQUEST_TOKEN);
	await browser.close();
	let data = {
		'api_key': process.env.API_KEY,
		'request_token': requestToken,
		'checksum':  process.env.API_KEY + process.env.REQUEST_TOKEN + process.env.API_SECRET
	};
	await generateAccessToken(data);
};

module.exports = {kiteLoginHelper};