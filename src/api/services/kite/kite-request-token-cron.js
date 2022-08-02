const cron = require('node-cron');
const logger = require('../../../config/logger');
const {saveAccessToken} = require('./save-access-token');

const automateGenerateAccessTokenTask = cron.schedule('45 8 * * *', async () => {
	try {
		await saveAccessToken();
	}
	catch(err){
		logger.log('error',err.stack);
	}
});
module.exports = {automateGenerateAccessTokenTask};