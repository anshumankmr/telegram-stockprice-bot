const crypto = require('crypto');
const axios = require('axios');
const qs = require('qs');

require('dotenv').config();
const {createTicker} = require('./get-stock-data');

async function generateAccessToken(data) {
	data.checksum = crypto.createHash('sha256').update(data.checksum).digest('hex');

	let stringifiedData = qs.stringify(data);
	// console.log(data);
	const config = {
		method: 'POST',
		url: 'https://api.kite.trade/session/token',
		headers: { 
			'X-Kite-Version': '3', 
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data : stringifiedData
	};
	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data,null,2));
			const kiteCreds = { api_key: data.api_key, access_token: response.data.data.access_token };
			console.log(kiteCreds);
			createTicker(kiteCreds);
		})
		.catch(function (error) {
			console.log(error);
		});

}

module.exports = { generateAccessToken };