
const mongoUtil = require('../../../config/databases/mongo');
const apiHelper  = require('../../utils/api-helper');
const logger = require('../../../config/logger');

async function getLastQuotedPrice(args){
	try{
		const db = mongoUtil.getDb();
		const documents = await db.collection('kite-token').find().toArray();
		if (documents.length > 1 || documents === undefined || documents === null){
			return;
		}
		let data = documents[0];
		let options = {
			method: 'GET',
			url: `https://api.kite.trade/quote?i=${args.instrument_token}`// need to move this to constants.js
		};
		const response = await apiHelper.call(options,{
			'X-Kite-Version': '3', 
			'Authorization': `token ${data['api_key']}:${data['access_token']}`
		});
		return response.data.data[args.instrument_token].last_price;
	}catch(err){
		logger.log('error',err.code);
		return -1;
	}
}

module.exports = { getLastQuotedPrice };
