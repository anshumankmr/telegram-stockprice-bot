const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
const mongoUtil = require('./config/databases/mongo');
const { automateGenerateAccessTokenTask } = require('./api/services/kite/kite-request-token-cron');
const { saveAccessToken } = require('./api/services/kite/save-access-token');

// eslint-disable-next-line no-unused-vars
mongoUtil.connectToServer( async function( err, client ) {
	if (err) logger.info('error',err);
	// start the rest of your app here
	if (env === 'local'){
		await saveAccessToken();
		logger.info('Initialize the App');
	}	
	automateGenerateAccessTokenTask.start();
	// listen to requests
	app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

} );

/**
* Exports express
* @public
*/
module.exports = app;
