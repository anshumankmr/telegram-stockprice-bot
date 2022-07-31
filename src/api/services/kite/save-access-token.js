const { kiteLoginHelper } = require('./kite-login');
const mongoUtil = require('../../../config/databases/mongo');
const logger = require('../../../config/logger');

async function saveAccessToken(){
	try{
		const kiteCredentials = await kiteLoginHelper();
		logger.log('info','Generated a new pair of credentials');
		const db = mongoUtil.getDb();
		await db.collection('kite-token').deleteMany({});
		await db.collection('kite-token').insertOne(kiteCredentials);
		return kiteCredentials;
	}catch(err){
		logger.info('error',err);
	}
}

module.exports = { saveAccessToken };
