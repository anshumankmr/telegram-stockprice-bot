
var KiteTicker = require('kiteconnect').KiteTicker;
const mongoUtil = require('../../../config/databases/mongo');

async function getStockData(args){
	
	const db = mongoUtil.getDb();
	const documents = await db.collection('kite-token').find().toArray();
	if (documents.length > 1 || documents === undefined || documents === null){
		return;
	}
	let data = documents[0];
	const ticker = new KiteTicker({
		api_key: data.api_key ,
		access_token: data.access_token
	});
	
	ticker.connect();
	ticker.on('ticks', onTicks);
	ticker.on('connect', subscribe);
	ticker.on('disconnect', onDisconnect);
	ticker.on('error', onError);
	ticker.on('close', onClose);
	ticker.on('order_update', onTrade);
	function onTicks(ticks) {
		console.log('Ticks', JSON.stringify(ticks, null , 2));
	}
	
	function subscribe() {
		var items = [parseInt(args.stockId)];//Sample Ticker Items
		ticker.subscribe(items);
		ticker.setMode(ticker.modeFull, items);
	}
	
	function onDisconnect(error) {
		console.log('Closed connection on disconnect', error);
	}
	
	function onError(error) {
		console.log('Closed connection on error', error);
	}
	
	function onClose(reason) {
		console.log('Closed connection on close', reason);
	}
	
	function onTrade(order) {
		console.log('Order update', order);
	}
	
}

module.exports = { getStockData };