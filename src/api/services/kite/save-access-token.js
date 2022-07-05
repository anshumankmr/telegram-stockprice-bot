const { kiteLoginHelper } = require('./kite-login');
const mongoUtil = require('../../../config/databases/mongo');
const logger = require('../../../config/logger');

async function generateAndSaveAccessToken(){
	try{
		const kiteCredentials = await kiteLoginHelper();
		const db = mongoUtil.getDb();
		await db.collection('kite-token').deleteMany({});
		await db.collection('kite-token').insertOne(kiteCredentials);
	}catch(err){
		logger.info('error',err);
	}
}

module.exports = { generateAndSaveAccessToken };
