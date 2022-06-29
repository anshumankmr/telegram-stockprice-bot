const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
const mongoUtil = require('./config/databases/mongo');
const { automateGenerateAccessTokenTask } = require('./api/services/kite/kite-request-token-cron');

// eslint-disable-next-line no-unused-vars
mongoUtil.connectToServer( function( err, client ) {
	if (err) console.log(err);
	// start the rest of your app here
	automateGenerateAccessTokenTask.start();
	// listen to requests
	app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

} );

/**
* Exports express
* @public
*/
module.exports = app;
