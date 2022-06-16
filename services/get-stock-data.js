
var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
	api_key: process.env.API_KEY,
	access_token: process.env.ACCESS_TOKEN
});


ticker.connect();
ticker.on('ticks', onTicks);
ticker.on('connect', subscribe);
ticker.on('disconnect', onDisconnect);
ticker.on('error', onError);
ticker.on('close', onClose);
ticker.on('order_update', onTrade);

function onTicks(ticks) {
	console.log("Ticks", ticks);
}

function subscribe() {
	var items = [408065, 884737];//Sample Ticker Items
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}

function onDisconnect(error) {
	console.log("Closed connection on disconnect", error);
}

function onError(error) {
	console.log("Closed connection on error", error);
}

function onClose(reason) {
	console.log("Closed connection on close", reason);
}

function onTrade(order) {
    console.log("Order update", order);
}