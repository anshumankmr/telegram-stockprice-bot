const cron = require('node-cron');
const logger = require('../../../config/logger');
const { findPendingOrders } = require('./find-pending-orders');

const pendingOrdersTask = cron.schedule('15 9 * * *', async () => {
	try {
		await findPendingOrders();
	}
	catch(err){
		logger.log('error',err.stack);
	}
});
module.exports = {pendingOrdersTask};