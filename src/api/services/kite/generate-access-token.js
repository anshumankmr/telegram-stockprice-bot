require('dotenv').config();
const apiHelper  = require('../../utils/api-helper');
const crypto = require('crypto');
const qs = require('qs');
const logger = require('../../../config/logger');

async function generateAccessToken(data) {
	try{
		data.checksum = crypto.createHash('sha256').update(data.checksum).digest('hex');
		let stringifiedData = qs.stringify(data);
		const options = {
			method: 'POST',
			url: 'https://api.kite.trade/session/token',
			headers: { 
				'X-Kite-Version': '3', 
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data : stringifiedData
		};
		console.log(options);
		const response = await apiHelper.call(options);
		const kiteCreds = { api_key: data.api_key, access_token: response.data.data.access_token };
		return kiteCreds;
	}
	catch(err){
		logger.info('error',err.stack);
	}
}

module.exports = { generateAccessToken };