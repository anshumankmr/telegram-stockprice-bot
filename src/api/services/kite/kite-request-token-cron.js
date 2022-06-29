const cron = require('node-cron');
const { kiteLoginHelper } = require('./kite-login');
const logger = require('../../../config/logger');
const mongoUtil = require('../../../config/databases/mongo');

const automateGenerateAccessTokenTask = cron.schedule('45 8 * * *', async () => {
	try {
		const kiteCredentials = await kiteLoginHelper();
		const db = mongoUtil.getDb();
		await db.collection('kite-token').deleteMany({});
		console.log(await db.collection('kite-token').insertOne(kiteCredentials));
	}
	catch(err){
		logger.log('error',err.stack);
	}
});
module.exports = {automateGenerateAccessTokenTask};