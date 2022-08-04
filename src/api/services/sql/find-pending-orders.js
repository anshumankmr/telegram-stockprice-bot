const { findAllRows } = require('./sql-helpers');
const { getStockData }  = require('../kite/get-stock-data');
const findPendingOrders = async () =>  {
	const rows = await findAllRows('Orders','status','PENDING');
	rows.forEach(row => {
		getStockData(row.dataValues.data);
	});
};
module.exports = {findPendingOrders};