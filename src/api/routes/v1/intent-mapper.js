const welcome = require('./intents/welcome');
const trackStock = require('./intents/track-stock');
const getPriceForStock = require('./intents/get-price-for-alert');
const getPhoneNumber = require('./intents/get-phone-number');
function createIntentMap()
{
	const intentMap = new Map();
	intentMap.set('Default Welcome Intent', welcome);
	intentMap.set('Track Stock', trackStock);
	intentMap.set('Get Price For Alert',getPriceForStock);
	intentMap.set('Get Phone Number',getPhoneNumber);
	return intentMap;
}
module.exports = createIntentMap;