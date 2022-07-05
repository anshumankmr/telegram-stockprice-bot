const cron = require('node-cron');
const logger = require('../../../config/logger');
const {generateAndSaveAccessToken} = require('./generate-access-token');

const automateGenerateAccessTokenTask = cron.schedule('45 8 * * *', async () => {
	try {
		await generateAndSaveAccessToken();
	}
	catch(err){
		logger.log('error',err.stack);
	}
});
module.exports = {automateGenerateAccessTokenTask};